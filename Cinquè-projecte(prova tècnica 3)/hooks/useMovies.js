import { useState } from 'react'
import { searchMovies} from '../service/movies'
import { useRef } from 'react'
import { useMemo } from 'react'



export function useMovies ({search, sort}) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({search}) => {
        if(search === '') return; 
        if(previousSearch.current === search) return;
        setLoading(true);
        try {
          const movies = await searchMovies({search});
          setMovies(movies);
          previousSearch.current = search;
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
  },[search]) 
  

  const sortedMovies = useMemo(() => {
    try {
      return sort 
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
        : movies;
    } catch (error) {
      console.error("Error sorting movies:", error);
      return movies; // Retorna los movies sin ordenar si hay un error
    }
  }, [sort, movies]);
  


  return {movies: sortedMovies, getMovies, loading};
}