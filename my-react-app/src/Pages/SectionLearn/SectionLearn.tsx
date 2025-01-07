import React, { useState, useEffect } from "react";
import PaginationControls from "../../components/ui/PaginationControls/PaginationControls.js";
import "./SectionLearn.css";
import ButtonRecharge from "../../components/ui/ButtonRecharge/ButtonRecharge.js";
import ButtonRetour from "../../components/ui/ButtonRetour/ButtonRetour.js";
import Panneau from "../../components/Panneau/Panneau.js";

type Page = {
	title: string;
	extract: string;
	content_urls: {
		desktop: { page: string };
		mobile: { page: string };
	};
};

const PageLearn = () => {
	const [pages, setPages] = useState<Page[]>([]);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchPage = async (): Promise<Page> => {
		try {
			setLoading(true);
			setError(null);
			const response = await fetch(
				"https://fr.wikipedia.org/api/rest_v1/page/random/summary",
			);
			if (!response.ok) {
				throw new Error("Erreur lors du chargement de la page.");
			}
			const data = await response.json();
			console.log(data);
			console.log(data.title);
			return data as Page;
		} catch (err) {
			setError((err as Error).message);
			return {
				title: "Erreur",
				extract: "Erreur lors du chargement de la page.",
				content_urls: { desktop: { page: "" }, mobile: { page: "" } },
			};
		} finally {
			setLoading(false);
		}
	};

	console.log(pages[0]?.title);

	// const handleNext = async () => {
	//   if (currentIndex === pages.length - 1) {
	//     const newPage = await fetchPage();
	//     setPages((prevPages) => [...prevPages, newPage]);
	//   }
	//   setCurrentIndex((prevIndex) => prevIndex + 1);
	// };

	// const handlePrev = () => {
	//   if (currentIndex > 0) {
	//     setCurrentIndex((prevIndex) => prevIndex - 1);
	//   }
	// };

	useEffect(() => {
		const loadInitialPage = async () => {
			const initialPage = await fetchPage();
			setPages([initialPage]);
			setCurrentIndex(0);
		};
		loadInitialPage();
	}, []);

	return (
		<div className="pageLearn">
			<Panneau>
				<div className="Api">
					{loading && <p>Chargement...</p>}
					{/* {error && <p style={{ color: "red" }}>{error}</p>} */}
					<div className="api-text">
						<h1>{pages[0]?.title}</h1>
						{!loading && !error && pages[currentIndex]?.extract}
					</div>
				</div>
				{/* <div className="controls">
        <PaginationControls
          onPrev={handlePrev}
          onNext={handleNext}
          disabledPrev={currentIndex <= 0 || loading}
          disabledNext={loading}
        />
      </div> */}
			</Panneau>
			<div className="container_buttons">
				<ButtonRecharge onClick={fetchPage} className=".button-recharge" />
				<ButtonRetour />
			</div>
		</div>
	);
};

export default PageLearn;
