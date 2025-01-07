import React from "react";
import { Link } from "react-router-dom";

import Panneau from "../Panneau/Panneau";
import "./ButtonHome.css";

export default function ButtonHome() {
	return (
				<Link to = "/home" className="circle">
					<span className="text">Je m'ennuie</span>
				</Link>
	);
}
