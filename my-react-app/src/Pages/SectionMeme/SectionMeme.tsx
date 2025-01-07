import { useState, useEffect } from 'react';
import axios from 'axios';
import './SectionMeme.css';
import ButtonRecharge from '../../components/ui/ButtonRecharge/ButtonRecharge';
import ButtonRetour from '../../components/ui/ButtonRetour/ButtonRetour';
import Panneau from '../../components/Panneau/Panneau';

export default function SectionMeme () {
const apiKey = process.env.REACT_APP_HUMOR_API_KEY;
const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/memes/random?api-key=${apiKey}`;

const [meme, setMeme] = useState(null);

const [limitReached, setLimitReached] = useState(false);

const getMeme = async () => {
    try {
        const response = await axios.get(apiUrl);
        if (response.data.error && response.data.error.includes('limit')) {
            setLimitReached(true);
        } else {
            setMeme(response.data.url);
            setLimitReached(false);
        }
    }
    catch (error) {
        console.error('Error fetching data: ', error);
        setLimitReached(true);
    }
};
useEffect(() => {
    getMeme();
}, []);

return (
    <div className = "pageMeme">
        <Panneau>
            <div className = "container-meme">
                {limitReached ? (<p className = "text-meme">Vous avez épuisé le stock des memes ! 😬 Revenez demain pour la nouvelle portion de fun.</p>) 
                : meme ? (
                    <img src={meme} className="img-meme" alt="Un meme généré aléatoirement" />
                    ) : (<p>Chargement du mème...</p>)
                }
            </div>
        </Panneau>
                <div className = "container_buttons">
                <ButtonRecharge onClick={getMeme} className = ".button-recharge" />
                <ButtonRetour />
                </div>
    </div>
);
};
