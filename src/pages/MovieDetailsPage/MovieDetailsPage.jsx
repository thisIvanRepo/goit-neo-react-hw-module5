import React, { Suspense, useEffect, useRef, useState } from "react";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import InfoOfMovie from "../../components/InfoOfMovie/InfoOfMovie";
import { fetchMovie } from "../../api/moviesApi";
import ErrorMessege from "../../components/ErrorMessage/ErrorMessege";

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBackLink = useRef(location.state || "/");
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getmovieInfo = async (id) => {
      try {
        setIsLoading(true);
        const data = await fetchMovie(id);
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getmovieInfo(movieId);
  }, [movieId]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <GoBackBtn path={goBackLink.current} />
        {error && <ErrorMessege message={error} />}
        {movieDetails && <InfoOfMovie movieDetails={movieDetails} />}
        <nav
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "30px 10px",
            margin: "20px 0",
          }}
        >
          <h4>AdditionalInformation</h4>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="revievs">Revievs</NavLink>
          </li>
        </nav>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
