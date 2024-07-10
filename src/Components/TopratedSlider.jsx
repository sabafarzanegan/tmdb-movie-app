import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { useMovieContext } from "../Context/MovieContext";
import { Link } from "react-router-dom";
import Card from "./Card";
import Container from "./Container";

export default function TopratedSlider() {
  const { topRatedMovie } = useMovieContext();

  return (
    <>
      <Container>
        <h2 className="flex items-center gap-x-2 py-6 ">
          <span className="text-lg font-vazir text-white font-bold px-2 ">
            Top rated
          </span>
          <span className="text-sm text-secoundary font-vazir text-md">
            مشاهده بیشتر
          </span>
        </h2>
        <Swiper
          slidesPerView={4}
          freeMode={true}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper">
          {topRatedMovie.map((movie) => (
            <SwiperSlide key={movie.id} className="">
              <Card {...movie} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <Link>
              <h3 className="h-[200px]  flex items-center justify-center gap-x-1 text-secoundary">
                <span className="font-vazir sm:text-base ">more</span>
                <span className="">
                  <IoArrowBackCircleOutline className="text-lg" />
                </span>
              </h3>
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </Container>
    </>
  );
}
