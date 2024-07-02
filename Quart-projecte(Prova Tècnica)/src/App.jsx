import React, { useState, useEffect } from 'react';
import './App.css'
import { getRandomFact } from './services/facts.js';
import { useCatImage } from './hooks/useImageCat.js';
import { useFactCat } from './hooks/useFactCat.js';
import { Otro } from './components/otro.jsx';


export function App() {

    const {fact, refreshRandomFact} = useFactCat();
    const {imageUrl} = useCatImage({fact});
    
    const handleClick = async () => {
        refreshRandomFact()
    }

    return (
        <>
            <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`imagen de gato usando las tres primeras palabras de ${fact}`} />}

            
            
            </main>
        </>
    );
};
