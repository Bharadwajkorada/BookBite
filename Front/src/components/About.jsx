import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="section" style={{
      background: "#f8f9fa"
    }} id="about">
      
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>
          {/* Left Content */}
          <div style={{
            padding: "0 20px"
          }}>
            <div style={{
              marginBottom: "30px"
            }}>
              <span style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#ff6b6b",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "15px",
                display: "block"
              }}>
                About BookBite
              </span>
              
              <h2 style={{
                fontSize: "2.5rem",
                fontWeight: "600",
                color: "#2d3748",
                marginBottom: "25px",
                lineHeight: "1.3"
              }}>
                The only thing we're serious about is 
                <span style={{ color: "#ff6b6b" }}>
                  food.
                </span>
              </h2>
            </div>
            
            <p style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "40px"
            }}>
              At BookBite, we believe that great food brings people together. Our passion for culinary excellence drives us to create unforgettable dining experiences using the finest ingredients, innovative techniques, and time-honored traditions. Every dish tells a story, and every meal creates memories that last a lifetime.
            </p>
            
            <div style={{
              display: "flex",
              gap: "40px",
              marginBottom: "40px"
            }}>
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#ff6b6b",
                  marginBottom: "5px"
                }}>
                  500+
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#718096",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Happy Customers
                </div>
              </div>
              
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#ff6b6b",
                  marginBottom: "5px"
                }}>
                  15+
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#718096",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Years Experience
                </div>
              </div>
              
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#ff6b6b",
                  marginBottom: "5px"
                }}>
                  50+
                </div>
                <div style={{
                  fontSize: "14px",
                  color: "#718096",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>
                  Signature Dishes
                </div>
              </div>
            </div>
            
            <a href="#menu" className="btn btn-primary" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Explore Menu
              <HiOutlineArrowRight style={{ fontSize: "1.2rem" }} />
            </a>
          </div>
          
          {/* Right Content - Image */}
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
            }}>
              <img 
                src="about.png" 
                alt="About BookBite Restaurant" 
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "500px",
                  objectFit: "cover"
                }}
              />
              
              <div style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#2d3748",
                  marginBottom: "8px"
                }}>
                  Chef's Special
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "#666",
                  marginBottom: "12px",
                  lineHeight: "1.4"
                }}>
                  Experience our signature dishes crafted with love and precision by our master chefs.
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}>
                  <div style={{
                    display: "flex",
                    gap: "2px"
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#ffd700", fontSize: "1rem" }}>★</span>
                    ))}
                  </div>
                  <span style={{
                    fontSize: "14px",
                    color: "#718096",
                    fontWeight: "500"
                  }}>
                    5.0 Rating
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .container > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          img {
            height: 400px !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          img {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
