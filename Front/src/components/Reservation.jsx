// import React, { useEffect, useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Reservation = () => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [phone, setPhone] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = () => {
//       setIsLoggedIn(!!localStorage.getItem("authToken"));
//     };
//     window.addEventListener("storage", checkAuth);
//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleReservation = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       toast.error("Please log in to make a reservation.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/ab/c1/reservation/send",
//         { firstname, lastname, email, phone, date, time },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success(data.message);
//       setFirstname("");
//       setLastname("");
//       setPhone("");
//       setEmail("");
//       setTime("");
//       setDate("");
//       navigate("/success");
//     } catch (error) {
//       console.error("Reservation error:", error);
//       toast.error(error.response?.data?.message || "Reservation failed");
//     }
//   };

//   return (
//     <section className="reservation" id="reservation">
//       <div className="container">
//         <div className="banner">
//           <img src="/reservation.png" alt="Reservation" />
//         </div>
//         <div className="banner">
//           <div className="reservation_form_box">
//             <h1>MAKE A RESERVATION</h1>
//             <p>For Further Questions, Please Call</p>
//             <form onSubmit={handleReservation}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstname}
//                   onChange={(e) => setFirstname(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastname}
//                   onChange={(e) => setLastname(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="email_tag"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit">
//                 RESERVE NOW <HiOutlineArrowNarrowRight />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservation;

// import React, { useEffect, useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Reservation = () => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [phone, setPhone] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuth = () => {
//       setIsLoggedIn(!!localStorage.getItem("authToken"));
//     };
//     window.addEventListener("storage", checkAuth);
//     return () => {
//       window.removeEventListener("storage", checkAuth);
//     };
//   }, []);

//   const handleReservation = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       toast.error("Please log in to make a reservation.");
//       navigate("/login");
//       return;
//     }

//     try {
//       // Decode JWT manually
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       if (payload.role === "admin") {
//         toast.error("Admins are not allowed to make reservations.");
//         return;
//       }

//       const { data } = await axios.post(
//         "http://localhost:4000/ab/c1/reservation/send",
//         { firstname, lastname, email, phone, date, time },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success(data.message);
//       setFirstname("");
//       setLastname("");
//       setPhone("");
//       setEmail("");
//       setTime("");
//       setDate("");
//       navigate("/success");
//     } catch (error) {
//       console.error("Reservation error:", error);
//       toast.error(error.response?.data?.message || "Reservation failed");
//     }
//   };

//   return (
//     <section className="reservation" id="reservation">
//       <div className="container">
//         <div className="banner">
//           <img src="/reservation.png" alt="Reservation" />
//         </div>
//         <div className="banner">
//           <div className="reservation_form_box">
//             <h1>MAKE A RESERVATION</h1>
//             <p>For Further Questions, Please Call</p>
//             <form onSubmit={handleReservation}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={firstname}
//                   onChange={(e) => setFirstname(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={lastname}
//                   onChange={(e) => setLastname(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="email_tag"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//               <button type="submit">
//                 RESERVE NOW <HiOutlineArrowNarrowRight />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservation;


import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    };
    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleReservation = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (!token) {
      toast.error("Please log in to make a reservation.");
      navigate("/login");
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.role === "admin") {
        toast.error("Admins are not allowed to make reservations.");
        return;
      }

      const { data } = await axios.post(
        "http://localhost:4000/ab/c1/reservation/send",
        { firstname, lastname, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      console.error("Reservation error:", error);
      toast.error(error.response?.data?.message || "Reservation failed");
    }
  };

  return (
    <section 
      id="reservation"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
        filter: "blur(100px)",
        animation: "float 6s ease-in-out infinite"
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "15%",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.08)",
        filter: "blur(80px)",
        animation: "float 8s ease-in-out infinite reverse"
      }}></div>

      <div style={{
        maxWidth: "1200px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center"
      }}>
        {/* Image Section */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
          }}>
            <img 
              src="/reservation.png" 
              alt="Restaurant Reservation" 
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "20px"
              }}
            />
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(45deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
              borderRadius: "20px"
            }}></div>
          </div>
        </div>

        {/* Form Section */}
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "25px",
          padding: "50px 40px",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.2)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "15px",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}>
              Make a Reservation
            </h1>
            <p style={{
              color: "#666",
              fontSize: "1.1rem",
              fontWeight: "400"
            }}>
              Book your table for an unforgettable dining experience
            </p>
          </div>

          <form onSubmit={handleReservation} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {/* Name Fields */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                style={{
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "400",
                  background: "#f8f9fa",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e5e9";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                style={{
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "400",
                  background: "#f8f9fa",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e5e9";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Date and Time */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "400",
                  background: "#f8f9fa",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e5e9";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                style={{
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "400",
                  background: "#f8f9fa",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e5e9";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email and Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "400",
                  background: "#f8f9fa",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e5e9";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "400",
                  background: "#f8f9fa",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.background = "#fff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e5e9";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                padding: "18px 40px",
                borderRadius: "12px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 35px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.3)";
              }}
            >
              Reserve Now <HiOutlineArrowNarrowRight />
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          section > div > div:last-child {
            padding: 40px 30px !important;
          }
          
          section > div > div:last-child h1 {
            font-size: 2rem !important;
          }
          
          section > div > div:last-child form > div {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Reservation;
