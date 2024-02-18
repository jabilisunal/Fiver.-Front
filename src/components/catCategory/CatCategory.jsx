import React from "react";
import "./CatCategory.scss";
import { Link } from "react-router-dom";
Link;
const CatCategory = ({ item }) => {
  return (
    <Link className="link" to="/gigs?cat=design">
      <div className="catCategory">
        <img src={item.image} alt="" />
        <div className="title">{item.title}</div>
        <div className="subTitle">{item.subTitle}</div>
      </div>
    </Link>
  );
};

export default CatCategory;
