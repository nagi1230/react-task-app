// import React, { useState } from "react";

// const PRODUCTS = [
//   { id: 1, name: "Wireless Headphones", price: 2999 },
//   { id: 2, name: "Mechanical Keyboard", price: 4500 },
//   { id: 3, name: "Gaming Mouse", price: 1800 },
//   { id: 4, name: "Desk Mat", price: 799 },
// ];

//  function Ecomerce() {
//   const [cart, setCart] = useState([]);

//   // 1. Add to Cart (with quantity update if already exists)
//   const handleAddToCart = (product) => {
//     setCart((prevCart) => {
//       const isExist = prevCart.find((item) => item.id === product.id);
//       if (isExist) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, qty: 1 }];
//     });
//   };

//   // 2. Quantity Increase / Decrease Handler
//   const handleUpdateQty = (id, delta) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) => {
//           if (item.id === id) {
//             const newQty = item.qty + delta;
//             return newQty > 0 ? { ...item, qty: newQty } : null;
//           }
//           return item;
//         })
//         .filter(Boolean) // Agar qty 0 ho gayi toh remove kar do
//     );
//   };

//   // 3. Derived State: Total Bill Calculation (No extra useState needed)
//   const totalBill = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
//   const totalItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);

//   return (
//     <div style={{ maxWidth: "850px", margin: "30px auto", fontFamily: "sans-serif" }}>
//       <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>Mini Store</h2>

//       {/* Products Grid */}
//       <h3>Products</h3>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
//         {PRODUCTS.map((prod) => (
//           <div
//             key={prod.id}
//             style={{
//               padding: "16px",
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <strong>{prod.name}</strong>
//               <div style={{ color: "#2ecc71", fontWeight: "bold" }}>₹{prod.price}</div>
//             </div>
//             <button
//               onClick={() => handleAddToCart(prod)}
//               style={{
//                 backgroundColor: "#3498db",
//                 color: "#fff",
//                 border: "none",
//                 padding: "8px 14px",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart & Billing Section */}
//       <h3 style={{ marginTop: "40px" }}>Your Cart ({totalItemsCount} items)</h3>
//       {cart.length === 0 ? (
//         <p style={{ color: "#888" }}>Cart is empty.</p>
//       ) : (
//         <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "16px" }}>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 padding: "10px 0",
//                 borderBottom: "1px solid #f2f2f2",
//               }}
//             >
//               <div>
//                 <strong>{item.name}</strong>
//                 <div style={{ fontSize: "14px", color: "#666" }}>
//                   ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
//                 </div>
//               </div>

//               {/* Quantity Controls */}
//               <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                 <button
//                   onClick={() => handleUpdateQty(item.id, -1)}
//                   style={{ width: "30px", height: "30px", cursor: "pointer" }}
//                 >
//                   -
//                 </button>
//                 <span style={{ fontWeight: "bold", minWidth: "20px", textAlign: "center" }}>
//                   {item.qty}
//                 </span>
//                 <button
//                   onClick={() => handleUpdateQty(item.id, 1)}
//                   style={{ width: "30px", height: "30px", cursor: "pointer" }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Final Billing */}
//           <div
//             style={{
//               marginTop: "16px",
//               display: "flex",
//               justifyContent: "space-between",
//               fontSize: "18px",
//               fontWeight: "bold",
//             }}
//           >
//             <span>Total Amount:</span>
//             <span style={{ color: "#27ae60" }}>₹{totalBill}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Ecomerce

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart, updateQty } from "../Utilities/Slices/cartSlice.slice";

// const PRODUCTS = [
//   { id: 1, name: "Wireless Headphones", price: 2999 },
//   { id: 2, name: "Mechanical Keyboard", price: 4500 },
//   { id: 3, name: "Gaming Mouse", price: 1800 },
//   { id: 4, name: "Desk Mat", price: 799 },
// ];

//  function Ecomerce() {
//   const dispatch = useDispatch();
//   // Store agar combineReducers mein 'user' key par mapped hai toh state.user.cart
//   const cart = useSelector((state) => state.user?.cart || []);

//   const totalBill = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
//   const totalItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);

//   return (
//     <div style={{ maxWidth: "850px", margin: "30px auto", fontFamily: "sans-serif" }}>
//       <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>Mini Store</h2>

//       {/* Products Grid */}
//       <h3>Products</h3>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
//         {PRODUCTS.map((prod) => (
//           <div
//             key={prod.id}
//             style={{
//               padding: "16px",
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <strong>{prod.name}</strong>
//               <div style={{ color: "#2ecc71", fontWeight: "bold" }}>₹{prod.price}</div>
//             </div>
//             <button
//               onClick={() => dispatch(addToCart(prod))}
//               style={{
//                 backgroundColor: "#3498db",
//                 color: "#fff",
//                 border: "none",
//                 padding: "8px 14px",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart & Billing Section */}
//       <h3 style={{ marginTop: "40px" }}>Your Cart ({totalItemsCount} items)</h3>
//       {cart.length === 0 ? (
//         <p style={{ color: "#888" }}>Cart is empty.</p>
//       ) : (
//         <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "16px" }}>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 padding: "10px 0",
//                 borderBottom: "1px solid #f2f2f2",
//               }}
//             >
//               <div>
//                 <strong>{item.name}</strong>
//                 <div style={{ fontSize: "14px", color: "#666" }}>
//                   ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
//                 </div>
//               </div>

