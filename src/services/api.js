const API_KEY="e83a79f0da6675ae3a17c70f45b396f5"
const BASE_URL="https://api.themoviedb.org/3"

export const getpopularMovies=async () => {
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data=await response.json()
    console.log(data.results);
    return data.results
}

export const SearchMovies=async (query) => {
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data=await response.json()
    console.log(data.results);
    return data.results
}

