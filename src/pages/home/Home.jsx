import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import SlidePopular from "../../components/slidePopular/SlidePopular";
import CatCategory from "../../components/catCategory/CatCategory";
import { cards } from "../../data";
const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <SlidePopular slidesToShow={5} arrowsScroll ={5}>
        {cards.map((card)=>(
          <CatCategory key={card.id} item={card}/>
        ))}
      </SlidePopular>
    </div>
  );
};

export default Home;
