import React from "react";
import "./App.css";

import DisplayPoem from "./Pages/DisplayPoem";
import Panneau from "../components/Panneau/Panneau";

function App() {
	return (
		<>
			<Panneau>
				<DisplayPoem />
			</Panneau>
		</>
	);
}
export default App;
