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
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <button type="submit">
                RESERVE NOW <HiOutlineArrowNarrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
