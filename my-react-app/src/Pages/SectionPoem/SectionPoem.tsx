import axios from "axios";
import { useEffect, useState } from "react";
import "./SectionPoem.css";
import Panneau from "../../components/Panneau/Panneau";
import ButtonRecharge from "../../components/ui/ButtonRecharge/ButtonRecharge";
import ButtonRetour from "../../components/ui/ButtonRetour/ButtonRetour";

export default function DisplayPoem() {
	const [poem, setPoem] = useState(null);

	const fetchPoem = async () => {
		try {
			const response = await axios.get("https://poetrydb.org/random");
			const data = response.data;

			console.log("data.poem 0 -->", data);
			console.log("data -->", data[0].lines);
			setPoem(data[0]);
		} catch (error) {
			// Gestion des erreurs en cas de problème avec la requête
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
