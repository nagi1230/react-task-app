// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './components/common/Layout/Layout';
// import PublicLayout from './components/common/PublicLayout/PublicLayout';
// import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
// import PublicRoute from './components/common/PublicRoute/PublicRoute';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import RedeemPointsPage from './pages/RedeemPointsPage/RedeemPointsPage';
// import './styles/globals.css';
// import ComingSoonPage from './pages/ComingSoonPage/ComingSoonPage';
// import RedeemContent from './pages/RedeemPointsPage/components/RedeemContent/RedeemContent';
// import Setting from './pages/Settings/Setting';
// import Login from './assets/Components/Login/Login';
// import Pay from './pages/Pay/Pay';
// // Routes Configuration;

// const routes = {

//   public: [
//     { path: '/login', element: <Login />, layout: PublicLayout }
//   ],

//   private: [

//     { path: '/profile', element: <ProfilePage /> },
//     { path: '/redeem', element: <RedeemContent /> },
//     { path: '/redeem-points', element: <RedeemPointsPage /> },
//     { path: '/refer', element: <ComingSoonPage title="Refer Your Friend" /> },
//     { path: '/settings', element: <Setting title="Settings" /> },
//     { path: '/pay', element: <Pay title="Pay" /> }

//   ]

// };

// function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route path="/" element={<Navigate to="/login" replace />} />

//         {/* Public Routes */}
//         {routes.public.map((route) => (
//           <Route
//             key={route.path}
//             path={route.path}
//             element={
//               <PublicRoute>
//                 <route.layout>{route.element}</route.layout>
//               </PublicRoute>
//             }
//           />
//         ))}

//         {/* Private Routes */}
//         {routes.private.map((route) => (
//           <Route
//             key={route.path}
//             path={route.path}
//             element={
//               <PrivateRoute>
//                 <Layout>{route.element}</Layout>
//               </PrivateRoute>
//             }
//           />
//         ))}

//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// // ==============================
// // 1. Custom Hook: useDebounce
// // ==============================

// function useDebounce(value, delay = 500) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     // Timer set karo har keystroke par
//     const timer = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     // Naya letter type hote hi purana timer cancel
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }

// // ==============================
// // 2. Main Search Component
// // ==============================
// export default function SearchDemo() {
//   const [query, setQuery] = useState("");
//   const debouncedQuery = useDebounce(query, 500); // 500ms delay

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Agar input khali ho toh list saaf karo aur fetch mat karo
//     if (!debouncedQuery.trim()) {
//       setProducts([]);
//       setLoading(false);
//       setError(null);
//       return;
//     }

//     const controller = new AbortController();
//     const { signal } = controller;

//     async function fetchProducts() {
//       setLoading(true);
//       setError(null);

//       try {
//         const res = await fetch(
//           `https://dummyjson.com/products/search?q=${encodeURIComponent(debouncedQuery)}`,
//           { signal }
//         );

//         if (!res.ok) {
//           throw new Error("Data fetch karne mein dikkat aayi.");
//         }

//         const data = await res.json();
//         setProducts(data.products || []);
//       } catch (err) {
//         // AbortController ki wajah se trigger hue error ko ignore karo
//         if (err.name !== "AbortError") {
//           setError(err.message || "Kuch galat ho gaya.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();

//     // Cleanup: Nayi query aate hi pichli pending network call cancel
//     return () => {
//       controller.abort();
//     };
//   }, [debouncedQuery]);

//   return (
//     <div
//       style={{
//         maxWidth: "550px",
//         margin: "40px auto",
//         padding: "24px",
//         fontFamily: "Segoe UI, sans-serif",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//         borderRadius: "10px",
//         border: "1px solid #e5e7eb"
//       }}
//     >
//       <h2 style={{ margin: "0 0 16px 0", color: "#111827" }}>Product Live Search</h2>

//       {/* Search Input Box */}
//       <input
//         type="text"
//         placeholder="Type to search (e.g. phone, laptop, shoes)..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "12px",
//           fontSize: "15px",
//           borderRadius: "6px",
//           border: "1px solid #d1d5db",
//           outline: "none",
//           boxSizing: "border-box"
//         }}
//       />

//       {/* 1. Loading State */}
//       {loading && (
//         <p style={{ color: "#2563eb", marginTop: "14px", fontWeight: "500" }}>
//           Searching products...
//         </p>
//       )}

//       {/* 2. Error State */}
//       {error && (
//         <p style={{ color: "#dc2626", marginTop: "14px" }}>
//           ⚠️ {error}
//         </p>
//       )}

//       {/* 3. Empty Result State */}
//       {!loading && !error && debouncedQuery && products.length === 0 && (
//         <p style={{ color: "#6b7280", marginTop: "14px" }}>
//           Koi product nahi mila "{debouncedQuery}" ke liye.
//         </p>
//       )}

//       {/* 4. Data State */}
//       <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
//         {products.map((item) => (
//           <li
//             key={item.id}
//             style={{
//               padding: "12px 8px",
//               borderBottom: "1px solid #f3f4f6",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center"
//             }}
//           >
//             <div>
//               <span style={{ display: "block", fontWeight: "500", color: "#1f2937" }}>
//                 {item.title}
//               </span>
//               <small style={{ color: "#6b7280" }}>{item.category}</small>
//             </div>
//             <span style={{ fontWeight: "600", color: "#059669" }}>
//               ${item.price}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// function App() {
//   const [inputFields, setInputFields] = useState({
//     arr: [''] // store strings instead of numbers
//   });

//   const addInputField = () => {
//     setInputFields((prev) => ({
//       ...prev,
//       arr: [...prev.arr, ''] // add a new empty string
//     }));
//   };

//   const deleteInputField = (indexToDelete) => {
//     if (inputFields.arr.length <= 1) return;

//     setInputFields((prev) => ({
//       ...prev,
//       arr: prev.arr.filter((_, index) => index !== indexToDelete)
//     }));
//   };

//   const searchingField = (e, indexSearch) => {
//     const updatedValue = e.target.value;

//     setInputFields((prev) => ({
//       ...prev,
//       arr: prev.arr.map((item, idx) => (idx === indexSearch ? updatedValue : item))
//     }));
//   };
// console.log(inputFields,"inputFields");

//   return (
//     <div>
//       <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10%' }}>
//         {inputFields.arr.map((item, index) => (
//           <li key={index} style={{ display: 'flex', gap: '10px' }}>
//             <input
//               value={item}
//               onChange={(e) => searchingField(e, index)}
//               type="text"
//               placeholder="Search..."
//             />
//             <button onClick={addInputField} type="button">Add Field</button>
//             <button onClick={() => deleteInputField(index)} type="button">Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from "react";
import DigitalAgency from "./Practice/DigitalAgency/DigitalAgency";
import  Ecomerce from "../src/Practice/Ecomerce"
function App() {
  return (
    <div>
      <Ecomerce />
    </div>
  );
}

export default App;

