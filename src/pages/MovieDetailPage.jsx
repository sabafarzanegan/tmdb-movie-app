import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "./../Components/Container";
import { SiImdb } from "react-icons/si";
import SwiperCast from "../Components/SwiperCast";
import { useMovieContext } from "../Context/MovieContext";
import { Spinner } from "@nextui-org/react";
import { getDetailMovie, getCastmovie } from "../Utilis/MoviesFetch";

function MovieDetailPage() {
  const [movieDetail, setMovieDetail] = useState({});

  const { loading, setLoading } = useMovieContext();
  const [geners, setGeners] = useState([]);
  const [casts, setCast] = useState([]);

  const movieId = useParams();

  useEffect(() => {
    getDetailMovie(movieId.id).then((res) => {
      setMovieDetail(res);
      setLoading(false);
      setGeners(res.genres);
    });
    getCastmovie(movieId.id).then((res) => {
      setCast(res.cast.slice(0, 20));
    });
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
