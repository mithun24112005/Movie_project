import MovieCard from "../components/MovieCard.jsx";
import { useState,useEffect } from "react";
import {SearchMovies,getpopularMovies} from "../services/api"
import "../css/Home.css"

function Home() {
  const [search_query, setsearchquery] = useState("");
  const [movies,setmovies]=useState([])
  const [error,seterror]=useState(null)
  const [loading,setloading]=useState(true)
  useEffect(()=>{
    const loadpopularmovies=async () =>{
        try{
            const popularmovies=await getpopularMovies()
            setmovies(popularmovies)
        }catch (err){
            console.log(err);
            seterror("failed to load movies")
        }
        finally{
            setloading(false)
        }
    }
    loadpopularmovies()
  },[])
  async function handleonsubmit(event) {
    event.preventDefault()
    if(!search_query.trim()) return
    if(loading) return
    setloading(true)
    try{
        const search_results=await SearchMovies(search_query)
        setmovies(search_results)
        seterror(null)
    }catch (err){
        console.log(error);
        seterror("failed to search the movie")
    }finally{
        setloading(false)
    }
  }
  function handleonchange(event) {
    setsearchquery(event.target.value);
  }
  return (
    <div className="home">
      <form onSubmit={handleonsubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          onChange={handleonchange}
          value={search_query}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading?(
        <div className="loading">Loading...</div>):(
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      )}
    </div>
  );
}

export default Home;
