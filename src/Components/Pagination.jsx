import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";
import { useMovieContext } from "../Context/MovieContext";

function MainPagination() {
  const { page, setPage } = useMovieContext();

  return (
    <Pagination
      classNames={{
        wrapper: "flex flex-wrap items-center justify-center ",
        item: "w-10 h-10 text-small rounded-none bg-white rounded-xl",
      }}
      disableCursorAnimation={true}
      disableAnimation={true}
      total={50}
      initialPage={1}
      color="danger"
      onChange={(page) => {
        setPage(page);
      }}
    />
  );
}

export default MainPagination;
