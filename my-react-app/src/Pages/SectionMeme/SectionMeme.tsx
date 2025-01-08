import { useState, useEffect } from 'react';
import axios from 'axios';
import './SectionMeme.css';
import ButtonRecharge from '../../components/ui/ButtonRecharge/ButtonRecharge';
import ButtonRetour from '../../components/ui/ButtonRetour/ButtonRetour';
import Panneau from '../../components/Panneau/Panneau';

export default function SectionMeme () {
const apiKey = import.meta.env.VITE_APP_HUMOR_API_KEY;
const apiUrl = `${import.meta.env.VITE_APP_API_BASE_URL}/memes/random?api-key=${apiKey}`;

const defaultMeme = 'https://i.imgflip.com/6zufa6.jpg';
const [meme, setMeme] = useState(defaultMeme);
const [limitReached, setLimitReached] = useState(false);
const [loading, setLoading] = useState(false);

const getMeme = async () => {
    setLoading(true)
    try {
        const response = await axios.get(apiUrl);
        if (response.data.error && response.data.error.includes('limit')) {
            setLimitReached(true);
            setMeme(defaultMeme);
        } else {
            setMeme(response.data.url);
            setLimitReached(false);
        }
    }
    catch (error) {
        console.error('Error fetching data: ', error);
        setLimitReached(true);
        setMeme(defaultMeme);
    } finally {
        setLoading(false);
    }
};
useEffect(() => {
    getMeme();
}, []);

return (
    <div className = "pageMeme">
        <Panneau>
    <div className="container-meme">
        {loading ? (
            <p className="text-meme">Chargement du mème...</p>
        ) : limitReached ? (
                <img
                    src="https://i.imgflip.com/6zufa6.jpg" 
                    className="img-meme"
                    alt="Mème par défaut"
                />
        ) : (
            <img 
                src={meme} 
                className="img-meme" 
                alt="Un meme généré aléatoirement" 
            />
        )}
</div>
</Panneau>
                <div className = "container_buttons">
                <ButtonRecharge onClick={getMeme} className = ".button-recharge" />
                <ButtonRetour />
                </div>
    </div>
);
};
