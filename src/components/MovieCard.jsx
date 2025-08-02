import React from 'react'
import { useMovieContext } from '../contexts/MovieContext.jsx'
import "../css/MovieCard.css"

const MovieCard = ({movie}) => {
    const {isfavorite,addtofavorites,removefavorites}=useMovieContext()
    const favorite=isfavorite(movie.id)

    function handleonclick(event) {
        event.preventDefault()
        if(favorite) {
            removefavorites(movie.id)
            alert(`${movie.title} removed from favorites`)
        }
        else {
            addtofavorites(movie)
            alert(`${movie.title} added to favorites`)
        }
    }
    
  return (
    <div className='movie-card'>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={handleonclick}>❤️</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  )
}

export default MovieCard