//               {/* Quantity Controls */}
//               <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//                 <button
//                   onClick={() => dispatch(updateQty({ id: item.id, delta: -1 }))}
//                   style={{ width: "30px", height: "30px", cursor: "pointer" }}
//                 >
//                   -
//                 </button>
//                 <span style={{ fontWeight: "bold", minWidth: "20px", textAlign: "center" }}>
//                   {item.qty}
//                 </span>
//                 <button
//                   onClick={() => dispatch(updateQty({ id: item.id, delta: 1 }))}
//                   style={{ width: "30px", height: "30px", cursor: "pointer" }}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Final Billing */}
//           <div
//             style={{
//               marginTop: "16px",
//               display: "flex",
//               justifyContent: "space-between",
//               fontSize: "18px",
//               fontWeight: "bold",
//             }}
//           >
//             <span>Total Amount:</span>
//             <span style={{ color: "#27ae60" }}>₹{totalBill}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Ecomerce

// Task: Multi-Field Form with Live Validation & Error Handling

// import React, { useEffect, useState } from "react";

// export default function RegisterForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     agreeTerms: false,
//   });

//   // Page load par errors khali rahenge
//   const [errors, setErrors] = useState({});

// const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === "checkbox" ? checked : value;

//     // 1. Data update karo
//     setFormData((prev) => ({
//       ...prev,
//       [name]: fieldValue,
//     }));

//     // 2. LIVE VALIDATION: Jaise hi change ho, turant check karo ki kya yeh field abhi bhi invalid hai?
//     setErrors((prevErrors) => {
//       const updatedErrors = { ...prevErrors };

//       // Name validation check
//       if (name === "name") {
//         if (!fieldValue.trim()) {
//           updatedErrors.name = "Name is required.";
//         } else if (fieldValue.trim().length < 3) {
//           updatedErrors.name = "At least 3 characters are required.";
//         } else {
//           delete updatedErrors.name; // agar sahi ho gaya toh error hata do
//         }
//       }

//       // Email validation check
//       if (name === "email") {
//         if (!fieldValue.trim()) {
//           updatedErrors.email = "Email is required.";
//         } else if (!fieldValue.includes("@") || !fieldValue.includes(".")) {
//           updatedErrors.email = "Please enter a valid email.";
//         } else {
//           delete updatedErrors.email;
//         }
//       }

//       // Password validation check
//       if (name === "password") {
//         if (!fieldValue.trim()) {
//           updatedErrors.password = "Password is required.";
//         } else if (fieldValue.trim().length < 6) {
//           updatedErrors.password = "Password must be at least 6 characters.";
//         } else {
//           delete updatedErrors.password;
//         }
//       }

//       // Checkbox validation check
//       if (name === "agreeTerms") {
//         if (!checked) {
//           updatedErrors.agreeTerms = "You must accept the terms.";
//         } else {
//           delete updatedErrors.agreeTerms;
//         }
//       }

//       return updatedErrors;
//     });
//   };

//   // 2. Validation function.

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required.";
//     } else if (formData.name.trim().length < 3) {
//       newErrors.name = "At least 3 characters are required.";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
//       newErrors.email = "Please enter a valid email.";
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required.";
//     } else if (formData.password.trim().length < 6) {
//       newErrors.password = "Password must be at least 6 characters.";
//     }

//     if (!formData.agreeTerms) {
//       newErrors.agreeTerms = "You must accept the terms.";
//     }

//     return newErrors;
//   };

//   // 3. Submit Handler: Button click par hi errors dikhenge
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     // Sab theek hone par
//     setErrors({});
//     alert("Form Successfully Submitted!");
//     console.log("Submitted Data:", formData);

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       agreeTerms: false,
//     });
//   };

//   return (
//     <div style={styles.wrapper}>
//       <form style={styles.card} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>Create Account</h2>

//         {/* 1. Full Name */}
//         <div style={styles.fieldGroup}>
//           <label style={styles.label}>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             style={styles.input}
//           />
//           { <span style={styles.error}>{errors.name}</span>}
//         </div>

//         {/* 2. Email */}
//         <div style={styles.fieldGroup}>
//           <label style={styles.label}>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="name@example.com"
//             style={styles.input}
//           />
//           {errors.email && <span style={styles.error}>{errors.email}</span>}
//         </div>

//         {/* 3. Password */}
//         <div style={styles.fieldGroup}>
//           <label style={styles.label}>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="At least 6 characters"
//             style={styles.input}
//           />
//           {errors.password && <span style={styles.error}>{errors.password}</span>}
//         </div>

//         {/* 4. Terms Checkbox */}
//         <div style={styles.checkboxContainer}>
//           <input
//             type="checkbox"
//             name="agreeTerms"
//             id="terms"
//             checked={formData.agreeTerms}
//             onChange={handleChange}
//             style={styles.checkbox}
//           />
//           <label htmlFor="terms" style={styles.checkboxLabel}>
//             I agree to the Terms & Conditions
//           </label>
//         </div>
//         {errors.agreeTerms && <span style={styles.error}>{errors.agreeTerms}</span>}

