import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import { Spinner } from "@nextui-org/react";
import { useMovieContext } from "../Context/MovieContext";
import { useParams } from "react-router-dom";
import { SiImdb } from "react-icons/si";
import SwiperCast from "../Components/SwiperCast";
import { getDetailSeries, getCastseries } from "../Utilis/MoviesFetch";

function SeriesDetailPage() {
  const [detailSeries, setDetailSeries] = useState({});
  const [lastEP, setLastEP] = useState("");
  const [geners, setGeners] = useState([]);
  const { loading, setLoading } = useMovieContext();
  const [casts, setCast] = useState([]);

  const seriesID = useParams();

  useEffect(() => {
    getDetailSeries(seriesID.id).then((res) => {
      setDetailSeries(res);
      setLoading(false);
      setGeners(res.genres);
      setLastEP(res.last_episode_to_air.episode_number);
    });
    getCastseries(seriesID.id).then((res) => {
      setCast(res.cast.slice(0, 15));
      setLoading(false);
    });
  }, []);
  return (
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
              src={`http://image.tmdb.org/t/p/original/${detailSeries.backdrop_path}`}
              alt=""
            />

            <img
              src={`http://image.tmdb.org/t/p/w300/${detailSeries.poster_path}`}
              className="  absolute top-6 left-1 md:left-4 rounded-sm "
              alt=""
            />
            <div className="absolute text-white top-7 right-1 md:right-10">
              <h1 className="backdrop-brightness-50 rounded-lg p-4">
                {`${detailSeries.name} `}
              </h1>
              <div className="flex items-center justify-start gap-x-4 mt-2">
                <p className="backdrop-brightness-50 text-white px-2 py-2 rounded-md   ">
                  {Number(detailSeries.vote_average).toFixed(1)}/10
                </p>
                <SiImdb className="text-gray-950 text-4xl bg-amber-400 rounded-md overflow-hidden " />
              </div>
              <p className="backdrop-brightness-50 mt-2 py-2 px-2 w-32 rounded-lg">
                <span className="text-secoundary font-semibold text-base px-2">
                  lastEP:
                </span>
                <span>{lastEP}</span>
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
  );
}

export default SeriesDetailPage;
