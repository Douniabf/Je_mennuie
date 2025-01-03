import { createBrowserRouter, Outlet } from "react-router-dom";
import BodyColorChanger from "../components/BodyColorChanger/BodyColorChanger";
import ButtonHome from "../Pages/ButtonHome/ButtonHome.tsx";import ThreeButtonsPage from "../components/ThreeButtonsPage/ThreeButtons.tsx";
import SectionPoem from "../Pages/SectionPoem/SectionPoem.tsx";
import SectionMeme from "../Pages/SectionMeme/SectionMeme.tsx";
import SectionLearn from "../Pages/SectionLearn/SectionLearn.tsx";

const Layout = () => (
  <>
    <BodyColorChanger/> 
    <Outlet /> {/* affiche la page actuelle */}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout doit contenir l'Outlet
    children: [
	{
		path: "/",
		element: <ButtonHome />,
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
     
    ],
  },

]);

export default router;
