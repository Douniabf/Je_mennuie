import axios from "axios";
import { useEffect, useState } from "react";
import "./SectionPoem.css";
import Panneau from "../../components/Panneau/Panneau";
import ButtonRecharge from "../../components/ButtonRecharge/ButtonRecharge";
import ButtonRetour from "../../components/ButtonRetour/ButtonRetour";

export default function DisplayPoem() {
	const [poem, setPoem] = useState(null);

	const fetchPoem = async () => {
		try {
			const response = await axios.get("https://poetrydb.org/random");
			const data = response.data;

			console.log("data -->", data);
			console.log("data index 0 -->", data[0]);
			console.log("poem lines -->", data[0].lines);
			setPoem(data[0]);
		} catch (error) {
			console.error("Erreur lors de la récupération des poèmes :", error);
		}
	};

	useEffect(() => {
		fetchPoem();
	}, []);

	return (
		<div className="pagePoem">
			<Panneau>
				{poem ? (
					<div className="container-poem">
						<h1 className="poem-title">{poem.title}</h1>
						<h2 className="poem-author">by {poem.author}</h2>
						<pre className="poem">{poem.lines.join("\n")}</pre>
					</div>
				) : (
					<p>Chargement d'un poème...</p>
				)}
			</Panneau>
			<div className="container_buttons">
				<ButtonRecharge onClick={fetchPoem} />
				<ButtonRetour />
			</div>
		</div>
	);
}
