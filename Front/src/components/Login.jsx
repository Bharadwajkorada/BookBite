// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:4000/ab/c1/reservation/login", {
//         email,
//         password,
//       });
      
//       if (response.data.token) {
//         localStorage.setItem("authToken", response.data.token);
//       }
//       console.log("You are logged in");
//       navigate("/"); // Redirect to home page after login
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         alert("Incorrect password");
//         setEmail("");
//         setPassword("");
//       }
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#24262b" }}>
//       <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", width: "400px" }}>
//         <h2 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#c05621" }}>Login</h2>
//         <form onSubmit={handleLogin} style={{ marginTop: "1.5rem" }}>
//           <input 
//             type="email" 
//             placeholder="Email" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//             required
//             style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
//           />
//           <input 
//             type="password" 
//             placeholder="Password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             required
//             style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
//           />
//           <button type="submit" style={{ width: "100%", backgroundColor: "#c05621", color: "white", padding: "12px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
//             Login
//           </button>
//         </form>
//         <p style={{ textAlign: "center", marginTop: "1rem" }}>
//           Don't have an account? <Link to="/signup" style={{ color: "#c05621", fontWeight: "bold" }}>Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:4000/ab/c1/reservation/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userRole", response.data.role);
        
        toast.success("Login successful!");
        
        // Redirect based on role
        if (response.data.role === "admin") {
          navigate("/list");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("Incorrect password");
        } else if (error.response.status === 404) {
          toast.error("User not found");
        } else {
          toast.error("Login failed. Please try again.");
        }
      } else {
        toast.error("Something went wrong. Please check your internet connection.");
      }
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

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
        borderRadius: "20px",
        padding: "40px",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{
            fontSize: "32px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "8px"
          }}>
            Welcome Back
          </h1>
          <p style={{ color: "#666", fontSize: "16px" }}>Sign in to your BookBite account</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "2px solid #e1e5e9",
                borderRadius: "12px",
                fontSize: "16px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#f8f9fa"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "2px solid #e1e5e9",
                borderRadius: "12px",
                fontSize: "16px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#f8f9fa"
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              background: loading ? "#ccc" : "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              transform: loading ? "none" : "translateY(0)",
              boxShadow: loading ? "none" : "0 4px 15px rgba(102, 126, 234, 0.4)"
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
              }
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
        
        <div style={{
          textAlign: "center",
          marginTop: "30px",
          padding: "20px 0",
          borderTop: "1px solid #e1e5e9"
        }}>
          <p style={{ color: "#666", fontSize: "16px" }}>
            Don't have an account?{" "}
            <Link 
              to="/signup" 
              style={{
                color: "#667eea",
                textDecoration: "none",
                fontWeight: "600",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#764ba2"}
              onMouseLeave={(e) => e.target.style.color = "#667eea"}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
