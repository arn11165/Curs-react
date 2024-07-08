import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import { Movies } from '../components/Movies'
import { useMovies } from '../hooks/useMovies'

function App() {
  const [sort , setSort] = useState(false)
  const [search, setSearch] = useState('')
  const {movies, loading, getMovies} = useMovies({search, sort})
  


  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleSort = () =>{
    setSort(!sort) 
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>
            Buscador de películas
          </h1>
          <form onSubmit={handleSubmit}>
            <div className='search'>
              <input required onChange={handleChange} value={search} name='search' placeholder='Avengers, Star wars, The Matrix...' />
              <button  type="submit">Buscar</button>
            </div>
            <div className='sort'>
              <p>Ordenar</p>
              <input type="checkbox" onChange={handleSort} checked={sort}/>
            </div>
            
          </form>
        </header>


        <main>
          {
            loading ? <p>Cargando ...</p> : <Movies movies={movies}/>
          }
        </main>
      </div>
    </>
  )
}

export default App
