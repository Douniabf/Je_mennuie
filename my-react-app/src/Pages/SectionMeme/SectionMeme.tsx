import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SectionMeme.css';
import ButtonRecharge from '../../components/ButtonRecharge/ButtonRecharge';
import ButtonRetour from '../../components/ButtonRetour/ButtonRetour';
import Panneau from '../../components/Panneau/Panneau';

export default function SectionMeme () {
const [meme, setMeme] = useState('https://static.demilked.com/wp-content/uploads/2024/09/random-memes-funny-5.jpeg');

const getMeme = async () => {
    console.log('Button clicked');
    try { 
        const response = await axios.get('https://api.humorapi.com/memes/random?api-key=bb880476fe7f45669c001bb019a8c220')
        console.log(response);
        setMeme(response.data.url);
    }
    catch (error) {
        console.error('Error fetching data: ', error);
    }
    };
    console.log(meme);

    useEffect(() => {
    getMeme();
    }, []);

    return (
            <div className = "pageMeme">
            <Panneau>
        {meme ? (
        <img
            src={meme}
        
            className="meme"
        />
        ) : (
        <p>Chargement du mème...</p>
        )}

</Panneau>
                <div className = "container_buttons">
                <ButtonRecharge onClick={getMeme} className = ".button-recharge" />
                <ButtonRetour />
                </div>
        </div>

);
};
