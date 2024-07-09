// get popular movie for home slider
export const getPopularMovie = async () => {
  try {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMDQzNzMyNi4zMjM2MjQsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zYq0I8lacKf_2GxXy5tl0WPfaMMmCUaV4QL2VqjEtJA",
      },
    });

    const data = await res.json();
    if (res.status === 200) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
