import React, { useEffect, useState } from "react";

import MainPagination from "../Components/Pagination";
import { useMovieContext } from "../Context/MovieContext";

import CardItem from "../Components/CardItem";
import Container from "../Components/Container";
import CardSkelton from "../Components/Skelton";
import { Spinner } from "@nextui-org/react";

function LatestSeriesPage() {
  const { page, getLatestTv, loading } = useMovieContext();
  const [LatestSeries, setAllLatestSeries] = useState([]);
  console.log(LatestSeries);
  useEffect(() => {
    getLatestTv(page).then((res) => setAllLatestSeries(res.results));
  }, [page]);
  return (
    <>
      <Container>
        <div className="min-h-svh  ">
          <div className=" mt-6   gap-6 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {LatestSeries.map((movie) =>
              loading ? <Spinner /> : <CardItem key={movie.id} {...movie} />
            )}
          </div>
          <div className=" bg-third flex flex-wrap items-center justify-center mt-4 px-2 mb-12 md:mb-0  py-14 md:py-4  ">
            <MainPagination />
          </div>
        </div>
      </Container>
    </>
  );
}

export default LatestSeriesPage;
