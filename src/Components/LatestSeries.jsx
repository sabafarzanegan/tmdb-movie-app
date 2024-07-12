import React from "react";
import { MdLocalFireDepartment } from "react-icons/md";
import { useMovieContext } from "../Context/MovieContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

import Container from "./Container";
import CardTV from "./CardTv";

function LatestSeries() {
  const { latestTv } = useMovieContext();

  return (
    <Container>
      <div>
        {/* title */}
        <h2 className="flex items-center justify-between gap-x-2 py-6 px-2 ">
          <span className="text-lg font-vazir text-white font-bold px-2 ">
            آخرین سریال های بروز شده
          </span>
          <Link to="/latestseries">
            <span className="text-base text-secoundary font-lale text-md">
              مشاهده بیشتر
            </span>
          </Link>
        </h2>

        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          freeMode={true}
          centeredSlides={true}
          spaceBetween={30}
          loop
          // grabCursor={true}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper">
          {latestTv.map((movie) => (
            <SwiperSlide key={movie.id} className="">
              <CardTV {...movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}

export default LatestSeries;
