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
  console.log("latest", latestTv);
  return (
    <Container>
      <div>
        {/* title */}
        <div className="flex items-center justify-center gap-x-1">
          <MdLocalFireDepartment className="text-white text-xl" />
          <h2 className="font-vazir text-center mt-2 mb-4 text-white font-semibold text-lg">
            آخرین سریال های بروز شده
          </h2>
        </div>

        <Swiper
          slidesPerView={4}
          autoplay={{
            delay: 2000,
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
