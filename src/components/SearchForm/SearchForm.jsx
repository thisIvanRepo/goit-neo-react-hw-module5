import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return alert("input name of movies");
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">
        <input
          name="input"
          type="text"
          id="input"
          defaultValue={""}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
