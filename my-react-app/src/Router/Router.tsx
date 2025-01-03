import { createBrowserRouter, Outlet } from "react-router-dom";

import ThreeButtonsPage from "../components/ThreeButtonsPage/ThreeButtons";
import DisplayPoem from "../pages/DisplayPoem";
import PageLearn from "../pages/PageLearn";
import BodyColorChanger from "../components/BodyColorChanger/BodyColorChanger";

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
      { path: "/", 
		element: <ThreeButtonsPage /> 
	  },
      { path: "/inspire", 
		element: <DisplayPoem /> 
	  },
      { path: "/learn",
		element: <PageLearn /> 
	  },
    ],
  },
]);

export default router;
