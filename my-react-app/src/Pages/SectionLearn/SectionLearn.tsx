import React, { useState, useEffect } from "react";
import ButtonRecharge from "../../components/ButtonRecharge/ButtonRecharge.js";
import ButtonRetour from "../../components/ButtonRetour/ButtonRetour.js";
import Panneau from "../../components/Panneau/Panneau.js";
import "./SectionLearn.css";

const PageLearn = () => {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);

  const fetchPage = async () => {
    setError(null);
    try {
      const response = await fetch("https://fr.wikipedia.org/api/rest_v1/page/random/summary");
      if (!response.ok) throw new Error("Erreur lors du chargement de la page.");
      const data = await response.json();
      setPage(data);
    } catch (err) {
      setError(err.message);
    }
  };
  // const handleNext = async () => {
	//   if (currentIndex === pages.length - 1) {
	//     const newPage = await fetchPage();
	//     setPages((prevPages) => [...prevPages, newPage]);
	//   }
	//   setCurrentIndex((prevIndex) => prevIndex + 1);
	// };

	// const handlePrev = () => {
	//   if (currentIndex > 0) {
	//     setCurrentIndex((prevIndex) => prevIndex - 1);
	//   }
	// };

  useEffect(() => {
    fetchPage();
  }, []);

  return (
    <div className="pageLearn">
      <Panneau>        
          {error && <p style={{ color: "red" }}>{error}</p>}
          {page ?( 
			<div className="Api">
				<div className="api-text">
				<h1>{page.title}</h1>
				<p className="api-extract">{page.extract}</p>
				</div>
			</div>
          ) : (
			<p>Chargement d'une page Wikipédia...</p>
		  )}
       
	   	{/* <div className="controls">
			<PaginationControls
			onPrev={handlePrev}
			onNext={handleNext}
			disabledPrev={currentIndex <= 0 || loading}
			disabledNext={loading}
			/>
         </div> */}
      </Panneau>
      <div className="container_buttons">
        <ButtonRecharge onClick={fetchPage} />
        <ButtonRetour />
      </div>
    </div>
  );
};

export default PageLearn;


