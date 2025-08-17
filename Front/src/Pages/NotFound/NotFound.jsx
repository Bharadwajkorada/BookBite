import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: "30px",
        padding: "60px 40px",
        textAlign: "center",
        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        maxWidth: "600px",
        width: "100%"
      }}>
        {/* 404 Animation */}
        <div style={{
          fontSize: "120px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
          animation: "float 3s ease-in-out infinite"
        }}>
          404
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            @keyframes shake {
              0%, 100% {
                transform: translateX(0);
              }
              25% {
                transform: translateX(-5px);
              }
              75% {
                transform: translateX(5px);
              }
            }
          `}
        </style>

        <div style={{
          fontSize: "80px",
          marginBottom: "30px",
          animation: "shake 2s ease-in-out infinite"
        }}>
          🍽️
        </div>

        <h1 style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#333",
          marginBottom: "16px"
        }}>
          Oops! Page Not Found
        </h1>

        <p style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "40px",
          lineHeight: "1.6",
          maxWidth: "400px",
          margin: "0 auto 40px"
        }}>
          Looks like you've wandered off the menu! The page you're looking for doesn't exist or has been moved.
        </p>

        <div style={{
          background: "linear-gradient(135deg, #ff7675, #fd79a8)",
          color: "white",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "40px",
          fontSize: "16px"
        }}>
          <div style={{ marginBottom: "12px", fontSize: "24px" }}>🧭</div>
          <div style={{ fontWeight: "600" }}>Don't worry, we'll help you find your way back!</div>
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "16px 32px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
            }}>
              🏠 Back to Home <HiOutlineArrowNarrowRight />
            </button>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "16px 32px",
              background: "linear-gradient(135deg, #fd79a8, #e84393)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(253, 121, 168, 0.4)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(253, 121, 168, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(253, 121, 168, 0.4)";
            }}>
              🔐 Login
            </button>
          </Link>
        </div>

        <div style={{
          marginTop: "40px",
          padding: "20px",
          background: "#f8f9fa",
          borderRadius: "12px",
          border: "1px solid #e9ecef"
        }}>
          <h3 style={{ color: "#495057", fontSize: "16px", marginBottom: "12px" }}>
            🤔 What you can do:
          </h3>
          <ul style={{
            textAlign: "left",
            color: "#6c757d",
            fontSize: "14px",
            lineHeight: "1.6",
            paddingLeft: "20px"
          }}>
            <li>Check the URL for any typos</li>
            <li>Go back to our homepage</li>
            <li>Browse our restaurant menu and make a reservation</li>
            <li>Contact us if you think this is an error</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
