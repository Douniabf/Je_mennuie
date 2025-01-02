import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SectionMeme.css';
import ButtonRecharge from '../ButtonRecharge/ButtonRecharge';

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
                <div className = "container">
        {meme ? (
        <img
            src={meme}
            alt="Random Meme"
            className="meme"
        />
        ) : (
        <p>Chargement du mème...</p>
        )}

        </div>
                <ButtonRecharge onClick={getMeme} />
        </div>

);
};
