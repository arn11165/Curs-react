import { useState, useEffect } from 'react';

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return;
        
        const threeFirstWords = fact.split(' ', 3).join(' ')

        setImageUrl(`${threeFirstWords}?size=50&color=red`)
        console.log(imageUrl);

    },[fact]);
    return {imageUrl : `${CAT_ENDPOINT_IMAGE_URL}${imageUrl}`};
}

