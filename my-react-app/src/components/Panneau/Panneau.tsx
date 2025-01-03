import React from "react";
import "./Panneau.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faPrescriptionBottleMedical } from "@fortawesome/free-solid-svg-icons/faPrescriptionBottleMedical";

export default function Panneau({ children}) {
	return (
		<div className="fond">
			<article className="panneau" id="patate">
				<FontAwesomeIcon
					className="vis1"
					icon={faCircleXmark}
					style={{ color: "#ababab" }}
				/>
				<FontAwesomeIcon
					className="vis2"
					icon={faCircleXmark}
					style={{ color: "#ababab" }}
				/>
				<FontAwesomeIcon
					className="vis3"
					icon={faCircleXmark}
					style={{ color: "#ababab" }}
				/>
				<FontAwesomeIcon
					className="vis4"
					icon={faCircleXmark}
					style={{ color: "#ababab" }}
				/>
				<div className="panneau-content">{children}</div>
			</article>
		</div>
	);
}
