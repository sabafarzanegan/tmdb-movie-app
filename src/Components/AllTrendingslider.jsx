import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Spinner } from "@nextui-org/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useMovieContext } from "../Context/MovieContext";

import Card from "./Card";
import Container from "./Container";

export default function AllTrendigSlider() {
  const { Alltending, time, setTime, loading } = useMovieContext();

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <>
      <Container>
        <h2 className="flex items-center justify-between gap-x-2 py-6 px-2 ">
          <span className="text-lg font-vazir text-white font-bold px-2 ">
            Trending
          </span>

          <select
            onChange={handleChange}
            className="flex item-center bg-[#545454] w-[150px] py-2 px-2 text-secoundary font-semibold font-vazir  rounded-md outline-none border-none ">
            <option className="rounded-md" value="week">
              week
            </option>
            <option value="day">day</option>
          </select>
        </h2>
        {loading ? (
          <Spinner color="danger" className="w-full mx-auto " size="lg" />
        ) : (
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
        )}
      </Container>
    </>
  );
}
