import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import SearchForm from "../../components/SearchForm/SearchForm";
import { featchFilmsByQuery } from "../../api/moviesApi";
import ErrorMassege from "../../components/ErrorMassage/ErrorMassege";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    const getFilms = async () => {
      try {
        const data = await featchFilmsByQuery(query);
        setMovies(data);
      } catch (err) {
        setError(err.masage);
      } finally {
        setIsLoading(false);
      }
    };

    getFilms();
  }, [searchParams]);

  const onSubmit = (query) => {
    setSearchParams({
      query,
    });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {isLoading && <Loader />}
        {error && <ErrorMassege tittle={error} />}
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default MoviesPage;
