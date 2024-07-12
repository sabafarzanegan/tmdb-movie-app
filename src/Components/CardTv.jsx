import React from "react";
import { Link } from "react-router-dom";

function CardTV({ ...movie }) {
  return (
    <>
      {/* card container */}
      <Link to={`/detailmovie/${movie.id}`}>
        <div className="  flex flex-col items-center justify-center gap-y-2  ">
          <img
            src={` http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
            className="rounded-lg overflow-hidden hover:scale-[1.1] duration-65 hover:opacity-60 transition-all "
          />
          <h2 className="text-center font-vazir text-white text-xs md:text-base ">
            {movie.name}
          </h2>
        </div>
      </Link>
    </>
  );
}

export default CardTV;
