import React from "react";
import { Link } from "react-router-dom";

import Panneau from "../../components/Panneau/Panneau";
import "./PageLaunch.css";
import ButtonHome from "../../components/ButtonHome/ButtonHome";

export default function PageLaunch () {
	return (
        <div className = "pageLaunch">
		<Panneau>
            <ButtonHome />
		</Panneau>
        </div>
	);
}
