import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the right <i>freelance </i> service, right away
          </h1>
          <div className="search">
            <input type="text" placeholder="Search for any service..." />
            <div className="search-icon">

            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>All Services</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://github.com/safak/youtube23/blob/fullstack-fiverr/client/public/img/mman.png?raw=true
            "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
