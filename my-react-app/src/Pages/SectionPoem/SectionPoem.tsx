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

			// console.log("data.poem 0 -->", data[1]);
			// console.log("data -->", data[0].lines);
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
		<div>
			<Panneau>
				{poem ? (
					<div className="container-poem">
						<h2>{poem.title}</h2>
						<h3>by {poem.author}</h3>
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