//         {/* Submit Button */}
//         <button type="submit" style={styles.button}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f3f4f6",
//     fontFamily: "system-ui, -apple-system, sans-serif",
//     padding: "20px",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "32px",
//     borderRadius: "12px",
//     width: "100%",
//     maxWidth: "420px",
//     boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
//   },
//   title: {
//     margin: "0 0 24px 0",
//     color: "#111827",
//     fontSize: "22px",
//     fontWeight: "600",
//   },
//   fieldGroup: {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: "16px",
//   },
//   label: {
//     fontSize: "13px",
//     fontWeight: "600",
//     color: "#374151",
//     marginBottom: "6px",
//   },
//   input: {
//     padding: "10px 14px",
//     borderRadius: "6px",
//     border: "1px solid #d1d5db",
//     fontSize: "14px",
//     outline: "none",
//   },
//   checkboxContainer: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     marginTop: "4px",
//     marginBottom: "4px",
//   },
//   checkbox: {
//     width: "16px",
//     height: "16px",
//     cursor: "pointer",
//   },
//   checkboxLabel: {
//     fontSize: "13px",
//     color: "#4b5563",
//     cursor: "pointer",
//   },
//   error: {
//     color: "#dc2626",
//     fontSize: "12px",
//     marginTop: "4px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: "#2563eb",
//     color: "#ffffff",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "15px",
//     fontWeight: "600",
//     cursor: "pointer",
//     marginTop: "16px",
//   },
// };

// Model

// import React, { useState, useEffect, useRef } from "react";

// export default function ModalLayout() {
//   const [model, setModel] = useState(false);
//   const ref = useRef()

//   // useEffect(() => {
//     //  this will work when user tab on esc keyboard top right on the laptop keyboard even we can add it with below usefect
//   //   if (!model) return;

//   //   const handleKeyDown = (e) => {
//   //     if (e.key === "Escape") setModel(false);
//   //   };

//   //   window.addEventListener("keydown", handleKeyDown);
//   //   document.body.style.overflow = "hidden";

//   //   return () => {
//   //     window.removeEventListener("keydown", handleKeyDown);
//   //     document.body.style.overflow = "unset";
//   //   };
//   // }, [model]);

//   // useEffect(() => {
//     //  work when we click outsider of the modal body.
//   //   function handleOutsideClick(event) {
//   //       if (model && ref.current && !ref.current.contains(event.target)) {
//   //       setModel(false);
//   //     }
//   //   }
//   //   document.addEventListener("mousedown", handleOutsideClick);
//   //   return () =>{
//   //     document.removeEventListener("mousedown", handleOutsideClick)
//   //   };
//   // }, [model]); // dependency mein [model] hona zaroori hai

//   return (
//     <div>
//       <div style={styles.page}>
//         {/* 1. Trigger Button */}
//         <button onClick={() => setModel(true)} style={styles.openBtn}>
//           Open Modal
//         </button>

//         {model ? (
//           <div style={styles.overlay}
//            onClick={() => setModel(false)}
//            >
//             <div ref={ref} style={styles.modalCard}
//              onClick={(e) => e.stopPropagation()}
//              >
//               {/* Header */}
//               <div style={styles.header}>
//                 <h3 style={styles.title}>Confirm Action</h3>
//                 <button
//                   onClick={() => setModel(false)}
//                   style={styles.closeIconBtn}
//                 >
//                   &times;
//                 </button>
//               </div>

//               <div style={styles.body}>
//                 <p style={styles.text}>
//                   Kya aap sure hain ki is action ko aage proceed karna chahte
//                   hain? Yeh backdrop click ya ESC dabane par band ho sakta hai.
//                 </p>
//               </div>
//               <div style={styles.footer}>
//                 <button
//                   onClick={() => setModel(false)}
//                   style={styles.cancelBtn}
//                 >
//                   Cancel
//                 </button>
//                 <button style={styles.confirmBtn}>Confirm</button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f4f5f7",
//     fontFamily: "system-ui, -apple-system, sans-serif",
//   },
//   openBtn: {
//     padding: "12px 24px",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "15px",
//     fontWeight: "600",
//     cursor: "pointer",
//   },
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.55)",
//     backdropFilter: "blur(4px)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1000,
//     padding: "16px",
//     boxSizing: "border-box",
//   },
//   modalCard: {
//     width: "100%",
//     maxWidth: "460px",
//     backgroundColor: "#ffffff",
//     borderRadius: "12px",
//     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
//     overflow: "hidden",
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "16px 20px",
//     borderBottom: "1px solid #e5e7eb",
//   },
//   title: {
//     margin: 0,
//     fontSize: "18px",
//     fontWeight: "600",
//     color: "#111827",
//   },
//   closeIconBtn: {
//     background: "none",
//     border: "none",
//     fontSize: "24px",
//     lineHeight: "1",
//     color: "#6b7280",
//     cursor: "pointer",
//     padding: "4px 8px",
//   },
//   body: {
//     padding: "20px",
//   },
//   text: {
//     margin: 0,
//     fontSize: "14px",
//     color: "#4b5563",
//     lineHeight: "1.6",
//   },
//   footer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     gap: "10px",
//     padding: "14px 20px",
//     backgroundColor: "#f9fafb",
//     borderTop: "1px solid #e5e7eb",
//   },
//   cancelBtn: {
//     padding: "8px 16px",
//     backgroundColor: "#ffffff",
//     border: "1px solid #d1d5db",
//     borderRadius: "6px",
//     fontSize: "14px",
//     fontWeight: "500",
//     color: "#374151",
//     cursor: "pointer",
//   },
//   confirmBtn: {
//     padding: "8px 16px",
//     backgroundColor: "#2563eb",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "14px",
//     fontWeight: "600",
//     color: "#ffffff",
//     cursor: "pointer",
//   },
// };

// Custom Accordion / Collapsible FAQ Component.

// import React, { useState } from "react";

