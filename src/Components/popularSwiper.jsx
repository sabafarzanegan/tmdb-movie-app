import React from "react";
import { useMovieContext } from "../Context/MovieContext";

import { Link } from "react-router-dom";
import { SiImdb } from "react-icons/si";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function PopularSwiper() {
  const { popularMovie } = useMovieContext();

  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#DF2144",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        modules={[Autoplay, Pagination]}
        className="mySwiper mt-2 ">
        {popularMovie.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/detailmovie/${movie.id}`}>
              <img
                className="w-[100%]  mx-auto h-[400px] md:h-[500px]  opacity-60 relative "
                src={` http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt=""
              />
            </Link>
            <div className="bottom-44 md:left-12 absolute left-2 ">
              <h1 className="backdrop-brightness-50 text-white text-lg md:text-2xl font-semibold px-2 md:px-4 py-2 rounded-md  text-wrap text-left ">
                {movie.title}
              </h1>
              <div className="flex items-center justify-end gap-x-4 mt-2">
                <p className="backdrop-brightness-50 text-white px-2 py-2 rounded-md   ">
                  {Number(movie.vote_average).toFixed(1)}/10
                </p>
                <SiImdb className="text-gray-950 text-4xl bg-amber-400 rounded-md overflow-hidden " />
              </div>
            </div>
            <div className="bottom-1 right-2 absolute hidden md:block">
              <img
                src={` http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt=""
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PopularSwiper;
