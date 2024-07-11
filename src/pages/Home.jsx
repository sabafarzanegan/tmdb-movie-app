import React from "react";
import Popularswiper from "../Components/popularSwiper";
import TopratedSlider from "../Components/TopratedSlider";
import PopularTvSlider from "../Components/PopulatTvSlider";
import AllTrendigSlider from "../Components/AllTrendingslider";
import LatestSeries from "../Components/LatestSeries";

function Home() {
  return (
    <>
      <Popularswiper />

      <TopratedSlider />

      <PopularTvSlider />

      <AllTrendigSlider />

      <LatestSeries />
    </>
  );
}

export default Home;
