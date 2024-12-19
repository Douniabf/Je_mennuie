import React from "react";
import './Panneau.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';



export default function Panneau () {
  return (
    <div className="fond">
      <article className="panneau" id="patate">
        <FontAwesomeIcon className="vis1" icon={faCircleXmark} style={{color: "#ababab",}} />
        <FontAwesomeIcon className="vis2" icon={faCircleXmark} style={{color: "#ababab",}} />
        <FontAwesomeIcon className="vis3" icon={faCircleXmark} style={{color: "#ababab",}} />
        <FontAwesomeIcon className="vis4" icon={faCircleXmark} style={{color: "#ababab",}} />
      </article>
    </div>
  );
};
