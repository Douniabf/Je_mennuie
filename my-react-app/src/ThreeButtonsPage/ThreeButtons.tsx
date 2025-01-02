import { Link } from "react-router-dom";
import ButtonActivity from "../ButtonActivity";
import "./ThreeButtonsPage.css";

export default function ThreeButtonsPage() {
	const boxShadowSettings = "2px 2px 6px";

	return (
		<>
			<div className="container-buttons">
				<Link to="/laugh">
					<ButtonActivity
						idButton="fun-button"
						choice="m'amuser"
						style={{ color: "#ffe100", box_shadow: boxShadowSettings }}
					/>
				</Link>
				<Link to="/inspire">
					<ButtonActivity
						idButton="inspiration-button"
						choice="m'inspirer"
						style={{ color: "#09e0dd", box_shadow: boxShadowSettings }}
					/>
				</Link>
				<Link to="/learn">
					<ButtonActivity
						idButton="knowledge-button"
						choice="apprendre"
						style={{ color: "#fc03df", box_shadow: boxShadowSettings }}
					/>
				</Link>
			</div>
		</>
	);
}