// const faqData = [
//   { id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
//   { id: 2, question: "What is State in React?", answer: "State is an object that holds information that may change over the lifecycle of the component." },
//   { id: 3, question: "What is Event Bubbling?", answer: "Event bubbling is when an event triggers on a child element and propagates up the DOM tree." },
// ];

// export default function Accordion() {
//   // Sirf open item ki ID rakho (shuru mein null yani sab band);
//   const [openId, setOpenId] = useState([{
//     id:null
//   }]);

//   const handleToggle = (id) => {
//     setOpenId((prev) => {
//       const exists = prev.some((item) => item.id === id);

//       if (exists) {
//         return prev.filter((item) => item.id !== id);
//       }

//       return [...prev, { id }];
//     });
//   };

//   const handleOpenAllFields = (checkedVal,itemList) =>{
//     const updatedArr = itemList?.map((item,index)=> {
//        return{
//         id:item.id
//        }
//     })
//     if(checkedVal){
//       setOpenId(updatedArr)

//     }else{
//       setOpenId([])
//     }
//    console.log(updatedArr,"updatedArr")
//   }

//   console.log(openId,"openId")
//   return (
//     <div style={styles.container}>

//       <h2 style={styles.title}>Frequently Asked Questions</h2>

//       <div style={styles.accordionBox}>
//         {faqData.map((item) => {
//           const isOpen = openId?.find((list)=>list.id === item.id )
//           // const isOpen = openId === item.id || openId === true;
//           console.log(isOpen,"isOpen")

//           return (
//             <div key={item.id} style={styles.item}>
//               {/* Clickable Header */}
//               <div style={styles.header} onClick={() => handleToggle(item.id)}>
//                 <span style={styles.question}>{item.question}</span>
//                 {/* Icon bhi change ho: + ya - */}
//                 <span style={styles.icon}>{isOpen ? "−" : "+"}</span>
//               </div>

//               {/* Collapsible Answer */}
//               {isOpen && (
//                 <div style={styles.body}>
//                   <p style={styles.answer}>{item.answer}</p>
//                 </div>
//               )}
//             </div>

//           );
//         })}
//     <div className="div"><input type="checkbox" onChange={(e)=>handleOpenAllFields(e.target.checked,faqData)} /></div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     paddingTop: "60px",
//     fontFamily: "system-ui, sans-serif",
//   },
//   title: {
//     marginBottom: "24px",
//     color: "#111827",
//   },
//   accordionBox: {
//     width: "100%",
//     maxWidth: "500px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     overflow: "hidden",
//   },
//   item: {
//     borderBottom: "1px solid #e5e7eb",
//   },
//   header: {
//     padding: "16px 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     cursor: "pointer",
//     backgroundColor: "#fff",
//   },
//   question: {
//     fontSize: "15px",
//     fontWeight: "600",
//     color: "#1f2937",
//   },
//   icon: {
//     fontSize: "18px",
//     fontWeight: "bold",
//     color: "#6b7280",
//   },
//   body: {
//     padding: "0 20px 16px 20px",
//   },
//   answer: {
//     margin: 0,
//     fontSize: "14px",
//     color: "#4b5563",
//     lineHeight: "1.5",
//   },
// };

//  custom search;

// import React, { useState } from "react";

// const initialUsers = [
//   { id: 1, name: "Aman Sharma", role: "Frontend Developer", department: "IT" },
//   { id: 2, name: "Simran Kaur", role: "UI/UX Designer", department: "Design" },
//   { id: 3, name: "Rahul Verma", role: "Backend Engineer", department: "IT" },
//   {
//     id: 4,
//     name: "Priya Patel",
//     role: "Product Manager",
//     department: "Product",
//   },
//   {
//     id: 5,
//     name: "Harpreet Singh",
//     role: "DevOps Engineer",
//     department: "Operations",
//   },
// ];

// export default function SearchFilter() {

//   const [query, setQuery] = useState("");

//   const searchQery =( query || "").toLowerCase().trim();

//   const findoutUser = initialUsers.filter((user) => {
//     // Extract and lowercase the fields safely using Optional Chaining (?.)
//     const userName = user?.name?.toLowerCase();
//     const userRole = user?.role?.toLowerCase();
//     const userId = String(user?.id);

//     // Return true if the query matches the name OR the role
//     return userName.includes(searchQery) || userRole.includes(searchQery) || userId.includes(searchQery);
//   });

//   console.log(findoutUser, "findoutUser");

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Team Directory</h2>

//         {/* Controlled Search Input */}
//         <input
//           type="text"
//           placeholder="Search by name or role..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={styles.input}
//         />

//         {/* Filtered List */}
//         <div  style={styles.list}>
//         {
//           query?.length > 0?
//           findoutUser?.map((item)=>
//             <div style={styles.userCard}>
//               <div style={styles.userName}>{item.name}</div>
//               <div style={styles.userRole}>{item.role}</div>

//                </div>
//           ):""
//         }
//         </div>

//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     display: "flex",
//     justifyContent: "center",
//     paddingTop: "50px",
//     fontFamily: "system-ui, sans-serif",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "480px",
//     backgroundColor: "#fff",
//     padding: "24px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
//     height: "fit-content",
//   },
//   title: {
//     margin: "0 0 16px 0",
//     fontSize: "20px",
//     color: "#111827",
//   },
//   input: {
//     width: "100%",
//     padding: "10px 14px",
//     fontSize: "14px",
//     borderRadius: "8px",
//     border: "1px solid #d1d5db",
//     boxSizing: "border-box",
//     outline: "none",
//     marginBottom: "16px",
//   },
//   list: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   userCard: {
//     padding: "12px 16px",
//     borderRadius: "8px",
//     border: "1px solid #e5e7eb",
//     backgroundColor: "#f9fafb",
//   },
//   userName: {
//     fontSize: "15px",
//     fontWeight: "600",
//     color: "#1f2937",
//     margin: 0,
//   },
//   userRole: {
//     fontSize: "13px",
//     color: "#6b7280",
//     margin: "4px 0 0 0",
//   },
//   noResults: {
//     textAlign: "center",
//     color: "#9ca3af",
//     fontSize: "14px",
//     padding: "20px 0",
//   },
// };

