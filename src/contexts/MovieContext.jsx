import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favorites, setfavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) setfavorites(JSON.parse(storedFavs));
    }, []);
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addtofavorites = (movie) => {
        setfavorites(prev => [...prev, movie]);
    };
    const removefavorites = (movieId) => {
        setfavorites(prev => prev.filter(movie => movie.id !== movieId));
    };
    const isfavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };

    const value = {
        favorites, addtofavorites, removefavorites, isfavorite
    };
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}