import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {data,loading} = useGlobalContext()
  if(loading){
    return <h2 className="loading"></h2>
  }
  return <section className="movies">
    {
      data.map((movie,i)=>{
        const {Poster,Title,Year,imdbID:id} = movie
        {/*console.log(poster)*/}
        return <Link to={`/movies/${id}`} className="movie" key={i}>
          <article>
            <img src={Poster === 'N/A' ? url : Poster} alt={Title} />
            <div className="movie-info">
              <h4 className="title">{Title}</h4>
              <p>{Year}</p>
            </div>
          </article>
        </Link>
      })
    }
  </section>
}

export default Movies
