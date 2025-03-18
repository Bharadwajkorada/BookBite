// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";

// // const List = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const authToken = localStorage.getItem("authToken"); // Get token for authentication

// //   useEffect(() => {
// //     if (!authToken) {
// //       console.error("User not authenticated");
// //       return;
// //     }

// //     axios
// //       .get("http://localhost:4000/ab/c1/reservation/list", {
// //         headers: { Authorization: `Bearer ${authToken}` }, // Pass token
// //         withCredentials: true,
// //       })
// //       .then((response) => {
// //         console.log("Response Data:", response.data); // Debugging
// //         setBookings(response.data.data); // Set state with user's bookings
// //       })
// //       .catch((error) => console.error("Error fetching Bookings:", error));
// //   }, [authToken]);

// //   return (
// //     <div style={{ textAlign: "center", padding: "20px" }}>
// //       <h2>My Reservations</h2>
// //       <Link to="/">
// //         <button className="menuBtn">Home</button>
// //       </Link>

// //       {bookings.length === 0 ? (
// //         <p>No reservations found</p>
// //       ) : (
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //             gap: "20px",
// //             padding: "20px",
// //           }}
// //         >
// //           {bookings.map((booking) => (
// //             <div
// //               key={booking._id}
// //               style={{
// //                 background: "#fff",
// //                 padding: "15px",
// //                 borderRadius: "10px",
// //                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //                 transition: "transform 0.3s ease-in-out",
// //               }}
// //               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// //               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //             >
// //               <p>
// //                 <strong>Name:</strong> {booking.firstname} {booking.lastname}
// //               </p>
// //               <p>
// //                 <strong>Email:</strong> {booking.email}
// //               </p>
// //               <p>
// //                 <strong>Phone:</strong> {booking.phone}
// //               </p>
// //               <p>
// //                 <strong>Date:</strong> {booking.date}
// //               </p>
// //               <p>
// //                 <strong>Time:</strong> {booking.time}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default List;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { Link } from "react-router-dom";

// // const List = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const authToken = localStorage.getItem("authToken"); // Get token for authentication

// //   useEffect(() => {
// //     if (!authToken) {
// //       console.error("User not authenticated");
// //       return;
// //     }

// //     axios
// //       .get("http://localhost:4000/ab/c1/reservation/list", {
// //         headers: { Authorization: `Bearer ${authToken}` }, // Pass token
// //         withCredentials: true,
// //       })
// //       .then((response) => {
// //         console.log("Response Data:", response.data); // Debugging
// //         setBookings(response.data.data); // Set state with user's bookings
// //       })
// //       .catch((error) => console.error("Error fetching Bookings:", error));
// //   }, [authToken]);

// //   // Function to determine status text color
// //   const getStatusTextColor = (status) => {
// //     switch (status) {
// //       case "Waiting for verification":
// //         return { color: "#FFEB3B", fontWeight: "bold" }; // Yellow text
// //       case "Rejected":
// //         return { color: "#F44336", fontWeight: "bold" }; // Red text
// //       case "Verified":
// //         return { color: "#4CAF50", fontWeight: "bold" }; // Green text
// //       default:
// //         return {};
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", padding: "20px" }}>
// //       <h2>My Reservations</h2>
// //       <Link to="/">
// //         <button className="menuBtn">Home</button>
// //       </Link>

