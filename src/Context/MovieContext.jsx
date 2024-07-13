import { createContext, useState, useEffect, useContext } from "react";
import {
  getPopularMovie,
  getRatedmovies,
  getLatestTv,
  getPopularTv,
  getAllTrending,
} from "../Utilis/MoviesFetch";

export const MovieContext = createContext({});
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [Alltending, setAllTrending] = useState([]);
  const [latestTv, setLatestTv] = useState([]);
  const [page, setPage] = useState();
  const [time, setTime] = useState("week");

  useEffect(() => {
    getPopularMovie(page).then((res) => {
      setPopularMovie(res.results);
      setLoading(false);
    });
    getRatedmovies(page).then((res) => {
      setTopRatedMovie(res.results);
      setLoading(false);
    });
    getPopularTv(page).then((res) => {
      setPopularTv(res.results);
      setLoading(false);
    });

    getLatestTv(page).then((res) => {
      setLatestTv(res.results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getAllTrending(time).then((res) => setAllTrending(res.results));
  }, [time]);

  return (
    <MovieContext.Provider
      value={{
        loading,
        setLoading,
        popularMovie,
        topRatedMovie,
        popularTv,
        Alltending,
        latestTv,
        page,
        time,
        setTime,
        setPage,
        getPopularMovie,
        getRatedmovies,
        getLatestTv,
        getPopularTv,
      }}>
      {children}
    </MovieContext.Provider>
  );
};
