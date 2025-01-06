import React from "react";
import { Link } from "react-router-dom";

import Panneau from "../../components/Panneau/Panneau";
import "./ButtonHome.css";

export default function ButtonHome() {
	return (
		<Panneau>

			<div className="container-home">
				<Link to = "/home" className="circle">
					<span className="text">Je m'ennuie</span>
				</Link>
			</div>
		{/* </div> */}
		</Panneau>
	);
}
