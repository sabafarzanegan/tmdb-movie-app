import React from "react";
import { Link } from "react-router-dom";

function Card({ ...movie }) {
  return (
    <>
      {/* card container */}
      <Link
        to={`${movie.title ? "/detailmovie" : "/detailseries"}/${movie.id}`}>
        <div className="group  mb-20 flex flex-col items-center justify-center gap-y-2  ">
          <img
            src={` http://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt=""
            className="rounded-lg overflow-hidden group-hover:opacity-50 transition-all duration-300 "
          />
          <h2 className="text-center font-vazir text-white text-xs md:text-base  group-hover:text-primary transition-all duration-300 ">
            {movie.title ? movie.title : movie.name}
          </h2>
        </div>
      </Link>
    </>
  );
}

export default Card;
