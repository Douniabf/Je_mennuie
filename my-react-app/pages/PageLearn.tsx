import React, { useEffect } from 'react';
import '../pages/PageLearn.css';
import Panneau from '../src/components/Panneau/Panneau.tsx';
import ButtonRecharge from '../src/components/ButtonRecharge/ButtonRecharge.tsx'

const PageLearn = () => {

    useEffect(() => {
        document.querySelector('.fond').style.background = '#fc03df';
        document.querySelector('.page-container').style.background = '#fc03df';
    })

    return (
        <div className="page-container">
            <Panneau />
            <div className="iframe-container">
                <iframe
                    src="https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard"
                    title="Wikipedia Random Page"
                ></iframe>
            </div>
            <ButtonRecharge />
        </div>
    );
};

export default PageLearn;
