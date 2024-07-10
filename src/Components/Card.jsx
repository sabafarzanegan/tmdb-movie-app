import React from "react";
import { Link } from "react-router-dom";

function Card({ ...movie }) {
  return (
    <>
      {/* card container */}
      <Link to={`/movies/${movie.id}`}>
        <div className=" mb-20 flex flex-col items-center justify-center gap-y-2  ">
          <img
            src={` http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            className="rounded-lg overflow-hidden"
          />
          <h2 className="text-center font-vazir text-white text-sm md:text-base line-clamp-2 ">
            {movie.title}
          </h2>
        </div>
      </Link>
    </>
  );
}

export default Card;