// Star Rating

// import React, { useState } from "react";

// export default function StarRating({ totalStars = 5 }) {
//   // 1. Permanently selected rating track karne ke liye
//   const [rating, setRating] = useState(0);

//   // 2. Hover preview track karne ke liye
//   const [hover, setHover] = useState(0);

//   const saveStarRating = (saveRating) =>{
//     setRating(saveRating);
//   }
// console.log(rating,"rating")
//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h3 style={styles.title}>Rate Your Experience</h3>

//         <div style={styles.starsWrapper}>
//           {[...Array(totalStars)].map((_, index) => {
//             const starValue = index + 1;

//             // TODO: check karo ki star gold hona chahiye ya gray
//             // Hint: (hover || rating) >= starValue

//             return (
//               <span
//                 key={starValue}
//                 starValue={starValue}
//                 style={(hover || rating) >= starValue ? styles.color : styles.star}
//                 onMouseEnter={()=>setHover(starValue)}
//                 onMouseLeave={() => setHover(0)}
//                 onClick={()=>saveStarRating(starValue)}
//               >
//                 ★
//               </span>
//             );
//           })}
//         </div>

//         {/* Live Feedback */}
//         <p style={styles.feedback}>
//           {rating > 0 ? `You rated: ${rating} / ${totalStars}` : "Select a rating"}
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "system-ui, sans-serif",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "32px 40px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//     textAlign: "center",
//   },
//   title: {
//     margin: "0 0 20px 0",
//     color: "#111827",
//     fontSize: "18px",
//   },
//   starsWrapper: {
//     display: "flex",
//     gap: "8px",
//     justifyContent: "center",
//   },
//   star: {
//     fontSize: "36px",
//     cursor: "pointer",
//     transition: "color 0.15s ease",
//     userSelect: "none",
//   },
//   color: {
//    color:"yellow",
//    fontSize: "36px",
//    cursor: "pointer",
//    transition: "color 0.15s ease",
//    userSelect: "none",
//   },
//   feedback: {
//     marginTop: "16px",
//     fontSize: "14px",
//     fontWeight: "500",
//     color: "#4b5563",
//   },
// };

// Multi stepp form

// import React, { useState } from "react";

// export default function FormWizard() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     city: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     city: "",
//     phone: "",
//   });

//   const handleValidate = () => {
//     const newError = {};

//     if (!formData.name.trim()) {
//       newError.name = "Name is Required";
//     }

//     if (!formData.email.trim()) {
//       newError.email = "Email is Required";
//     }

//     if (!formData.city.trim()) {
//       newError.city = "City is Required";
//     }

//     if (!formData.phone.trim()) {
//       newError.phone = "Phone is Required";
//     }

//     return newError;
//   };

//   const handleChange = (e) => {
//     const { value } = e.target;
//     const FieldName = e.target.name;
//     const fielVal = value;

//     setFormData((prev) => ({
//       ...prev,
//       [FieldName]: value,
//     }));

//     setErrors((prevErrors) => {
//       const updatedErrors = { ...prevErrors };
//       if (FieldName == "name") {
//         if (!fielVal?.trim()) {
//           updatedErrors.name = "Name is Require";
//         } else if (fielVal?.trim().length < 3) {
//           updatedErrors.name = "At least 3 characters are required";
//         } else {
//           delete updatedErrors.name;
//         }
//       }

//       if (FieldName == "email") {
//         if (!fielVal?.trim()) {
//           updatedErrors.email = "Email is Require";
//         } else if (!fielVal.includes("@") || !fielVal.includes(".")) {
//           updatedErrors.email = "Enter valid email";
//         } else {
//           delete updatedErrors.email;
//         }
//       }

//       if (FieldName == "city") {
//         if (!fielVal?.trim()) {
//           updatedErrors.city = "City is Require";
//         } else {
//           delete updatedErrors.city;
//         }
//       }

//       if (FieldName == "phone") {
//         if (!fielVal?.trim()) {
//           updatedErrors.phone = "Phone is Require";
//         }
//         //  else if (fielVal?.trim().length < 10 && fielVal?.trim() == Number(fielVal) ) {
//         //   updatedErrors.phone = "Enter Valid number";
//         // }
//         if (FieldName == "phone") {
//           if (!fielVal?.trim()) {
//             updatedErrors.phone = "Phone is Require";
//           } else if (
//             fielVal.trim().length < 10 ||
//             Number(fielVal.trim()).toString() !== fielVal.trim()
//           ) {
//             updatedErrors.phone = "Enter Valid number";
//           } else {
//             delete updatedErrors.phone;
//           }
//         }
//         else {
//           delete updatedErrors.phone;
//         }
//       }

//       return updatedErrors;
//     });
//     // console.log(event,"event");
//   };

//   const handleNext = () => {
//     // const checkErroVal =
//     if (step < 3) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   const handleSubmit = () => {