// //       {bookings.length === 0 ? (
// //         <p>No reservations found</p>
// //       ) : (
// //         <div
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //             gap: "20px",
// //             padding: "20px",
// //           }}
// //         >
// //           {bookings.map((booking) => (
// //             <div
// //               key={booking._id}
// //               style={{
// //                 background: "#fff",
// //                 padding: "15px",
// //                 borderRadius: "10px",
// //                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //                 transition: "transform 0.3s ease-in-out",
// //               }}
// //               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
// //               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
// //             >
// //               <p>
// //                 <strong>Name:</strong> {booking.firstname} {booking.lastname}
// //               </p>
// //               <p>
// //                 <strong>Email:</strong> {booking.email}
// //               </p>
// //               <p>
// //                 <strong>Phone:</strong> {booking.phone}
// //               </p>
// //               <p>
// //                 <strong>Date:</strong> {booking.date}
// //               </p>
// //               <p>
// //                 <strong>Time:</strong> {booking.time}
// //               </p>
// //               <p>
// //                 <strong>Status:</strong> <span style={getStatusTextColor(booking.status)}>{booking.status}</span>
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default List;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const List = () => {
//   const [bookings, setBookings] = useState([]);
//   const authToken = localStorage.getItem("authToken");
//   const isAdmin = localStorage.getItem("role") === "admin"; // Check user role

//   useEffect(() => {
//     if (!authToken) {
//       console.error("User not authenticated");
//       return;
//     }

//     axios
//       .get("http://localhost:4000/ab/c1/reservation/list", {
//         headers: { Authorization: `Bearer ${authToken}` },
//         withCredentials: true,
//       })
//       .then((response) => {
//         console.log("Response Data:", response.data);
//         setBookings(response.data.data);
//       })
//       .catch((error) => console.error("Error fetching Bookings:", error));
//   }, [authToken]);

//   // Function to determine status text color
//   const getStatusTextColor = (status) => {
//     switch (status) {
//       case "Waiting for verification":
//         return { color: "#FFEB3B", fontWeight: "bold" }; // Yellow text
//       case "Rejected":
//         return { color: "#F44336", fontWeight: "bold" }; // Red text
//       case "Verified":
//         return { color: "#4CAF50", fontWeight: "bold" }; // Green text
//       default:
//         return {};
//     }
//   };

//   // Function to update reservation status in database
//   const updateStatus = (id, newStatus) => {
//     axios
//       .patch(
//         `http://localhost:4000/ab/c1/reservation/update/${id}`,
//         { status: newStatus },
//         { headers: { Authorization: `Bearer ${authToken}` } }
//       )
//       .then(() => {
//         setBookings((prevBookings) =>
//           prevBookings.map((booking) =>
//             booking._id === id ? { ...booking, status: newStatus } : booking
//           )
//         );
//       })
//       .catch((error) => console.error("Error updating status:", error));
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>{isAdmin ? "All Reservations" : "My Reservations"}</h2>
//       <Link to="/">
//         <button className="menuBtn">Home</button>
//       </Link>

//       {bookings.length === 0 ? (
//         <p>No reservations found</p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//             padding: "20px",
//           }}
//         >
//           {bookings.map((booking) => (
//             <div
//               key={booking._id}
//               style={{
//                 background: "#fff",
//                 padding: "15px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <p>
//                 <strong>Name:</strong> {booking.firstname} {booking.lastname}
//               </p>
//               <p>
//                 <strong>Email:</strong> {booking.email}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {booking.phone}
//               </p>
//               <p>
//                 <strong>Date:</strong> {booking.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {booking.time}
//               </p>
//               <p>
//                 <strong>Status:</strong> <span style={getStatusTextColor(booking.status)}>{booking.status}</span>
//               </p>

//               {isAdmin && (
//                 <>
//                   <p>
//                     <strong>Booked By:</strong> {booking.bookedBy} {/* Show who made the reservation */}
//                   </p>
//                   {booking.status !== "Verified" && (
//                     <div style={{ marginTop: "10px" }}>
//                       <button
//                         style={{
//                           background: "#4CAF50",
//                           color: "#fff",
//                           padding: "5px 10px",
//                           borderRadius: "5px",
//                           border: "none",
//                           cursor: "pointer",
//                           marginRight: "5px",
//                         }}
//                         onClick={() => updateStatus(booking._id, "Verified")}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         style={{
//                           background: "#F44336",
//                           color: "#fff",
//                           padding: "5px 10px",
//                           borderRadius: "5px",
//                           border: "none",
//                           cursor: "pointer",
//                         }}
//                         onClick={() => updateStatus(booking._id, "Rejected")}
//                       >
//                         Decline
//                       </button>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const List = () => {
//   const [bookings, setBookings] = useState([]);
//   const [userRole, setUserRole] = useState(""); // Store user role
//   const authToken = localStorage.getItem("authToken");

//   useEffect(() => {
//     if (!authToken) {
//       console.error("User not authenticated");
//       return;
//     }

//     // Extract user role from JWT
//     try {
//       const payload = JSON.parse(atob(authToken.split(".")[1]));
//       if (payload.role === "admin") {
//         setUserRole("admin");
//       } else {
//         setUserRole("user");
//       }
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }

//     // Fetch reservations
//     axios
//       .get("http://localhost:4000/ab/c1/reservation/list", {
//         headers: { Authorization: `Bearer ${authToken}` },
//         withCredentials: true,
//       })
//       .then((response) => {
//         console.log("Response Data:", response.data);
//         setBookings(response.data.data);
//       })
//       .catch((error) => console.error("Error fetching Bookings:", error));
//   }, [authToken]);

//   // Handle status update (Admin Action)
//   const updateStatus = async (reservationId, status) => {
//     try {
//       await axios.post(
//         "http://localhost:4000/ab/c1/reservation/update_status",
//         { reservationId, status },
//         {
//           headers: { Authorization: `Bearer ${authToken}` },
//           withCredentials: true,
//         }
//       );

