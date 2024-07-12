import React from "react";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import LatestSeriesPage from "./pages/LatestSeries";
import PopularSeriesPage from "./pages/PopularSeriesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SeriesDetailPage from "./pages/SeriesDetailPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/TRM" element={<TopRatedMoviesPage />} />
        <Route path="/latestseries" element={<LatestSeriesPage />} />
        <Route path="/popularseries" element={<PopularSeriesPage />} />
        <Route path="/detailmovie/:id" element={<MovieDetailPage />} />
        <Route path="/detailseries/:id" element={<SeriesDetailPage />} />
      </Routes>
      <MobileNavbar />
    </>
  );
}

export default App;
