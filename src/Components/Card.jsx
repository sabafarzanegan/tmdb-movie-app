import React from "react";
import { Link } from "react-router-dom";

function Card({ ...movie }) {
  return (
    <>
      {/* card container */}
      <Link to={`/detailmovie/${movie.id}`}>
        <div className=" mb-20 flex flex-col items-center justify-center gap-y-2  ">
          <img
            src={` http://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            className="rounded-lg overflow-hidden hover:opacity-60 transition-all duration-75"
          />
          <h2 className="text-center font-vazir text-white text-xs md:text-base ">
            {movie.title ? movie.title : movie.name}
          </h2>
        </div>
      </Link>
    </>
  );
}

export default Card;
