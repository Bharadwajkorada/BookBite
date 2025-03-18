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
  const [role, setRole] = useState("user"); // Default role is 'user'
  const [adminKey, setAdminKey] = useState(""); // Admin key input
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (role === "admin" && adminKey !== "123") {
      toast.error("Invalid Admin Key!");
      return;
    }

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
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#24262b" }}>
      <div style={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", width: "400px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#c05621" }}>Sign Up</h2>
        <form onSubmit={handleSignup} style={{ marginTop: "1.5rem" }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
          />
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

          {/* Dropdown for selecting role */}
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)} 
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }}
          >
            <option value="user">Normal User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Admin Key Input (Only visible when role is Admin) */}
          {role === "admin" && (
            <input 
              type="text" 
              placeholder="Enter Admin Key" 
              value={adminKey} 
              onChange={(e) => setAdminKey(e.target.value)} 
              required
              style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", marginBottom: "1rem" }} 
            />
          )}

          <button type="submit" style={{ width: "100%", backgroundColor: "#c05621", color: "white", padding: "12px", borderRadius: "5px", fontWeight: "bold", cursor: "pointer" }}>
            Sign Up
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Already have an account? <Link to="/login" style={{ color: "#c05621", textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