//       // Update state to reflect new status
//       setBookings((prevBookings) =>
//         prevBookings.map((booking) =>
//           booking._id === reservationId ? { ...booking, status } : booking
//         )
//       );
//     } catch (error) {
//       console.error("Error updating reservation status:", error);
//     }
//   };

//   // Highlight "Waiting for Verification" in yellow
//   const getStatusTextColor = (status) => {
//     if (status === "Waiting for verification") return { color: "#FFEB3B", fontWeight: "bold" }; // Yellow
//     if (status === "Verified") return { color: "#4CAF50", fontWeight: "bold" }; // Green
//     if (status === "Rejected") return { color: "#F44336", fontWeight: "bold" }; // Red
//     return {}; // No color for other statuses // No color for other statuses
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>{userRole === "admin" ? "All Reservations" : "My Reservations"}</h2>
//       <Link to="/">
//         <button className="menuBtn">Home</button>
//       </Link>

//       {bookings.length === 0 ? (
//         <p>No reservations found</p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//             padding: "20px",
//           }}
//         >
//           {bookings.map((booking) => (
//             <div
//               key={booking._id}
//               style={{
//                 background: "#fff",
//                 padding: "15px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <p>
//                 <strong>Name:</strong> {booking.firstname} {booking.lastname}
//               </p>
//               <p>
//                 <strong>Email:</strong> {booking.email}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {booking.phone}
//               </p>
//               <p>
//                 <strong>Date:</strong> {booking.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {booking.time}
//               </p>
//               <p>
//                 <strong>Status:</strong>{" "}
//                 <span style={getStatusTextColor(booking.status)}>{booking.status}</span>
//               </p>

//               {/* Admin Controls: Show buttons if status is pending */}
//               {userRole === "admin" && booking.status === "Waiting for verification" && (
//                 <>
//                   <button
//                     style={{
//                       background: "#4CAF50",
//                       color: "#fff",
//                       padding: "8px 12px",
//                       border: "none",
//                       borderRadius: "5px",
//                       marginRight: "10px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => updateStatus(booking._id, "Verified")}
//                   >
//                     Accept
//                   </button>

//                   <button
//                     style={{
//                       background: "#F44336",
//                       color: "#fff",
//                       padding: "8px 12px",
//                       border: "none",
//                       borderRadius: "5px",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => updateStatus(booking._id, "Rejected")}
//                   >
//                     Decline
//                   </button>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const List = () => {
//   const [bookings, setBookings] = useState([]);
//   const [userRole, setUserRole] = useState("");
//   const [selectedDate, setSelectedDate] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedBookings, setSelectedBookings] = useState([]);
//   const authToken = localStorage.getItem("authToken");

//   useEffect(() => {
//     if (!authToken) {
//       console.error("User not authenticated");
//       return;
//     }

//     try {
//       const payload = JSON.parse(atob(authToken.split(".")[1]));
//       setUserRole(payload.role === "admin" ? "admin" : "user");
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }

//     fetchReservations();
//   }, [authToken]);

//   const fetchReservations = () => {
//     axios
//       .get("http://localhost:4000/ab/c1/reservation/list", {
//         headers: { Authorization: `Bearer ${authToken}` },
//         withCredentials: true,
//       })
//       .then((response) => {
//         setBookings(response.data.data);
//       })
//       .catch((error) => console.error("Error fetching Bookings:", error));
//   };

//   const updateStatus = async (reservationIds, status) => {
//     try {
//       await axios.post(
//         "http://localhost:4000/ab/c1/reservation/update_status",
//         { reservationIds, status },
//         {
//           headers: { Authorization: `Bearer ${authToken}` },
//           withCredentials: true,
//         }
//       );
//       fetchReservations();
//     } catch (error) {
//       console.error("Error updating reservation status:", error);
//     }
//   };

//   const toggleSelection = (id) => {
//     setSelectedBookings((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   const getStatusTextColor = (status) => {
//     if (status === "Waiting for verification") return { color: "#FFEB3B", fontWeight: "bold" };
//     if (status === "Verified") return { color: "#4CAF50", fontWeight: "bold" };
//     if (status === "Rejected") return { color: "#F44336", fontWeight: "bold" };
//     return {};
//   };

//   const filteredBookings = bookings.filter((booking) =>
//     (selectedDate ? booking.date === selectedDate : true) &&
//     (searchQuery ?
//       booking.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       booking.email.toLowerCase().includes(searchQuery.toLowerCase())
//       : true)
//   );

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>{userRole === "admin" ? "All Reservations" : "My Reservations"}</h2>
//       <Link to="/">
//         <button className="menuBtn">Home</button>
//       </Link>

