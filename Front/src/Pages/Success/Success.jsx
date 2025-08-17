import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
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
        maxWidth: "500px",
        width: "100%"
      }}>
        {/* Success Animation */}
        <div style={{
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, #55efc4, #00b894)",
          borderRadius: "50%",
          margin: "0 auto 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "bounce 2s infinite",
          boxShadow: "0 10px 30px rgba(85, 239, 196, 0.4)"
        }}>
          <span style={{ fontSize: "60px", color: "white" }}>✓</span>
        </div>

        <style>
          {`
            @keyframes bounce {
              0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
              }
              40% {
                transform: translateY(-10px);
              }
              60% {
                transform: translateY(-5px);
              }
            }
            @keyframes pulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
              100% {
                transform: scale(1);
              }
            }
          `}
        </style>

        <h1 style={{
          fontSize: "36px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #55efc4, #00b894)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "16px"
        }}>
          🎉 Reservation Successful!
        </h1>

        <p style={{
          color: "#666",
          fontSize: "18px",
          marginBottom: "30px",
          lineHeight: "1.6"
        }}>
          Your table reservation has been submitted successfully! 
          We'll review your request and send you a confirmation shortly.
        </p>

        <div style={{
          background: "linear-gradient(135deg, #74b9ff, #0984e3)",
          color: "white",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "30px",
          fontSize: "18px",
          fontWeight: "600"
        }}>
          <div style={{ marginBottom: "8px" }}>🕐 Redirecting to Home in</div>
          <div style={{
            fontSize: "32px",
            fontWeight: "700",
            animation: "pulse 1s infinite"
          }}>
            {countdown} seconds
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "14px 28px",
              background: "linear-gradient(135deg, #a8edea, #fed6e3)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(168, 237, 234, 0.4)",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(168, 237, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(168, 237, 234, 0.4)";
            }}>
              🏠 Back to Home <HiOutlineArrowNarrowRight />
            </button>
          </Link>

          <Link to="/list" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "14px 28px",
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
              📋 View My Reservations
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
            📧 What happens next?
          </h3>
          <ul style={{
            textAlign: "left",
            color: "#6c757d",
            fontSize: "14px",
            lineHeight: "1.6",
            paddingLeft: "20px"
          }}>
            <li>Our team will review your reservation request</li>
            <li>You'll receive an email confirmation within 24 hours</li>
            <li>Check your reservations page for status updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Success;