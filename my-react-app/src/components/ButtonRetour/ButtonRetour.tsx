import React from 'react';
import { Link } from "react-router-dom";
import './ButtonRetour.css';
import { useState, useEffect } from 'react';
// import ThreeButtons from '../ThreeButtonsPage/ThreeButtons';

export default function ButtonRetour() {
	return (
		<div>
			<Link to="/home" className="button-retour">
				<img src="../assets/icon_home.png" alt="Home" />
			</Link>
		</div>
	);
}
