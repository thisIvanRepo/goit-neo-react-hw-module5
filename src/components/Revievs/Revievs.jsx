import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRevievs } from "../../api/moviesApi";
import RevievsList from "../RevievsList/RevievsList";

const Revievs = () => {
  const { movieId } = useParams();
  const [reviews, setRevievs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRevievs = async () => {
      try {
        const reviews = await fetchRevievs(movieId);
        setRevievs(reviews);
      } catch {
        setError("Failed to load revievs.");
      }
    };

    getRevievs();
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {reviews.length > 0 && <RevievsList reviews={reviews} />}
    </div>
  );
};

export default Revievs;
