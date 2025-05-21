import React, { useEffect, useState } from "react";
import css from "./MoviesCast.module.css";
import { useParams } from "react-router-dom";
import { fetchActors } from "../../api/moviesApi";
import Loader from "../Loader/Loader";
import ErrorMessege from "../ErrorMessage/ErrorMessege";

const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await fetchActors(movieId);
        setCast(cast);
      } catch {
        setError("Failed to load cast or no cast result.");
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div className={css.actorInfo}>
      {isLoading && <Loader />}
      {cast.length === 0 ? (
        <ErrorMessege massege={error} />
      ) : (
        <ul className={css.castList}>
          {cast.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id} className={css.actorInfo}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                style={{
                  maxWidth: "200px",
                  maxHeight: "300px",
                }}
              />
              <p>
                <strong>{name}</strong>
              </p>
              <h4>Character</h4>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesCast;
