import React from "react";
import "./BestPart.scss";
const BestPart = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="item">
          <h1>The best part? Everything.</h1>
          <div className="desc">
          <div className="title">
            <i class="fa-solid fa-check"></i>
            <span>Stick to your budget</span>
          </div>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>
          </div>
         <div className="desc">
         <div className="title">
            <i class="fa-solid fa-check"></i>
            <span> Get quality work done quickly</span>
          </div>
          <p>
            Hand your project over to a talented freelancer in minutes, get
            long-lasting results.
          </p>
         </div>
         <div className="desc">
         <div className="title">
            <i class="fa-solid fa-check"></i>
            <span> Get quality work done quickly</span>
          </div>
          <p>
            Upfront quotes mean no surprises. Payments only get released when
            you approve.
          </p>
         </div>
          <div className="desc">
          <div className="title">
            <i class="fa-solid fa-check"></i>
            <span> Get quality work done quickly</span>
          </div>
          <p>
            Our round-the-clock support team is available to help anytime,
            anywhere.
          </p>
          </div>
         
        </div>
        <div className="item">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/sJcL3WTDQkY?si=MpqhOPcBgZoApW4j"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BestPart;
