import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show,setShow]=useState(false);
  const {pathname} =useLocation()
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
    <div className={active || pathname !=="/" ? "active navbar" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
          <span className="text">fiverr</span>
          <span className="dot">.</span>

          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>

          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join us</button>}
          {currentUser && (
            <div className="user" onClick={()=>setShow(!show)}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
                alt=""
              />
              <span>{currentUser?.username}</span>
             { show &&
               <div className="options">
               {currentUser?.isSeller && (
                 <>
                   <Link className="link" to="/mygigs">Gigs</Link>
                   <Link className="link" to="/add">Add New Gig</Link>
                 </>
               )}
               <Link className="link" to="/orders">Orders</Link>
               <Link className="link" to="/messages">Messages</Link>
               <Link className="link" to="/">Logout</Link>
             </div>
             }
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && (
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
