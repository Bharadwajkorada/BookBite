import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative"
    }} id="heroSection">
      
      <Navbar />
      
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 80px)",
        padding: "0 20px",
        position: "relative",
        zIndex: 2
      }}>
        <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>
          {/* Left Content */}
          <div style={{
            color: "white",
            textAlign: "left"
          }}>
            <div style={{
              fontSize: "16px",
              fontWeight: "500",
              marginBottom: "20px",
              opacity: "0.9",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              Welcome to BookBite
            </div>
            
            <h1 style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              marginBottom: "30px",
              lineHeight: "1.2",
              color: "white"
            }}>
              Delicious Food
              <br />
              <span style={{ color: "#ffd700" }}>
                Awaits You
              </span>
            </h1>
            
            <p style={{
              fontSize: "1.1rem",
              marginBottom: "40px",
              opacity: "0.9",
              lineHeight: "1.6",
              maxWidth: "500px"
            }}>
              Experience culinary excellence with our handcrafted dishes, made with the finest ingredients and served with passion.
            </p>
            
            <div style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap"
            }}>
              <Link to="/reservation" className="btn btn-primary" style={{
                padding: "15px 30px",
                fontSize: "1rem"
              }}>
                Book Table
              </Link>
              
              <a href="#menu" className="btn btn-outline" style={{
                padding: "15px 30px",
                fontSize: "1rem",
                color: "white",
                borderColor: "white"
              }}>
                View Menu
              </a>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              position: "relative",
              width: "400px",
              height: "400px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
            }}>
              <img 
                src="./hero1.png" 
                alt="Delicious Food" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>
            
          </div>
        </div>
      </div>
      
      
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          .hero-image {
            width: 300px !important;
            height: 300px !important;
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          
          .hero-image {
            width: 250px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
