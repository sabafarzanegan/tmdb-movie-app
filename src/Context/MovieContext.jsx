import {
  getAllTrending,
  getLatestTv,
  getPopularMovie,
  getPopularTv,
  getRatedmovies,
} from "../Utilis/MoviesFetch";
import { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext({});
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [Alltending, setAllTrending] = useState([]);
  const [latestTv, setLatestTv] = useState([]);

  useEffect(() => {
    getPopularMovie().then((res) => setPopularMovie(res.results));
    getRatedmovies().then((res) => setTopRatedMovie(res.results));
    getPopularTv().then((res) => setPopularTv(res.results));
    getAllTrending().then((res) => setAllTrending(res.results));
    getLatestTv().then((res) => setLatestTv(res.results));
  }, []);
  return (
    <MovieContext.Provider
      value={{ popularMovie, topRatedMovie, popularTv, Alltending, latestTv }}>
      {children}
    </MovieContext.Provider>
  );
};
