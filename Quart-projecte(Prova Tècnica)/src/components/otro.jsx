import { useCatImage } from '../hooks/useImageCat.js'
import { useFactCat } from '../hooks/useFactCat.js';

export function Otro() {
    const {fact, refreshRandomFact} = useFactCat();
    const {imageUrl} = useCatImage({fact});


    return(
        <>
        
        {imageUrl && <img src={imageUrl} />}
        
        </>
    )
}