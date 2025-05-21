import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRevievs } from "../../api/moviesApi";
import RevievsList from "../RevievsList/RevievsList";
import ErrorMessege from "../ErrorMessage/ErrorMessege";

const Revievs = () => {
  const { movieId } = useParams();
  const [reviews, setRevievs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRevievs = async () => {
      try {
        const reviews = await fetchRevievs(movieId);
        setRevievs(reviews);
        if (reviews.length === 0) setError("No reviews results.");
      } catch {
        setError("Somthing whrong...");
      }
    };

    getRevievs();
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {reviews.length > 0 ? (
        <RevievsList reviews={reviews} />
      ) : (
        <ErrorMessege massege={error} />
      )}
    </div>
  );
};

export default Revievs;