//     const checkeValidationv = handleValidate();
//     if (Object.keys(checkeValidationv).length > 0) {
//       setErrors(checkeValidationv);
//       return;
//     }
//     alert("Form Submitted Successfully!\n" + JSON.stringify(formData, null, 2));

//   };

//   console.log(errors, "error");

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         {/* Step Indicator (1 - 2 - 3) */}
//         <div style={styles.stepper}>
//           <div style={step >= 1 ? styles.activeBadge : styles.badge}>1</div>
//           <div style={styles.line}></div>
//           <div style={step >= 2 ? styles.activeBadge : styles.badge}>2</div>
//           <div style={styles.line}></div>
//           <div style={step >= 3 ? styles.activeBadge : styles.badge}>3</div>
//         </div>

//         {/* Step 1: Personal Info */}
//         {step === 1 && (
//           <div>
//             <h3 style={styles.stepTitle}>Step 1: Personal Info</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               style={styles.input}
//             />
//             {errors.name && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 {errors.name}
//               </span>
//             )}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               style={styles.input}
//             />
//             {errors.email && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 {errors.email}
//               </span>
//             )}
//           </div>
//         )}

//         {/* Step 2: Contact Info */}
//         {step === 2 && (
//           <div>
//             <h3 style={styles.stepTitle}>Step 2: Contact Info</h3>
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={formData.city}
//               onChange={handleChange}
//               style={styles.input}

//             />
//                  {errors.city && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 {errors.city}
//               </span>
//             )}
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               style={styles.input}
//             />
//                  {errors.phone && (
//               <span style={{ color: "red", fontSize: "12px" }}>
//                 {errors.phone}
//               </span>
//             )}
//           </div>
//         )}

//         {/* Step 3: Review & Confirmation */}

//         {step === 3 && (
//           <div>
//             <h3 style={styles.stepTitle}>Step 3: Review Details</h3>
//             <div style={styles.summaryBox}>
//               <p>
//                 <strong>Name:</strong> {formData.name || "N/A"}
//               </p>
//               <p>
//                 <strong>Email:</strong> {formData.email || "N/A"}
//               </p>
//               <p>
//                 <strong>City:</strong> {formData.city || "N/A"}
//               </p>
//               <p>
//                 <strong>Phone:</strong> {formData.phone || "N/A"}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div style={styles.btnRow}>
//           {step > 1 && (
//             <button onClick={handleBack} style={styles.backBtn}>
//               Back
//             </button>
//           )}

//           {/* {step < 3 ? (
//             <button onClick={handleNext} style={styles.nextBtn}>
//               Next
//             </button>
//           ) : ( */}
//           <button onClick={handleSubmit} style={styles.submitBtn}>
//             Submit
//           </button>
//           {/* )}   */}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "system-ui, sans-serif",
//   },
//   card: {
//     backgroundColor: "#fff",
//     width: "100%",
//     maxWidth: "440px",
//     padding: "30px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//   },
//   stepper: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "24px",
//     gap: "10px",
//   },
//   badge: {
//     width: "32px",
//     height: "32px",
//     borderRadius: "50%",
//     backgroundColor: "#e5e7eb",
//     color: "#6b7280",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "bold",
//     fontSize: "14px",
//   },
//   activeBadge: {
//     width: "32px",
//     height: "32px",
//     borderRadius: "50%",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontWeight: "bold",
//     fontSize: "14px",
//   },
//   line: {
//     flex: 1,
//     height: "2px",
//     backgroundColor: "#e5e7eb",
//   },
//   stepTitle: {
//     margin: "0 0 16px 0",
//     color: "#111827",
//     fontSize: "16px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px 14px",
//     marginBottom: "12px",
//     border: "1px solid #d1d5db",
//     borderRadius: "6px",
//     boxSizing: "border-box",
//     fontSize: "14px",
//     outline: "none",
//   },
//   summaryBox: {
//     backgroundColor: "#f9fafb",
//     padding: "14px",
//     borderRadius: "8px",
//     border: "1px solid #e5e7eb",
//     fontSize: "14px",
//     lineHeight: "1.8",
//   },
//   btnRow: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "20px",
//   },
//   backBtn: {
//     padding: "9px 18px",
//     border: "1px solid #d1d5db",
//     backgroundColor: "#fff",
//     color: "#374151",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "500",
//   },
//   nextBtn: {
//     padding: "9px 18px",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "600",
//     marginLeft: "auto",
//   },
//   submitBtn: {
//     padding: "9px 18px",
//     backgroundColor: "#16a34a",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "600",
//     marginLeft: "auto",
//   },
// };

//  Custom toast

// import React, {useState } from "react";

// export default function ToastContainer() {
//   const [toasts, setToasts] = useState([]);


//   const addToast = (type, message) => {
//     const id = Date.now();
//     setToasts((prevArr) => [
//       ...prevArr,
//       {
//         type,
//         message,
//         id,
//       },
//     ]);
  
//     setTimeout(() => {
//       setToasts((prevArr) =>
//         prevArr.filter((item) => item.id !== id)
//       );
//     }, 5000);
//   };

//   const handleSucces = () => {
//     addToast("success", "Success");
//   };
  
//   const handleError = () => {
//     addToast("error", "Error");
//   };
  
//   const handleInfo = () => {
//     addToast("info", "Information");
//   };
  
 

//   const handleDeleteToaat = (toastId, type) => {

//     if (type === "success") {
//       setToasts((prevArr) => prevArr.filter((item) => item.id !== toastId ));
//     }

