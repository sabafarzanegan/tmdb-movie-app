import React from "react";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import MoviesDetail from "./Components/MoviesDetail";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import LatestSeriesPage from "./pages/LatestSeries";
import PopularSeriesPage from "./pages/PopularSeriesPage";
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
        <Route path="/detailmovie/:id" element={<MoviesDetail />} />
      </Routes>
      <MobileNavbar />
    </>
  );
}

export default App;
