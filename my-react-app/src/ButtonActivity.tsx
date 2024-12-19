export default function ButtonActivity({ idButton, choice, style }) {
	return (
		<>
			<button
				id={idButton}
				style={{ boxShadow: `${style.box_shadow} ${style.color}` }}
				className="button-activity"
				type="button"
			>
				Je veux <span style={{ color: style.color }}>{choice}</span>
			</button>
		</>
	);
}
