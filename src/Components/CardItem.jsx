import React from "react";
import { Card, CardFooter, CardBody, Image, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../Context/MovieContext";

export default function CardItem({ ...movie }) {
  const { loading } = useMovieContext();
  return (
    <Link to={`${movie.title ? "/detailmovie" : "/detailseries"}/${movie.id}`}>
      <Card
        shadow="sm"
        isPressable
        onPress={() => console.log("item pressed")}
        className="mx-auto group ">
        <CardBody className="overflow-visible p-2 ">
          {loading ? (
            <Spinner />
          ) : (
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={movie.title}
              className="w-full object-cover h-full group-hover:scale-[0.90]"
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          )}
        </CardBody>
        <CardFooter className=" text-xl md:text-2xl  justify-between">
          <p className="text-gray-900 font-semibold font-vazir line-clamp-1">
            {movie.title ? movie.title : movie.name}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
