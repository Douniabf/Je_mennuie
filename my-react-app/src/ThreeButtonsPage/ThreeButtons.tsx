import ButtonActivity from "../ButtonActivity";
import "./ThreeButtonsPage.css";

export default function ThreeButtonsPage() {
	const boxShadowSettings = "2px 2px 6px";

	return (
		<>
			<div className="container-buttons">
				<ButtonActivity
					idButton="fun-button"
					choice="m'amuser"
					style={{ color: "#ffe100", box_shadow: boxShadowSettings }}
				/>
				<ButtonActivity
					idButton="inspiration-button"
					choice="m'inspirer"
					style={{ color: "#09e0dd", box_shadow: boxShadowSettings }}
				/>
				<ButtonActivity
					idButton="knowledge-button"
					choice="apprendre"
					style={{ color: "#fc03df", box_shadow: boxShadowSettings }}
				/>
			</div>
		</>
	);
}
