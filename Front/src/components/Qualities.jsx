import React from 'react'
import {data} from '../restApi.json'

const Qualities = () => {
  return (
    <section style={{
      padding: "100px 20px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative"
    }} id='qualities'>
      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "300px",
        height: "300px",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "50%",
        filter: "blur(40px)"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "200px",
        height: "200px",
        background: "rgba(255, 255, 255, 0.08)",
        borderRadius: "50%",
        filter: "blur(30px)"
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
            color: "#f093fb",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "15px",
            display: "block"
          }}>
            Our Services
          </span>
          
          <h2 style={{
            fontSize: "3.5rem",
            fontWeight: "800",
            color: "white",
            marginBottom: "20px",
            lineHeight: "1.1"
          }}>
            Why Choose 
            <span style={{
              background: "linear-gradient(45deg, #f093fb, #f5576c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block"
            }}>
              BookBite?
            </span>
          </h2>
          
          <p style={{
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            We're committed to providing exceptional dining experiences through our core values and services.
          </p>
        </div>
        
        {/* Qualities Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          alignItems: "stretch"
        }}>
          {data[0].ourQualities.map((element, index) => {
            const colors = [
              { bg: "rgba(255, 107, 107, 0.1)", border: "#ff6b6b", icon: "#ff6b6b" },
              { bg: "rgba(52, 211, 153, 0.1)", border: "#34d399", icon: "#34d399" },
              { bg: "rgba(251, 191, 36, 0.1)", border: "#fbbf24", icon: "#fbbf24" }
            ];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={element.id}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  textAlign: "center",
                  border: `1px solid ${color.border}20`,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px)";
                  e.target.style.boxShadow = "0 30px 60px rgba(0, 0, 0, 0.2)";
                  e.target.style.background = color.bg;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                }}
              >
                {/* Card Background Pattern */}
                <div style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "200px",
                  height: "200px",
                  background: `linear-gradient(45deg, ${color.border}10, transparent)`,
                  borderRadius: "50%",
                  pointerEvents: "none"
                }}></div>
                
                {/* Icon Container */}
                <div style={{
                  width: "100px",
                  height: "100px",
                  background: `linear-gradient(135deg, ${color.border}, ${color.icon})`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  boxShadow: `0 15px 30px ${color.border}40`,
                  position: "relative",
                  zIndex: 2
                }}>
                  <img 
                    src={element.image} 
                    alt={element.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      filter: "brightness(0) invert(1)"
                    }}
                  />
                </div>
                
                {/* Content */}
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  position: "relative",
                  zIndex: 2
                }}>
                  {element.title}
                </h3>
                
                <p style={{
                  fontSize: "1.1rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.6",
                  position: "relative",
                  zIndex: 2
                }}>
                  {element.description}
                </p>
                
                {/* Decorative Element */}
                <div style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "50px",
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${color.border}, transparent)`,
                  borderRadius: "2px"
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
          <a href="#reservation" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "linear-gradient(135deg, #f093fb, #f5576c)",
            color: "white",
            padding: "18px 40px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            boxShadow: "0 15px 30px rgba(245, 87, 108, 0.4)",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            letterSpacing: "1px"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 20px 40px rgba(245, 87, 108, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 15px 30px rgba(245, 87, 108, 0.4)";
          }}>
            Experience Our Service
            <span style={{ fontSize: "1.2rem" }}>→</span>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 768px) {
          .qualities-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .qualities-title {
            font-size: 2.5rem !important;
          }
          
          .quality-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Qualities
