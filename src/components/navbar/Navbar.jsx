import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { FALSE } from "sass";

const Navbar = () => {
  const [active, setActive] = useState(true);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  return (
    <div className={active ? "active navbar" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join us</button>}
          {currentUser && (
            <div className="user">
              <img src="" alt="" />
              <span>{currentUser?.username}</span>
              {
                currentUser?.isSeller &&(
                 <>
                 <span>Gigs</span>
                 <span>Add New Gig</span>
                 </>
                )
              }
            </div>
          )}
          <span>Sign in</span>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test 1</span>
            <span>Test 2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
