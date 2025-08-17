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
import toast from "react-hot-toast";

const List = () => {
  const [bookings, setBookings] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [loading, setLoading] = useState(true);
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

    fetchBookings();
  }, [authToken]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:4000/ab/c1/reservation/list", {
        headers: { Authorization: `Bearer ${authToken}` },
        withCredentials: true,
      });
      setBookings(response.data.data);
    } catch (error) {
      console.error("Error fetching Bookings:", error);
      toast.error("Failed to fetch reservations");
    } finally {
      setLoading(false);
    }
  };

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
      toast.success(`Reservation ${status.toLowerCase()} successfully!`);
    } catch (error) {
      console.error("Error updating reservation status:", error);
      toast.error("Failed to update reservation status");
    }
  };

  const getStatusBadge = (status) => {
    const baseStyle = {
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px"
    };

    switch (status) {
      case "Waiting for verification":
        return { ...baseStyle, backgroundColor: "#fff3cd", color: "#856404", border: "1px solid #ffeaa7" };
      case "Verified":
        return { ...baseStyle, backgroundColor: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" };
      case "Rejected":
        return { ...baseStyle, backgroundColor: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" };
      default:
        return baseStyle;
    }
  };

  const pendingCount = bookings.filter((b) => b.status === "Waiting for verification").length;
  const verifiedCount = bookings.filter((b) => b.status === "Verified").length;
  const rejectedCount = bookings.filter((b) => b.status === "Rejected").length;

  const sortedBookings = [...bookings].sort((a, b) => new Date(a.date) - new Date(b.date));
  const filteredBookings = searchDate
    ? sortedBookings.filter((b) => b.date === searchDate)
    : sortedBookings;

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ color: "white", fontSize: "18px" }}>Loading reservations...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px"
    }}>
      {/* Header */}
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        padding: "30px",
        marginBottom: "30px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "0 0 8px 0"
            }}>
              {userRole === "admin" ? "🏢 Admin Dashboard" : "📋 My Reservations"}
            </h1>
            <p style={{ color: "#666", fontSize: "16px", margin: "0" }}>
              {userRole === "admin" ? "Manage all restaurant reservations" : "View your booking history"}
            </p>
          </div>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "12px 24px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
            }}>
              🏠 Back to Home
            </button>
          </Link>
        </div>

        {/* Stats Cards for Admin */}
        {userRole === "admin" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "30px"
          }}>
            <div style={{
              background: "linear-gradient(135deg, #ffeaa7, #fab1a0)",
              padding: "20px",
              borderRadius: "16px",
              color: "white",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "700" }}>{pendingCount}</div>
              <div style={{ fontSize: "14px", opacity: "0.9" }}>Pending Requests</div>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #55efc4, #00b894)",
              padding: "20px",
              borderRadius: "16px",
              color: "white",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "700" }}>{verifiedCount}</div>
              <div style={{ fontSize: "14px", opacity: "0.9" }}>Verified Bookings</div>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #fd79a8, #e84393)",
              padding: "20px",
              borderRadius: "16px",
              color: "white",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "32px", fontWeight: "700" }}>{rejectedCount}</div>
              <div style={{ fontSize: "14px", opacity: "0.9" }}>Rejected Requests</div>
            </div>
          </div>
        )}

        {/* Date Filter for Admin */}
        {userRole === "admin" && (
          <div style={{ marginTop: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#333" }}>
              📅 Filter by Date:
            </label>
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              style={{
                padding: "12px 16px",
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
            {searchDate && (
              <button
                onClick={() => setSearchDate("")}
                style={{
                  marginLeft: "12px",
                  padding: "12px 16px",
                  background: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer"
                }}
              >
                Clear Filter
              </button>
            )}
          </div>
        )}
      </div>

      {/* Reservations Grid */}
      {filteredBookings.length === 0 ? (
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "60px",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>📭</div>
          <h3 style={{ color: "#666", fontSize: "24px", marginBottom: "12px" }}>No Reservations Found</h3>
          <p style={{ color: "#999", fontSize: "16px" }}>
            {searchDate ? "No reservations found for the selected date." : "There are no reservations to display."}
          </p>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px"
        }}>
          {filteredBookings.map((booking) => (
            <div
              key={booking._id}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.2)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Status Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={getStatusBadge(booking.status)}>{booking.status}</span>
                <span style={{ fontSize: "12px", color: "#999" }}>ID: {booking._id.slice(-6)}</span>
              </div>

              {/* Booking Details */}
              <div style={{ display: "grid", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "18px" }}>👤</span>
                  <div>
                    <div style={{ fontWeight: "600", color: "#333" }}>{booking.firstname} {booking.lastname}</div>
                    <div style={{ fontSize: "14px", color: "#666" }}>{booking.email}</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "18px" }}>📞</span>
                  <div style={{ color: "#333" }}>{booking.phone}</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "18px" }}>📅</span>
                  <div style={{ color: "#333", fontWeight: "500" }}>{booking.date}</div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "18px" }}>🕐</span>
                  <div style={{ color: "#333", fontWeight: "500" }}>{booking.time}</div>
                </div>
              </div>

              {/* Admin Action Buttons */}
              {userRole === "admin" && booking.status === "Waiting for verification" && (
                <div style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "25px",
                  paddingTop: "20px",
                  borderTop: "1px solid #e1e5e9"
                }}>
                  <button
                    onClick={() => updateStatus(booking._id, "Verified")}
                    style={{
                      flex: "1",
                      padding: "12px",
                      background: "linear-gradient(135deg, #55efc4, #00b894)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                  >
                    ✅ Accept
                  </button>
                  <button
                    onClick={() => updateStatus(booking._id, "Rejected")}
                    style={{
                      flex: "1",
                      padding: "12px",
                      background: "linear-gradient(135deg, #fd79a8, #e84393)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
                    onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
                  >
                    ❌ Decline
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