//       {userRole === "admin" && (
//         <div style={{ marginBottom: "20px" }}>
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Search by Name or Email"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={{ marginLeft: "10px" }}
//           />
//           <button
//             onClick={() => updateStatus(selectedBookings, "Verified")}
//             disabled={selectedBookings.length === 0}
//           >
//             Bulk Verify
//           </button>
//           <button
//             onClick={() => updateStatus(selectedBookings, "Rejected")}
//             disabled={selectedBookings.length === 0}
//           >
//             Bulk Reject
//           </button>
//         </div>
//       )}

//       {filteredBookings.length === 0 ? (
//         <p>No reservations found</p>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//             padding: "20px",
//           }}
//         >
//           {filteredBookings.map((booking) => (
//             <div
//               key={booking._id}
//               style={{
//                 background: "#fff",
//                 padding: "15px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               {userRole === "admin" && (
//                 <input
//                   type="checkbox"
//                   checked={selectedBookings.includes(booking._id)}
//                   onChange={() => toggleSelection(booking._id)}
//                 />
//               )}
//               <p>
//                 <strong>Name:</strong> {booking.firstname} {booking.lastname}
//               </p>
//               <p>
//                 <strong>Email:</strong> {booking.email}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {booking.phone}
//               </p>
//               <p>
//                 <strong>Date:</strong> {booking.date}
//               </p>
//               <p>
//                 <strong>Time:</strong> {booking.time}
//               </p>
//               <p>
//                 <strong>Status:</strong> <span style={getStatusTextColor(booking.status)}>{booking.status}</span>
//               </p>

//               {userRole === "admin" && booking.status === "Waiting for verification" && (
//                 <>
//                   <button
//                     style={{ background: "#4CAF50", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px", marginRight: "10px", cursor: "pointer" }}
//                     onClick={() => updateStatus([booking._id], "Verified")}
//                   >
//                     Accept
//                   </button>

//                   <button
//                     style={{ background: "#F44336", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px", cursor: "pointer" }}
//                     onClick={() => updateStatus([booking._id], "Rejected")}
//                   >
//                     Decline
//                   </button>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const List = () => {
//   const [bookings, setBookings] = useState([]);
//   const [userRole, setUserRole] = useState("");
//   const authToken = localStorage.getItem("authToken");

//   useEffect(() => {
//     if (!authToken) {
//       console.error("User not authenticated");
//       return;
//     }
//     try {
//       const payload = JSON.parse(atob(authToken.split(".")[1]));
//       setUserRole(payload.role === "admin" ? "admin" : "user");
//     } catch (error) {
//       console.error("Error decoding token:", error);
//     }
//     axios
//       .get("http://localhost:4000/ab/c1/reservation/list", {
//         headers: { Authorization: `Bearer ${authToken}` },
//         withCredentials: true,
//       })
//       .then((response) => {
//         setBookings(response.data.data);
//       })
//       .catch((error) => console.error("Error fetching Bookings:", error));
//   }, [authToken]);

//   const updateStatus = async (reservationId, status) => {
//     try {
//       await axios.post(
//         "http://localhost:4000/ab/c1/reservation/update_status",
//         { reservationId, status },
//         {
//           headers: { Authorization: `Bearer ${authToken}` },
//           withCredentials: true,
//         }
//       );
//       setBookings((prevBookings) =>
//         prevBookings.map((booking) =>
//           booking._id === reservationId ? { ...booking, status } : booking
//         )
//       );
//     } catch (error) {
//       console.error("Error updating reservation status:", error);
//     }
//   };

//   const getStatusTextColor = (status) => {
//     if (status === "Waiting for verification") return { color: "#FFEB3B", fontWeight: "bold" };
//     if (status === "Verified") return { color: "#4CAF50", fontWeight: "bold" };
//     if (status === "Rejected") return { color: "#F44336", fontWeight: "bold" };
//     return {};
//   };

//   const pendingCount = bookings.filter((b) => b.status === "Waiting for verification").length;

//   return (
//     <div style={{ textAlign: "center", padding: "20px", background: "#f4f4f4", minHeight: "100vh" }}>
//       <h1 style={{ color: "#333", marginBottom: "20px" }}>
//         {userRole === "admin" ? "Admin Dashboard" : "My Reservations"}
//       </h1>
//       {userRole === "admin" && (
        // <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
        //   Pending Applications: <span style={{ color: "#FF9800" }}>{pendingCount}</span>
        // </div>
