import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';

import { MovieCard } from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=6d796dfe";


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`);
        const data = await response.json();

        if (data.Search) {
            setMovies(data.Search);
        } else {
            setMovies([]); 
        }
    }

    const handleSearch = () => {
        searchMovies(searchTerm);
    };

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={handleSearch}
                />
            </div>

            <div className="container">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))
                ) : (
                    <div>No movies found</div>
                )}
            </div>
        </div>
    );
}

export default App;