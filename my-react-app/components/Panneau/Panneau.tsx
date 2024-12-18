import React from "react";
import './Panneau.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';



export default function Panneau () {
  return (
    <div className='card'>
      <article className="panneau">
        <FontAwesomeIcon icon={faCircleXmark} style={{color: "#ababab",}} />
      </article>
    </div>
  );
};