//     if (type === "error") {
//       setToasts((prevArr) => prevArr.filter((item) => item.id !== toastId));
//     }

//     if (type === "info") {
//       setToasts((prevArr) => prevArr.filter((item) => item.id !== toastId));
//     }
//   };

 
//   return (
//     <div style={styles.container}>
//       <div style={styles.controls}>
//         <h3>Trigger Notifications</h3>
//         <div style={styles.btnRow}>
//           <button style={styles.successBtn} onClick={handleSucces}>
//             Add Success
//           </button>
//           <button style={styles.errorBtn} onClick={handleError}>
//             Add Error
//           </button>
//           <button style={styles.infoBtn} onClick={handleInfo}>
//             Add Info
//           </button>
//         </div>
//       </div>

//       {/* Floating Toasts Wrapper */}
//       <div style={styles.toastWrapper}>
//         {toasts.map((toast, index) => (
//           <div
//             key={toast.id}
//             style={{
//               ...styles.toast,
//               borderLeft:
//                 toast.type === "success"
//                   ? "4px solid #16a34a"
//                   : toast.type === "error"
//                     ? "4px solid #dc2626"
//                     : "4px solid #2563eb",
//             }}
//           >
//             <span>{toast.message}</span>
//             <button
//               onClick={() => handleDeleteToaat(toast.id, toast.type)}
//               style={styles.closeBtn}
//             >
//               &times;
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "system-ui, sans-serif",
//   },
//   controls: {
//     backgroundColor: "#fff",
//     padding: "24px 32px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//     textAlign: "center",
//   },
//   btnRow: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "16px",
//   },
//   successBtn: {
//     padding: "10px 16px",
//     backgroundColor: "#16a34a",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   errorBtn: {
//     padding: "10px 16px",
//     backgroundColor: "#dc2626",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   infoBtn: {
//     padding: "10px 16px",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
//   toastWrapper: {
//     position: "fixed",
//     top: "20px",
//     right: "20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     zIndex: 9999,
//   },
//   toast: {
//     minWidth: "260px",
//     backgroundColor: "#fff",
//     color: "#1f2937",
//     padding: "12px 16px",
//     borderRadius: "8px",
//     boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     fontSize: "14px",
//   },
//   closeBtn: {
//     background: "none",
//     border: "none",
//     fontSize: "18px",
//     cursor: "pointer",
//     color: "#9ca3af",
//     marginLeft: "12px",
//   },
// };



//  Infine mode or pagination

// import React, { useState, useEffect } from "react";

// export default function InfiniteScrollFeed() {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [error, setError] = useState(null);

//   // TODO: Fetch function banao jo page change hone par call ho
//   // Logic:
//   // 1. setLoading(true)
//   // 2. fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
//   // 3. Agar response empty ho toh setHasMore(false)
//   // 4. Warna setPosts((prev) => [...prev, ...newPosts])
//   // 5. setLoading(false)
   
//   const handleFetch = async() =>{
//     try {
//       setLoading(true);
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
//       const newResponse = await response.json();
//       setPosts((prevPosts)=>[...prevPosts, ...newResponse]);
//       if (newResponse.length < 5 || newResponse.length >= 100) {
//            setHasMore(false)
//       }

//     } catch (error) {
//       setError(error)

//     }finally{
//       setLoading(false);
//     }
//   }
  
//   useEffect(()=>{
//     handleFetch();
//   },[page]);
 
//    const handleLoadMore = ()=>{
//     setPage((prev) => prev + 1);
//    }

//   return (
//     <div style={styles.container}>
//       <div style={styles.feedWrapper}>
//         <h2 style={styles.title}>Post Feed</h2>

//         {/* Posts List */}
//         <div style={styles.list}>
//           {posts.map((post) => (
//             <div key={post.id} style={styles.card}>
//               <span style={styles.badge}>#{post.id}</span>
//               <h3 style={styles.postTitle}>{post.title}</h3>
//               <p style={styles.postBody}>{post.body}</p>
//             </div>
//           ))}
//         </div>

//         {/* Error message */}
//         {error && <p style={styles.errorText}>{error}</p>}

//         {/* Load More Controller */}
//         <div style={styles.footer}>
//           {hasMore ? (
//             <button
//               // onClick={() => setPage((prev) => prev + 1)}
//                 onClick={handleLoadMore}
//               disabled={loading}
//               style={{
//                 ...styles.loadBtn,
//                 opacity: loading ? 0.6 : 1,
//                 cursor: loading ? "not-allowed" : "pointer",
//               }}
//             >
//               {loading ? "Loading more..." : "Load More Posts"}
//             </button>
//           ) : (
//             <p style={styles.endText}>You have reached the end of the feed.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     padding: "40px 20px",
//     display: "flex",
//     justifyContent: "center",
//     fontFamily: "system-ui, sans-serif",
//   },
//   feedWrapper: {
//     width: "100%",
//     maxWidth: "600px",
//   },
//   title: {
//     marginBottom: "20px",
//     color: "#111827",
//     fontSize: "22px",
//   },
//   list: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
//     border: "1px solid #e5e7eb",
//   },
//   badge: {
//     display: "inline-block",
//     fontSize: "12px",
//     fontWeight: "bold",
//     color: "#2563eb",
//     backgroundColor: "#eff6ff",
//     padding: "2px 8px",
//     borderRadius: "4px",
//     marginBottom: "8px",
//   },
//   postTitle: {
//     margin: "0 0 8px 0",
//     fontSize: "16px",
//     color: "#1f2937",
//     textTransform: "capitalize",
//   },
//   postBody: {
//     margin: 0,
//     fontSize: "14px",
//     color: "#4b5563",
//     lineHeight: "1.5",
//   },
//   footer: {
//     marginTop: "24px",
//     textAlign: "center",
//   },
//   loadBtn: {
//     padding: "12px 24px",
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "14px",
//     fontWeight: "600",
//   },
//   endText: {
//     color: "#9ca3af",
//     fontSize: "14px",
//   },
//   errorText: {
//     color: "#dc2626",
//     fontSize: "14px",
//     textAlign: "center",
//   },
// };


