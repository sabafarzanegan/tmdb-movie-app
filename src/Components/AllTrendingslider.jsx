import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useMovieContext } from "../Context/MovieContext";
import { Link } from "react-router-dom";
import Card from "./Card";
import Container from "./Container";

export default function AllTrendigSlider() {
  const { Alltending } = useMovieContext();

  return (
    <>
      <Container>
        <h2 className="flex items-center justify-between gap-x-2 py-6 px-2 ">
          <span className="text-lg font-vazir text-white font-bold px-2 ">
            Trending
          </span>
          <span className="text-base text-secoundary font-lale text-md">
            مشاهده بیشتر
          </span>
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
          {Alltending.map((movie) => (
            <SwiperSlide key={movie.id} className="">
              <Card {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
