import React from 'react';
import './ButtonRecharge.css';
import { useState, useEffect } from 'react';


export default function ButtonRecharge() {
    return (
    <div>
        <button className="button-recharge" onClick={()=> location.reload()}><img src='../assets/icon.png'/></button>
    </div>
    );
};
