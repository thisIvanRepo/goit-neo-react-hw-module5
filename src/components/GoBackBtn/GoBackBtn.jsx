import React from "react";
import style from "./GoBackBtn.module.css";
import { Link } from "react-router-dom";

const GoBackBtn = ({ path }) => {
  return (
    <Link to={path} className={style.link}>
      GoBackBtn
    </Link>
  );
};

export default GoBackBtn;
