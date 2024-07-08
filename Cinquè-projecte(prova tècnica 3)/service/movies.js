const APIKEY = '8414fae8'

export const searchMovies = async ({search}) => {
    if(search == '') return null 

    try{
        const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`)
        const data = await response.json()


        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }))
    }
    catch(e) {
        
        throw new Error('Error searching movies')
    }
    
       
     
}