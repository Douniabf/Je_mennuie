import { useNavigate } from "react-router-dom";
import "./ButtonHome.css";

export default function ButtonHome() {

	const navigate = useNavigate();

	const handleClick = () => {
		document.querySelector('.circle').classList.add('circleAnimation');
		setTimeout(() => {
			navigate('/home');
		}, 3000);
	}

	return (
		<a className="circle" onClick={() => handleClick()}>
			<span className="text">Je m'ennuie</span>
		</a>
	);
}
