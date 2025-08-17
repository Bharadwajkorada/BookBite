// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-hot-toast";


// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try{
//       await axios.post("http://localhost:4000/ab/c1/reservation/register", {
//         username,
//         email,
//         password,
//       });
//       console.log("Account created");
//       navigate("/login");
//     }catch(error){
//       if (error.response) {
//           if (error.response.status === 400) {
//               toast.error("Email already exists! Try another one.");
//           } else {
//               toast.error(error.response.data.error || "Signup failed!");
//               }
//           } else {
//               toast.error("Something went wrong. Please try again!");
//           }
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#24262b" }}>
//       <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", width: "400px" }}>
//         <h2 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#c05621" }}>Sign Up</h2>
//         <form onSubmit={handleSignup} style={{ marginTop: "1.5rem" }}>
//           <input 
//             type="text" 
//             placeholder="Username" 
//             value={username} 
//             onChange={(e) => setUsername(e.target.value)} 
//             required
//             style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
//           />
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
//             Sign Up
//           </button>
//         </form>
//         <p style={{ textAlign: "center", marginTop: "1rem" }}>
//           Already have an account? <Link to="/login" style={{ color: "#c05621", textDecoration: "none" }}>Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [adminKey, setAdminKey] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (role === "admin" && adminKey !== "123") {
      toast.error("Invalid Admin Key!");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:4000/ab/c1/reservation/register", {
        username,
        email,
        password,
        role
      });
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("Email already exists! Try another one.");
        } else {
          toast.error(error.response.data.error || "Signup failed!");
        }
      } else {
        toast.error("Something went wrong. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
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
        maxWidth: "450px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{
            fontSize: "32px",
            fontWeight: "700",
            background: "linear-gradient(135deg, #ff9a9e, #fecfef)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "8px"
          }}>
            Join BookBite
          </h1>
          <p style={{ color: "#666", fontSize: "16px" }}>Create your account to start booking</p>
        </div>

        <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <input 
              type="text" 
              placeholder="Full Name" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
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
              onFocus={(e) => e.target.style.borderColor = "#ff9a9e"}
              onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
            />
          </div>
          
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
              onFocus={(e) => e.target.style.borderColor = "#ff9a9e"}
              onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Create Password" 
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
              onFocus={(e) => e.target.style.borderColor = "#ff9a9e"}
              onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
            />
          </div>

          <div>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)} 
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "2px solid #e1e5e9",
                borderRadius: "12px",
                fontSize: "16px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#f8f9fa",
                cursor: "pointer"
              }}
              onFocus={(e) => e.target.style.borderColor = "#ff9a9e"}
              onBlur={(e) => e.target.style.borderColor = "#e1e5e9"}
            >
              <option value="user">🍽️ Customer Account</option>
              <option value="admin">👨‍💼 Restaurant Admin</option>
            </select>
          </div>

          {role === "admin" && (
            <div style={{
              padding: "16px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "12px"
            }}>
              <input 
                type="password" 
                placeholder="🔑 Enter Admin Key" 
                value={adminKey} 
                onChange={(e) => setAdminKey(e.target.value)} 
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #ffeaa7",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: "none",
                  backgroundColor: "#fff"
                }}
              />
              <p style={{ 
                fontSize: "12px", 
                color: "#856404", 
                marginTop: "8px", 
                marginBottom: "0" 
              }}>
                Contact restaurant management for admin access key
              </p>
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px",
              background: loading ? "#ccc" : "linear-gradient(135deg, #ff9a9e, #fecfef)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              transform: loading ? "none" : "translateY(0)",
              boxShadow: loading ? "none" : "0 4px 15px rgba(255, 154, 158, 0.4)"
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(255, 154, 158, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(255, 154, 158, 0.4)";
              }
            }}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        
        <div style={{
          textAlign: "center",
          marginTop: "30px",
          padding: "20px 0",
          borderTop: "1px solid #e1e5e9"
        }}>
          <p style={{ color: "#666", fontSize: "16px" }}>
            Already have an account?{" "}
            <Link 
              to="/login" 
              style={{
                color: "#ff9a9e",
                textDecoration: "none",
                fontWeight: "600",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.color = "#fecfef"}
              onMouseLeave={(e) => e.target.style.color = "#ff9a9e"}
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
