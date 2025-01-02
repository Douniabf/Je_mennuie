import React from 'react';
import './ButtonRetour.css';
import { useState, useEffect } from 'react';
// import ThreeButtons from '../ThreeButtonsPage/ThreeButtons';

export default function ButtonRetour({ onClick }) {
    return (
    <div>
        <button className="button-retour" onClick={()=> onClick}><img src='../assets/icon_home.png'/></button>
    </div>
    );
};
