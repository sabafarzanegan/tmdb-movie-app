import { createContext, useState, useEffect, useContext } from "react";

export const MovieContext = createContext({});
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [Alltending, setAllTrending] = useState([]);
  const [latestTv, setLatestTv] = useState([]);
  const [page, setPage] = useState();
  const [time, setTime] = useState("week");

  const getPopularMovie = async (Page = "1") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${Page}`,
        {
          method: "GET",

          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDQzNzMyNi4zMjM2MjQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zYq0I8lacKf_2GxXy5tl0WPfaMMmCUaV4QL2VqjEtJA",
          },
        }
      );

      const data = await res.json();
      if (res.status === 200) {
        setLoading(false);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getRatedmovies = async (Page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${Page}`,
        {
          method: "GET",

          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDU5NTQwNS40NTc3NTMsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sfunPglh3UHSya8F5DGHrHoYqcNIfnWqRRLsgIPKeA",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLatestTv = async (Page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${Page}`,
        {
          method: "GET",

          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDY4NTI5MC4xNjI3MTcsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImN5xMg8XqPHFOCkV9F1R_KsWqT439_MoZoZwKGWuYA",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getPopularTv = async (Page = 1) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${Page}`,
        {
          method: "GET",

          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDY4NTI5MC4xNjI3MTcsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImN5xMg8XqPHFOCkV9F1R_KsWqT439_MoZoZwKGWuYA",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTrending = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/trending/all/${time}`,
        {
          method: "GET",
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDY4NTI5MC4xNjI3MTcsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImN5xMg8XqPHFOCkV9F1R_KsWqT439_MoZoZwKGWuYA",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setLoading(false);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovie(page).then((res) => setPopularMovie(res.results));
    getRatedmovies().then((res) => setTopRatedMovie(res.results));
    getPopularTv().then((res) => setPopularTv(res.results));

    getLatestTv(page).then((res) => setLatestTv(res.results));
  }, []);

  useEffect(() => {
    getAllTrending().then((res) => setAllTrending(res.results));
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
