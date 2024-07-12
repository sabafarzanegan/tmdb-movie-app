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
import Card from "./Card";

export default function PopularTvSlider() {
  const { popularTv } = useMovieContext();

  return (
    <>
      <Container>
        <h2 className="flex items-center justify-between gap-x-2 py-6 px-2 ">
          <span className="text-lg font-vazir text-white font-bold px-2 ">
            Top Rated Series
          </span>
          <Link to="/popularseries">
            <span className="text-base text-secoundary font-lale text-md">
              مشاهده بیشتر
            </span>
          </Link>
        </h2>
        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop
          freeMode={true}
          centeredSlides={true}
          spaceBetween={30}
          // grabCursor={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper">
          {popularTv.map((movie) => (
            <SwiperSlide key={movie.id} className="">
              <Card {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
