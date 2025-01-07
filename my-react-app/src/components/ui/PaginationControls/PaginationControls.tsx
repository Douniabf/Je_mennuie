import React from "react";
import "../PaginationControls/PaginationControls.css"

type PaginationControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
};

const PaginationControls: React.FC<PaginationControlsProps> = ({
  onPrev,
  onNext,
  disabledPrev,
  disabledNext,
}) => {
  return (
    <div >
      <button
        onClick={onPrev}
        disabled={disabledPrev}      
      >
        Précédent
      </button>
      <button onClick={onNext} disabled={disabledNext}>
        Suivant
      </button>
    </div>  
   
  );
};

export default PaginationControls;
