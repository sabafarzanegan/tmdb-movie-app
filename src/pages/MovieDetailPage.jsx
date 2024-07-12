import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "./../Components/Container";
import { SiImdb } from "react-icons/si";
import SwiperCast from "../Components/SwiperCast";
import { useMovieContext } from "../Context/MovieContext";
import { Spinner } from "@nextui-org/react";

function MovieDetailPage() {
  const [movieDetail, setMovieDetail] = useState({});
  const { loading, setLoading } = useMovieContext();
  const [geners, setGeners] = useState([]);
  const [casts, setCast] = useState([]);

  const movieId = useParams();

  const getDetailMovie = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId.id}`,
        {
          method: "GET",
          params: { language: "en-US" },
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDc4Mzg1NC4zODQ4MTQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0JX0Rd-_CQO4sWhXXxDv-D93T3PSwDUKiCsCXOPeJA",
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        setLoading(false);
        console.log(data);
        setMovieDetail(data);
        setGeners(data.genres);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCast = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId.id}/credits`,
      {
        method: "GET",
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDc4Mzg1NC4zODQ4MTQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0JX0Rd-_CQO4sWhXXxDv-D93T3PSwDUKiCsCXOPeJA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      setCast(data.cast.slice(0, 20));
    }
  };

  useEffect(() => {
    getDetailMovie();
    getCast();
  }, []);

  return (
    <>
      <Container>
        {loading ? (
          <Spinner
            color="danger"
            size="lg "
            className="flex items-center justify-center "
          />
        ) : (
          <div className=" ">
            <div className="relative">
              <img
                className="w-full h-[500px] opacity-35 rounded-md relative "
                src={`http://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
                alt=""
              />

              <img
                src={`http://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
                className="  absolute top-6 left-1 md:left-4 rounded-sm "
                alt=""
              />
              <div className="absolute text-white top-7 right-1 md:right-10">
                <h1 className="backdrop-brightness-50 rounded-lg p-4">
                  {`${movieDetail.title} `}
                </h1>
                <div className="flex items-center justify-start gap-x-4 mt-2">
                  <p className="backdrop-brightness-50 text-white px-2 py-2 rounded-md   ">
                    {Number(movieDetail.vote_average).toFixed(1)}/10
                  </p>
                  <SiImdb className="text-gray-950 text-4xl bg-amber-400 rounded-md overflow-hidden " />
                </div>
                <p className="backdrop-brightness-50 mt-2 py-2 px-2 w-32 rounded-lg">
                  <span className="text-secoundary font-semibold text-base px-2">
                    Time:
                  </span>
                  <span>{Number(movieDetail.runtime / 60).toFixed(2)}h</span>
                </p>
                <p className="backdrop-brightness-50 mt-2 py-2 px-2  rounded-lg">
                  <span className="text-secoundary font-semibold text-base px-2">
                    geners:
                  </span>
                  <span>
                    {geners.map((gener) => (
                      <span className="px-1">{gener.name}</span>
                    ))}
                  </span>
                </p>
              </div>
            </div>

            <SwiperCast casts={casts} />
          </div>
        )}
      </Container>
    </>
  );
}

export default MovieDetailPage;
