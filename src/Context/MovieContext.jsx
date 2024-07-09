import { getPopularMovie } from "../Utilis/MoviesFetch";
import { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext({});
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getPopularMovie().then((res) => setPopularMovie(res.results));
  }, []);
  return (
    <MovieContext.Provider value={{ popularMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
