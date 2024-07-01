import React, { useState, useEffect } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firtsWord}?size=50&color=red&json=true'

export function App() {
    
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            const {fact} = data;
            setFact(data.fact);

            const threeFirstWords = fact.split(' ', 3).join('')
            console.log(threeFirstWords);

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&&json=true`)
            .then(res => res.json())
            .then(response => {
                const {url} = response;
                setImageUrl(`https://cataas.com/${url}`)
                console.log(`https://cataas.com/${url}`)
                console.log(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            });

        });
    }, []);



    return (
        <>
            <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`imagen de gato usando las tres primeras palabras de ${fact}`} />}
            </main>
        </>
    );
}
