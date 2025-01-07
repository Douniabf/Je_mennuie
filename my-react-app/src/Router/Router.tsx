import { createBrowserRouter, } from "react-router-dom";
import ButtonHome from "../components/ui/ButtonHome/ButtonHome.tsx";
import ThreeButtonsPage from "../Pages/ThreeButtonsPage/ThreeButtons.tsx";
import SectionPoem from "../Pages/SectionPoem/SectionPoem.tsx";
import SectionMeme from "../Pages/SectionMeme/SectionMeme.tsx";
import SectionLearn from "../Pages/SectionLearn/SectionLearn.tsx";
import PageLaunch from "../Pages/PageLaunch/PageLaunch.tsx";

const router = createBrowserRouter([ 
	{
		path: "/",
		element: <PageLaunch />,
	},
    { 
		path: "/home", 
		element: <ThreeButtonsPage /> 
	},
	{
		path: "/laugh",
		element: <SectionMeme />,
	},
	{
		path: "/inspire",
		element: <SectionPoem />,
	},
	{
		path: "/learn",
		element: <SectionLearn />,
	} 

]);

export default router;
