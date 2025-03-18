import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("authToken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <nav>
        <div className="logo">BookBite</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link to={element.link} key={element.id}>
                {element.title}
              </Link>
            ))}
          </div>

          {isLoggedIn ? (
            <>
              <button className="menuBtn" onClick={handleLogout}>Logout</button>
              <Link to="/list">
                <button className="menuBtn">Reservations</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="menuBtn">Login</button>
              </Link>
              <button className="menuBtn" onClick={() => alert("Please login to see reservations")}>
                Reservations
              </button>
            </>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
