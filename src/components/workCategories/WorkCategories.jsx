import React from "react";
import { categories } from "../../data";

import "./WorkCategories.scss";

const WorkCategories = () => {
  return (
    <div className="work_categories">
      <div className="container">
        <h1 className="title">You need it, we've got it</h1>

        <div className="catergory-item">
          {categories && categories.map((category) => (
            <div className="elements" key={category.id}>
              <img src={category.img} alt="" />
              <span>{category.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCategories;
