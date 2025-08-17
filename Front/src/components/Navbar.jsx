import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("authToken"));
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShow(false);
    }
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled 
        ? "rgba(255, 255, 255, 0.95)" 
        : "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled 
        ? "1px solid rgba(0, 0, 0, 0.1)" 
        : "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
      padding: "0 20px",
      height: "80px"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%"
      }}>
        {/* Logo */}
        <div style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          background: "linear-gradient(135deg, #ff6b6b, #667eea)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
          letterSpacing: "1px"
        }}
        onClick={() => scrollToSection("heroSection")}>
          BookBite
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "40px"
        }}>
          {/* Navigation Links */}
          <div style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
          }}>
            {data[0].navbarLinks.map((element) => (
              <button
                key={element.id}
                onClick={() => scrollToSection(element.link)}
                style={{
                  background: "none",
                  border: "none",
                  color: scrolled ? "#2d3748" : "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  position: "relative",
                  padding: "10px 0"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ff6b6b";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = scrolled ? "#2d3748" : "white";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {element.title}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{
            display: "flex",
            gap: "15px",
            alignItems: "center"
          }}>
            {isLoggedIn ? (
              <>
                <Link to="/list" style={{ textDecoration: "none" }}>
                  <button style={{
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}>
                    Dashboard
                  </button>
                </Link>
                
                <button 
                  onClick={handleLogout}
                  style={{
                    background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 20px rgba(238, 90, 82, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button style={{
                    background: "transparent",
                    color: scrolled ? "#2d3748" : "white",
                    border: `2px solid ${scrolled ? "#2d3748" : "white"}`,
                    padding: "10px 25px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = scrolled ? "#2d3748" : "white";
                    e.target.style.color = scrolled ? "white" : "#2d3748";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = scrolled ? "#2d3748" : "white";
                    e.target.style.transform = "translateY(0)";
                  }}>
                    Login
                  </button>
                </Link>
                
                <button 
                  onClick={() => scrollToSection("reservation")}
                  style={{
                    background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
                    color: "white",
                    border: "none",
                    padding: "12px 25px",
                    borderRadius: "25px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 20px rgba(238, 90, 82, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}>
                  Reserve Table
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div 
          style={{
            display: "none",
            fontSize: "1.5rem",
            color: scrolled ? "#2d3748" : "white",
            cursor: "pointer",
            zIndex: 1001
          }}
          className="hamburger"
          onClick={() => setShow(!show)}
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        transform: show ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px"
      }}>
        {data[0].navbarLinks.map((element) => (
          <button
            key={element.id}
            onClick={() => scrollToSection(element.link)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "2px",
              padding: "15px 30px"
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#f093fb";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            {element.title}
          </button>
        ))}
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "30px"
        }}>
          {isLoggedIn ? (
            <>
              <Link to="/list" style={{ textDecoration: "none" }}>
                <button style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  padding: "15px 40px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  width: "200px"
                }}>
                  Dashboard
                </button>
              </Link>
              
              <button 
                onClick={handleLogout}
                style={{
                  background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
                  color: "white",
                  border: "none",
                  padding: "15px 40px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  width: "200px"
                }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  padding: "15px 40px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  width: "200px"
                }}>
                  Login
                </button>
              </Link>
              
              <button 
                onClick={() => scrollToSection("reservation")}
                style={{
                  background: "linear-gradient(135deg, #ff6b6b, #ee5a52)",
                  color: "white",
                  border: "none",
                  padding: "15px 40px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  width: "200px"
                }}>
                Reserve Table
              </button>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          nav > div > div:nth-child(2) {
            display: none !important;
          }
          
          .hamburger {
            display: block !important;
          }
        }
        
        @media (max-width: 576px) {
          nav {
            padding: 0 15px !important;
          }
          
          nav > div > div:first-child {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