//       )}
      // <Link to="/">
      //   <button style={{ padding: "10px 20px", border: "none", background: "#007BFF", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>
      //     Home
      //   </button>
      // </Link>
//       {bookings.length === 0 ? (
//         <p style={{ marginTop: "20px" }}>No reservations found</p>
//       ) : (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px" }}>
//           {bookings.map((booking) => (
//             <div
//               key={booking._id}
//               style={{
//                 background: "#fff",
//                 padding: "20px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s ease-in-out",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <p><strong>Name:</strong> {booking.firstname} {booking.lastname}</p>
//               <p><strong>Email:</strong> {booking.email}</p>
//               <p><strong>Phone:</strong> {booking.phone}</p>
//               <p><strong>Date:</strong> {booking.date}</p>
//               <p><strong>Time:</strong> {booking.time}</p>
//               <p>
//                 <strong>Status:</strong>
//                 <span style={getStatusTextColor(booking.status)}> {booking.status}</span>
//               </p>
//               {userRole === "admin" && booking.status === "Waiting for verification" && (
//                 <div style={{ marginTop: "10px" }}>
//                   <button
//                     style={{ background: "#4CAF50", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px", marginRight: "10px", cursor: "pointer" }}
//                     onClick={() => updateStatus(booking._id, "Verified")}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     style={{ background: "#F44336", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px", cursor: "pointer" }}
//                     onClick={() => updateStatus(booking._id, "Rejected")}
//                   >
//                     Decline
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default List;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [bookings, setBookings] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      console.error("User not authenticated");
      return;
    }

    try {
      const payload = JSON.parse(atob(authToken.split(".")[1]));
      setUserRole(payload.role === "admin" ? "admin" : "user");
    } catch (error) {
      console.error("Error decoding token:", error);
    }

    axios
      .get("http://localhost:4000/ab/c1/reservation/list", {
        headers: { Authorization: `Bearer ${authToken}` },
        withCredentials: true,
      })
      .then((response) => {
        setBookings(response.data.data);
      })
      .catch((error) => console.error("Error fetching Bookings:", error));
  }, [authToken]);

  const updateStatus = async (reservationId, status) => {
    try {
      await axios.post(
        "http://localhost:4000/ab/c1/reservation/update_status",
        { reservationId, status },
        {
          headers: { Authorization: `Bearer ${authToken}` },
          withCredentials: true,
        }
      );
      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === reservationId ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      console.error("Error updating reservation status:", error);
    }
  };

  const getStatusTextColor = (status) => {
    if (status === "Waiting for verification") return { color: "#FFEB3B", fontWeight: "bold" };
    if (status === "Verified") return { color: "#4CAF50", fontWeight: "bold" };
    if (status === "Rejected") return { color: "#F44336", fontWeight: "bold" };
    return {};
  };

  const pendingCount = bookings.filter((b) => b.status === "Waiting for verification").length;

  const sortedBookings = [...bookings].sort((a, b) => new Date(a.date) - new Date(b.date));

  const filteredBookings = searchDate
    ? sortedBookings.filter((b) => b.date === searchDate)
    : sortedBookings;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{userRole === "admin" ? "Admin Dashboard" : "My Reservations"}</h2>
      <Link to="/">
        <button style={{ padding: "10px 20px", border: "none", background: "#007BFF", color: "#fff", cursor: "pointer", borderRadius: "5px" }}>
          Home
        </button>
      </Link>

      {userRole === "admin" && (
        
        <div style={{ marginBottom: "20px" }}>
          <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
          Pending Applications: <span style={{ color: "#FF9800" }}>{pendingCount}</span>
        </div> 
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            style={{ padding: "8px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
        </div>
      )}

      {filteredBookings.length === 0 ? (
        <p>No reservations found</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {filteredBookings.map((booking) => (
            <div
              key={booking._id}
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <p><strong>Name:</strong> {booking.firstname} {booking.lastname}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Status:</strong> <span style={getStatusTextColor(booking.status)}>{booking.status}</span></p>
              {userRole === "admin" && booking.status === "Waiting for verification" && (
                <>
                  <button
                    style={{ background: "#4CAF50", color: "#fff", padding: "8px 12px", margin: "5px", border: "none", borderRadius: "5px", cursor: "pointer" }}
                    onClick={() => updateStatus(booking._id, "Verified")}
                  >
                    Accept
                  </button>
                  <button
                    style={{ background: "#F44336", color: "#fff", padding: "8px 12px", border: "none", borderRadius: "5px", cursor: "pointer" }}
                    onClick={() => updateStatus(booking._id, "Rejected")}
                  >
                    Decline
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
