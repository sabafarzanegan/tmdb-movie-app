// get popular movie for home slider
export const getPopularMovie = async (Page = "1") => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${Page}`,
      {
        method: "GET",

        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDQzNzMyNi4zMjM2MjQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zYq0I8lacKf_2GxXy5tl0WPfaMMmCUaV4QL2VqjEtJA",
        },
      }
    );

    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

// get tiprated movie for slider
export const getRatedmovies = async (Page = 1) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${Page}`,
      {
        method: "GET",

        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDU5NTQwNS40NTc3NTMsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-sfunPglh3UHSya8F5DGHrHoYqcNIfnWqRRLsgIPKeA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// get latest series
export const getLatestTv = async (Page = 1) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${Page}`,
      {
        method: "GET",

        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDY4NTI5MC4xNjI3MTcsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImN5xMg8XqPHFOCkV9F1R_KsWqT439_MoZoZwKGWuYA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// get popularSeries
export const getPopularTv = async (Page = 1) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${Page}`,
      {
        method: "GET",

        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDY4NTI5MC4xNjI3MTcsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImN5xMg8XqPHFOCkV9F1R_KsWqT439_MoZoZwKGWuYA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// getall trending movie
export const getAllTrending = async (time) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/${time}`,
      {
        method: "GET",
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDY4NTI5MC4xNjI3MTcsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImN5xMg8XqPHFOCkV9F1R_KsWqT439_MoZoZwKGWuYA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// getdetailseries
export const getDetailSeries = async (seriesID) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${seriesID}`, {
      method: "GET",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDc4Mzg1NC4zODQ4MTQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0JX0Rd-_CQO4sWhXXxDv-D93T3PSwDUKiCsCXOPeJA",
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// getcast series

export const getCastseries = async (seriesID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesID}/credits`,
    {
      method: "GET",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDc4Mzg1NC4zODQ4MTQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0JX0Rd-_CQO4sWhXXxDv-D93T3PSwDUKiCsCXOPeJA",
      },
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    return data;
  }
};

// getmoviedetail
export const getDetailMovie = async (movieID) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}`, {
      method: "GET",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDc4Mzg1NC4zODQ4MTQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0JX0Rd-_CQO4sWhXXxDv-D93T3PSwDUKiCsCXOPeJA",
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

// get castmovie
export const getCastmovie = async (movieID) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}/credits`,
    {
      method: "GET",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDc4Mzg1NC4zODQ4MTQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D0JX0Rd-_CQO4sWhXXxDv-D93T3PSwDUKiCsCXOPeJA",
      },
    }
  );
  const data = await res.json();
  if (res.status === 200) {
    return data;
  }
};
