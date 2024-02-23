import React from "react";
import "./BusinessSolutions.scss";
const BusinessSolutions = () => {
  return (
    <div className="business-solutions">
      <div className="container">
        <div className="item">
          <h1>
            Fiverr <span className="dot">.</span>{" "}
            <span className="text">Business Solutions </span>
          </h1>
          <h3>Advanced solutions and professional talent for businesses</h3>
          <div className="title">
            <img
              src="https://raw.githubusercontent.com/safak/youtube23/fullstack-fiverr/client/public/img/check.png"
              alt=""
            />
            <div className="text">
              <h3>Fiverr Pro</h3>
              <p>
                Access top freelancers and professional business tools for any
                project
              </p>
            </div>
          </div>
          <div className="title">
            <img
              src="https://raw.githubusercontent.com/safak/youtube23/fullstack-fiverr/client/public/img/check.png"
              alt=""
            />
            <div className="text">
              <h3>Fiverr Certified</h3>
              <p>Build your own branded marketplace of certified experts</p>
            </div>
          </div>
          <div className="title">
            <img
              src="https://raw.githubusercontent.com/safak/youtube23/fullstack-fiverr/client/public/img/check.png"
              alt=""
            />
            <div className="text">
              <h3>Fiverr Enterprise</h3>
              <p>
                Manage your freelance workforce and onboard additional talent
                with an end-to-end SaaS solution
              </p>{" "}
            </div>
            {/* <button>Learn More</button> */}
          </div>
          <button className="btn-learn">Learn More</button>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
