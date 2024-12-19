import React from "react";
import Panneau from '../Panneau/Panneau';
import './ButtonHome.css';

export default function ButtonHome () {
  return(    
    <div className="button-home-container">
      <Panneau />
      <div className="container">
        <div className="circle">
          <span className="text">Je m'ennuie</span>
        </div>
      </div>
    </div>  
  );
};





















