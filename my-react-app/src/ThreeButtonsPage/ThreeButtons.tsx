import { Link } from "react-router-dom";
import ButtonActivity from "../ButtonActivity";
import "./ThreeButtonsPage.css";

export default function ThreeButtonsPage() {
	return (
		<>
			<div className="container-buttons">
				<Link to="/laugh" className="link-item">
					<ButtonActivity
						idButton="fun-button"
						choice="m'amuser"
						style={{ color: "#ffe100" }}
					/>
				</Link>
				<Link to="/inspire" className="link-item">
					<ButtonActivity
						idButton="inspiration-button"
						choice="m'inspirer"
						style={{ color: "#09e0dd" }}
					/>
				</Link>
				<Link to="/learn" className="link-item">
					<ButtonActivity
						idButton="knowledge-button"
						choice="apprendre"
						style={{ color: "#fc03df" }}
					/>
				</Link>
			</div>
		</>
	);
}
