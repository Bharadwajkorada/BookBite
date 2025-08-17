import React from 'react'
import {data} from '../restApi.json'

const WhoAreWe = () => {
  return (
    <section style={{
      padding: "100px 20px",
      background: "linear-gradient(135deg, #2d3748 0%, #4a5568 100%)",
      position: "relative",
      overflow: "hidden"
    }} id='who_are_we'>
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(40px)"
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
            color: "#ff6b6b",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "15px",
            display: "block"
          }}>
            Our Achievements
          </span>
          
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            color: "white",
            marginBottom: "20px",
            lineHeight: "1.1"
          }}>
            Who We 
            <span style={{
              background: "linear-gradient(45deg, #ff6b6b, #f093fb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block"
            }}>
              Are
            </span>
          </h2>
          
          <p style={{
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Numbers that speak for our commitment to excellence and customer satisfaction.
          </p>
        </div>
        
        {/* Stats Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>
          {/* Left Stats */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "60px"
          }}>
            {data[0].who_we_are.slice(0, 2).map((element, index) => {
              const colors = ["#ff6b6b", "#34d399"];
              return (
                <div 
                  key={element.id}
                  style={{
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: "40px 30px",
                    border: `1px solid ${colors[index]}20`,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-10px)";
                    e.target.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.2)";
                    e.target.style.background = `${colors[index]}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <div style={{
                    fontSize: "4rem",
                    fontWeight: "800",
                    color: colors[index],
                    marginBottom: "15px",
                    textShadow: `0 0 30px ${colors[index]}50`
                  }}>
                    {element.number}
                  </div>
                  <div style={{
                    fontSize: "1.1rem",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    {element.title}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Center Image */}
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div style={{
              position: "relative",
              width: "400px",
              height: "500px",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
            }}>
              <img 
                src="whoweare.png" 
                alt="BookBite Restaurant Interior" 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "30px"
                }}
              />
              
              {/* Overlay Gradient */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(102, 126, 234, 0.2))",
                borderRadius: "30px"
              }}></div>
              
              {/* Center Logo/Icon */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "100px",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                animation: "pulse 2s infinite"
              }}>
                <span style={{ fontSize: "3rem" }}>🍽️</span>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div style={{
              position: "absolute",
              top: "10%",
              right: "-5%",
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 15px 30px rgba(245, 158, 11, 0.4)",
              animation: "float 4s ease-in-out infinite"
            }}>
              <span style={{ fontSize: "2rem" }}>⭐</span>
            </div>
            
            <div style={{
              position: "absolute",
              bottom: "15%",
              left: "-5%",
              width: "70px",
              height: "70px",
              background: "linear-gradient(135deg, #10b981, #059669)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 15px 30px rgba(5, 150, 105, 0.4)",
              animation: "float 6s ease-in-out infinite reverse"
            }}>
              <span style={{ fontSize: "1.8rem" }}>🏆</span>
            </div>
          </div>
          
          {/* Right Stats */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "60px"
          }}>
            {data[0].who_we_are.slice(2).map((element, index) => {
              const colors = ["#fbbf24", "#8b5cf6"];
              return (
                <div 
                  key={element.id}
                  style={{
                    textAlign: "center",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "20px",
                    padding: "40px 30px",
                    border: `1px solid ${colors[index]}20`,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-10px)";
                    e.target.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.2)";
                    e.target.style.background = `${colors[index]}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <div style={{
                    fontSize: "4rem",
                    fontWeight: "800",
                    color: colors[index],
                    marginBottom: "15px",
                    textShadow: `0 0 30px ${colors[index]}50`
                  }}>
                    {element.number}
                  </div>
                  <div style={{
                    fontSize: "1.1rem",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>
                    {element.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div style={{
          textAlign: "center",
          marginTop: "100px"
        }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            padding: "50px 40px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            <h3 style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "white",
              marginBottom: "20px"
            }}>
              Join Our Success Story
            </h3>
            
            <p style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: "30px",
              lineHeight: "1.6"
            }}>
              Be part of our growing community of food lovers and experience the excellence that sets us apart.
            </p>
            
            <a href="#reservation" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #ff6b6b, #f093fb)",
              color: "white",
              padding: "18px 35px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 15px 30px rgba(255, 107, 107, 0.4)",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 20px 40px rgba(255, 107, 107, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 15px 30px rgba(255, 107, 107, 0.4)";
            }}>
              Reserve Your Table
              <span style={{ fontSize: "1.2rem" }}>→</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .stats-title {
            font-size: 2.5rem !important;
          }
          
          .center-image {
            width: 300px !important;
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhoAreWe
