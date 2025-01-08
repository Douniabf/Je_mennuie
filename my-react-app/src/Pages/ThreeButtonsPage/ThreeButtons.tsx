import { Link } from "react-router-dom";
import "./ThreeButtonsPage.css";
import ButtonActivity from "../../components/ui/ButtonActivity";

export default function ThreeButtonsPage() {
	return (
		<>
			<div className="container-buttons">
				<Link to="/laugh" className="link-item">
					<ButtonActivity
						idButton="fun-button"
						choice="m'amuser"
						style={{ color: "#f7b307" }}
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
