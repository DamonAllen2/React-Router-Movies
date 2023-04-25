import { BrowserRouter, Routes, Route, Link, navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovies(response.data);
         
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <BrowserRouter>
    <div>
      <SavedList list={[ /* This is stretch */]} movie={movies} />

      <Routes>
        <Route path='/' element={<MovieList movies={movies} />} />
        <Route path='movies/:id' element={<Movie />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
