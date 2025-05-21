import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/moviesApi";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import ErrorMessege from "../../components/ErrorMessage/ErrorMessege";
import MovieList from "../../components/MovieList/MovieList";

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setTrendMovies(movies);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <ErrorMessege />}
        {trendMovies.length > 0 && <MovieList movies={trendMovies} />}
      </Container>
    </Section>
  );
}
