import React, { useState, useEffect } from 'react';
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App() {
    
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data;
            setFact(fact);

        });
    }, []);


    useEffect(() => {
        if (!fact) return;
        
        const threeFirstWords = fact.split(' ', 3).join(' ')

        setImageUrl(`${threeFirstWords}?size=50&color=red`)
        console.log(imageUrl);

    },[fact]);





    return (
        <>
            <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_ENDPOINT_IMAGE_URL}${imageUrl}}`} alt={`imagen de gato usando las tres primeras palabras de ${fact}`} />}
            </main>
        </>
    );
}
