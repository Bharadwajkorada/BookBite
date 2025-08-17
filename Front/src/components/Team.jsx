import React from "react";
import { data } from "../restApi.json";

const Team = () => {
  return (
    <section style={{
      padding: "100px 20px",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      position: "relative"
    }} id="team">
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(240, 147, 251, 0.05) 0%, transparent 50%)",
        pointerEvents: "none"
      }}></div>
      
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "80px"
        }}>
          <span style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#667eea",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "15px",
            display: "block"
          }}>
            Meet The Experts
          </span>
          
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            color: "#2d3748",
            marginBottom: "20px",
            lineHeight: "1.1",
            background: "linear-gradient(135deg, #2d3748, #4a5568)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Our 
            <span style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block"
            }}>
              Team
            </span>
          </h2>
          
          <p style={{
            fontSize: "1.2rem",
            color: "#4a5568",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Meet the passionate culinary artists who bring magic to every dish and create unforgettable dining experiences.
          </p>
        </div>
        
        {/* Team Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
          alignItems: "stretch"
        }}>
          {data[0].team.map((element, index) => {
            const gradients = [
              "linear-gradient(135deg, #667eea, #764ba2)",
              "linear-gradient(135deg, #f093fb, #f5576c)",
              "linear-gradient(135deg, #4facfe, #00f2fe)",
              "linear-gradient(135deg, #43e97b, #38f9d7)"
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
              <div 
                key={element.id}
                style={{
                  background: "white",
                  borderRadius: "25px",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-15px)";
                  e.target.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: "relative",
                  height: "300px",
                  background: gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}>
                  <img 
                    src={element.image} 
                    alt={element.name}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      border: "5px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  
                  {/* Decorative Elements */}
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{ fontSize: "1.5rem" }}>👨‍🍳</span>
                  </div>
                  
                  <div style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    width: "50px",
                    height: "50px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <span style={{ fontSize: "1.2rem" }}>⭐</span>
                  </div>
                </div>
                
                {/* Content */}
                <div style={{
                  padding: "30px 25px",
                  textAlign: "center"
                }}>
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#2d3748",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    {element.name}
                  </h3>
                  
                  <p style={{
                    fontSize: "1rem",
                    color: "#667eea",
                    fontWeight: "600",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {element.designation}
                  </p>
                  
                  <p style={{
                    fontSize: "0.95rem",
                    color: "#718096",
                    lineHeight: "1.6",
                    marginBottom: "25px"
                  }}>
                    Passionate about creating exceptional culinary experiences with years of expertise and dedication to the craft.
                  </p>
                  
                  {/* Rating */}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "25px"
                  }}>
                    <div style={{
                      display: "flex",
                      gap: "2px"
                    }}>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: "#ffd700", fontSize: "1.1rem" }}>★</span>
                      ))}
                    </div>
                    <span style={{
                      fontSize: "14px",
                      color: "#718096",
                      fontWeight: "500"
                    }}>
                      5.0 Expert
                    </span>
                  </div>
                  
                  {/* Social Links */}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px"
                  }}>
                    {['📧', '📱', '🌐'].map((icon, idx) => (
                      <div 
                        key={idx}
                        style={{
                          width: "40px",
                          height: "40px",
                          background: gradient,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-3px)";
                          e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative Bottom Border */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  background: gradient,
                  borderRadius: "2px 2px 0 0"
                }}></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div style={{
          textAlign: "center",
          marginTop: "80px"
        }}>
          <div style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "20px",
            padding: "50px 40px",
            color: "white",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Background Pattern */}
            <div style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200px",
              height: "200px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}></div>
            
            <h3 style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              marginBottom: "20px",
              position: "relative",
              zIndex: 2
            }}>
              Ready to Experience Excellence?
            </h3>
            
            <p style={{
              fontSize: "1.2rem",
              marginBottom: "30px",
              opacity: "0.9",
              position: "relative",
              zIndex: 2
            }}>
              Let our expert team create an unforgettable dining experience just for you!
            </p>
            
            <a href="#reservation" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "white",
              color: "#667eea",
              padding: "18px 35px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px",
              position: "relative",
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
            }}>
              Book Your Table
              <span style={{ fontSize: "1.2rem" }}>👨‍🍳</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .team-title {
            font-size: 2.5rem !important;
          }
          
          .team-card {
            margin: 0 10px !important;
          }
          
          .team-image {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
