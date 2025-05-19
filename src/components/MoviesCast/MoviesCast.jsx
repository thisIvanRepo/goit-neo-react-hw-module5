import React, { useEffect, useState } from "react";
import css from "./MoviesCast.module.css";
import { useParams } from "react-router-dom";
import { fetchActors } from "../../api/moviesApi";

const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchActors(movieId);
        setCast(cast);
      } catch {
        setError("Failed to load cast.");
      }
    };

    getCast();
  }, [movieId]);

  return (
    <div className={css.actorInfo}>
      {cast.length === 0 ? (
        <p>No cast info available.</p>
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
