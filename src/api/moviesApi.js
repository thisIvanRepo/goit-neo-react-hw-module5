import axios from "axios";

const BASE_API_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTlkNDk5ZjQ0NGJjN2YyNzliZTFjOGQ1YzEwOGM2OCIsIm5iZiI6MTc0NzY0NDA0OS4yOTksInN1YiI6IjY4MmFlZTkxZGU5YzY4ZWRhYzhjMDY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKLb_DTDKYKAnFv9BbimurSvdshWOgjwgsdamxEz34k";
// const KEY_API = "da9d499f444bc7f279be1c8d5c108c68";

const apiTmdb = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
});

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await apiTmdb.get("trending/all/day", {
    params: {
      language: "en-US",
    },
  });

  return results;
};

export const featchFilmsByQuery = async (query) => {
  const {
    data: { results },
  } = await apiTmdb.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });

  return results;
};

export const fetchMovie = async (id) => {
  const { data } = await apiTmdb.get(`/movie/${id}`, {
    params: {
      language: "en-US",
    },
  });

  return data;
};

export const fetchActors = async (id) => {
  const { data } = await apiTmdb.get(`/movie/${id}/credits`, {
    params: {
      language: "en-US",
    },
  });

  return data;
};

export const fetchRevievs = async (id) => {
  const { data } = await apiTmdb.get(`/movie/${id}/reviews`, {
    params: {
      language: "en-US",
    },
  });

  return data.results;
};
