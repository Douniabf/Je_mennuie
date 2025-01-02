import { createBrowserRouter } from "react-router-dom";

import ThreeButtonsPage from "../ThreeButtonsPage/ThreeButtons.tsx";
import DisplayPoem from "../Pages/DisplayPoem.tsx";

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
