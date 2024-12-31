// import '../pages/PageLearn.css';
import React, { useState, useEffect } from "react";

type Page = {
  title: string;
  extract: string;
  content_urls: {
    desktop: { page: string };
    mobile: { page: string };
  };
};

const PageLearn = () => {
  const [pages, setPages] = useState<Page[]>([]); // Typage explicite des pages  // Stocke les pages récupérées
  const [currentIndex, setCurrentIndex] = useState(-1);  // Index de la page actuelle
  const [loading, setLoading] = useState(false); // Indique si une page est en cours de chargement
  const [error, setError] = useState<string | null>(null); // Stocke les erreurs éventuelles

  // Fonction pour appeler l'API
  const fetchPage = async (): Promise<Page> => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://fr.wikipedia.org/api/rest_v1/page/random/summary");
      if (!response.ok) {
        throw new Error("Erreur lors du chargement de la page.");
      }
      const data = await response.json();
      console.log("API Response:", data); // <-- Ajout pour débogage
      return data as Page; // Assertion de type
    } catch (err) {
      setError((err as Error).message);
      return { title: "Erreur", extract: "Erreur lors du chargement de la page.", content_urls: { desktop: { page: "" }, mobile: { page: "" } } };
    } finally {
      setLoading(false);
    }
  };

  // Gestionnaire pour le bouton "Suivant"
  const handleNext = async () => {
    if (currentIndex === pages.length - 1) {
      const newPage = await fetchPage();
      setPages((prevPages) => [...prevPages, newPage]); // TypeScript accepte maintenant
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Gestionnaire pour le bouton "Précédent"
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Charger la première page au montage du composant
  useEffect(() => {
    const loadInitialPage = async () => {
      const initialPage = await fetchPage();
      setPages([initialPage]);
      setCurrentIndex(0);
    };
    loadInitialPage();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          minHeight: "100px",
        }}
      >
        {loading && <p>Chargement...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && pages[currentIndex]?.extract}
      </div>
      <button
        onClick={handlePrev}
        disabled={currentIndex <= 0 || loading}
        style={{ marginRight: "10px" }}
      >
        Précédent
      </button>
      <button
        onClick={handleNext}
        disabled={loading}
      >
        Suivant
      </button>
    </div>
  );
};

export default PageLearn;
