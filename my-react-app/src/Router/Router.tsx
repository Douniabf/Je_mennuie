import { createBrowserRouter } from "react-router-dom";


import ThreeButtonsPage from "../components/ThreeButtonsPage/ThreeButtons.tsx";
import DisplayPoem from "../pages/DisplayPoem.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ThreeButtonsPage />,
	},
	{
		path: "/inspire",
		element: <DisplayPoem />,
	},
]);

export default router;
