import React from "react";
import "./SlidePopular.scss";

import Slider from "infinite-react-carousel/lib/carousel/slider";
const SlidePopular = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className="slidePopular">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {children}
        </Slider>
       
      </div>
    </div>
  );
};

export default SlidePopular;
