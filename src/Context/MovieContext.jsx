import { getPopularMovie, getRatedmovies } from "../Utilis/MoviesFetch";
import { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext({});
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);

  useEffect(() => {
    getPopularMovie().then((res) => setPopularMovie(res.results));
    getRatedmovies().then((res) => setTopRatedMovie(res.results));
  }, []);
  return (
    <MovieContext.Provider value={{ popularMovie, topRatedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
