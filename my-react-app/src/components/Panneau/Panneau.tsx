import React from "react";
import "./Panneau.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Panneau({ children }) {
	return (
		<div className="background-panneau">
			<article className="panneau">
				<div className="screws-top">
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
				</div>
				<div className="panneau-content">{children}</div>
				<div className="screws-bottom">
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
				</div>
			</article>
		</div>
	);
}
