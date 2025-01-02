import React from 'react';
import './ButtonRecharge.css';
import { useState, useEffect } from 'react';
import SectionMeme from '../SectionMeme/SectionMeme';

export default function ButtonRecharge({ onClick }) {
    return (
    <div>
        <button className="button-recharge" onClick={()=> onClick}><img src='../assets/icon.png'/></button>
    </div>
    );
};
