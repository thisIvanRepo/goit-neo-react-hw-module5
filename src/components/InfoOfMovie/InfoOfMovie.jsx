import React from "react";
import css from "./InfoOfMovie.module.css";

const InfoOfMovie = ({
  movieDetails: { title, poster_path, vote_average, overview, genres },
}) => {
  return (
    <div className={css.containerContent}>
      <div className={css.containerImg}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{`User Score: ${(vote_average * 10).toFixed(1)} %`}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul className={css.listGanres}>
          {genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfoOfMovie;
