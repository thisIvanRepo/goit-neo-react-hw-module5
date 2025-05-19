import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  const addActive = ({ isActive }) => (isActive ? style.active : style.link);

  return (
    <header className={style.header}>
      <nav>
        <ul className={style.nav}>
          <li>
            <NavLink to="/" className={addActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={addActive}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
