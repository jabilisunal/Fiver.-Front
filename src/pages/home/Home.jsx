import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import SlidePopular from "../../components/slidePopular/SlidePopular";
import CatCategory from "../../components/catCategory/CatCategory";
import { cards } from "../../data";
import BestPart from "../../components/bestPart/BestPart";
import WorkCategories from "../../components/workCategories/WorkCategories";
import BusinessSolutions from "../../components/businessSolutions/BusinessSolutions";
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
      <BestPart/>
      {/* <WorkCategories/> */}
      <BusinessSolutions/>
    </div>
  );
};

export default Home;
