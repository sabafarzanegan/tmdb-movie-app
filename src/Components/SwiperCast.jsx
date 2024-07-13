import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useMovieContext } from "../Context/MovieContext";

import Container from "./Container";

export default function SwiperCast({ casts }) {
  const { popularTv } = useMovieContext();

  return (
    <>
      <Container>
        <h2 className="text-secoundary mt-6 mb-2 font-lale">بازیگران</h2>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          freeMode={true}
          centeredSlides={true}
          spaceBetween={5}
          // grabCursor={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper">
          {casts.map((cast) => (
            <SwiperSlide key={cast.id} className="mb-6">
              <div className=" flex flex-col items-center justify-center ">
                <img
                  className="w-36 h-36 md:w-[400px] md:h-[300px] "
                  src={`http://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt=""
                />
                <p className="text-white text-xs md:text-base font-semibold">
                  {cast.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
