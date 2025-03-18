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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/ab/c1/reservation/login", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userRole", response.data.role); // Store role

        // Redirect based on role
        if (response.data.role === "admin") {
          navigate("/home"); // Redirect admin
        } else {
          navigate("/"); // Redirect normal users
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert("Incorrect password");
        } else if (error.response.status === 404) {
          alert("User not found");
        } else {
          alert("Login failed. Please try again.");
        }
      } else {
        alert("Something went wrong. Please check your internet connection.");
      }
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#24262b" }}>
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", width: "400px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#c05621" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ marginTop: "1.5rem" }}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
          />
          <button type="submit" style={{ width: "100%", backgroundColor: "#c05621", color: "white", padding: "12px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
            Login
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Don't have an account? <Link to="/signup" style={{ color: "#c05621", fontWeight: "bold" }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
