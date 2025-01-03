import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BodyColorChanger = () => {
  const location = useLocation();

  useEffect(() => {
    const colors: Record<string, string> = {
      "/": "#f8f9fa",
      "/comic": "#FFE100",//  page "Comic"
      "/inspire": "#09E0DD", // page "Inspire"
      "/learn": "#FC03DF", // page "Learn"
    };

    document.body.style.backgroundColor = colors[location.pathname] || "D9D9D9";
  }, [location.pathname]);

  return null; 
};

export default BodyColorChanger;