// import React, { useState } from "react";

// const initialTasks = [
//   { id: "1", title: "Complete System Design Document" },
//   { id: "2", title: "Fix Modal Event Bubbling Bug" },
//   { id: "3", title: "Review Pull Requests" },
//   { id: "4", title: "Setup CI/CD Pipeline" },
// ];

// export default function DragDropList() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   // 1. Drag start: index save karo
//   const handleDragStart = (index) => {    
//     setDraggedIndex(index);
//     // console.log(index,"targetIndex")

//   };
//   // 2. Drag over: default behavior roko taaki drop allow ho

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   // 3. Drop: array ko reorder karo
//   const handleDrop = (targetIndex) => {
  
    
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h3 style={styles.title}>Reorderable Task List</h3>
//         <p style={styles.subtitle}>Drag any item to change priority</p>

//         <div style={styles.list}>
//           {tasks.map((task, index) => (
//             <div
//               key={task.id}
//               draggable
//               onDragStart={() => handleDragStart(index)}
//               onDragOver={handleDragOver}
//               onDrop={() => handleDrop(index)}
//               style={{
//                 ...styles.item,
//                 opacity: draggedIndex === index ? 0.5 : 1,
//               }}
//             >
//               <span style={styles.dragHandle}>☰</span>
//               <span style={styles.taskText}>{task.title}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     backgroundColor: "#f4f5f7",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "system-ui, sans-serif",
//   },
//   card: {
//     backgroundColor: "#fff",
//     width: "100%",
//     maxWidth: "460px",
//     padding: "28px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//   },
//   title: {
//     margin: "0 0 6px 0",
//     color: "#111827",
//     fontSize: "18px",
//   },
//   subtitle: {
//     margin: "0 0 20px 0",
//     color: "#6b7280",
//     fontSize: "13px",
//   },
//   list: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   item: {
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     padding: "14px 16px",
//     backgroundColor: "#f9fafb",
//     border: "1px solid #e5e7eb",
//     borderRadius: "8px",
//     cursor: "grab",
//     userSelect: "none",
//     transition: "background-color 0.15s ease",
//   },
//   dragHandle: {
//     color: "#9ca3af",
//     fontSize: "18px",
//   },
//   taskText: {
//     fontSize: "14px",
//     color: "#374151",
//     fontWeight: "500",
//   },
// };


import React, { useState } from "react";

const initialTasks = [
  { id: "1", title: "Complete System Design Document" },
  { id: "2", title: "Fix Modal Event Bubbling Bug" },
  { id: "3", title: "Review Pull Requests" },
  { id: "4", title: "Setup CI/CD Pipeline" },
];

export default function DragDropList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedIndex, setDraggedIndex] = useState(null);

  // 1. Drag start: index save karo
  const handleDragStart = (index) => {    
    setDraggedIndex(index);
  };

  // 2. Drag over: default behavior roko taaki drop allow ho
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // 3. Drop: array ko reorder karo.
  const handleDrop = (targetIndex) => {
    // Edge case: agar sahi index nahi mila ya same jagah drop kiya, to return kar jao.
    if (draggedIndex === null || draggedIndex === targetIndex) return;
    
    // React State rule: Create a shallow copy first (Immutable approach).
    const updatedTasks = [...tasks];

    // Swap the dragged item with the target item using destructuring.

    [updatedTasks[draggedIndex], updatedTasks[targetIndex]] = [
      updatedTasks[targetIndex],
      updatedTasks[draggedIndex],
    ];

    // Update state and clean up the dragged index pointer
    setTasks(updatedTasks);
    setDraggedIndex(null);

  };

  // 4. Drag End: Safely clean up state if user drops outside a valid target.

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>Reorderable Task List</h3>
        <p style={styles.subtitle}>Drag any item to change priority</p>

        <div style={styles.list}>
          {tasks.map((task, index) => (
            <div
              key={task.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd} // Resets opacity smoothly
              style={{
                ...styles.item,
                opacity: draggedIndex === index ? 0.4 : 1,
                border: draggedIndex === index ? "1px dashed #9ca3af" : "1px solid #e5e7eb",
              }}
            >
              <span style={styles.dragHandle}>☰</span>
              <span style={styles.taskText}>{task.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f5f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: "460px",
    padding: "28px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },
  title: {
    margin: "0 0 6px 0",
    color: "#111827",
    fontSize: "18px",
  },
  subtitle: {
    margin: "0 0 20px 0",
    color: "#6b7280",
    fontSize: "13px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    backgroundColor: "#f9fafb",
    borderRadius: "8px",
    cursor: "grab",
    userSelect: "none",
    transition: "background-color 0.15s ease, opacity 0.2s ease",
  },
  dragHandle: {
    color: "#9ca3af",
    fontSize: "18px",
  },
  taskText: {
    fontSize: "14px",
    color: "#374151",
    fontWeight: "500",
  },
};