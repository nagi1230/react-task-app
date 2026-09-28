import React from 'react';
import './ComingSoonPage.css';
import { Button, Table } from '../../components/ui';

const ComingSoonPage = () => {

    return (

        <main className="main-content-container">
            <div className="content-card">
                
                <h5 className="page-title">Refer Your Friend</h5>
                <a className='refer-your-friend-link' href="https://google.com" target='_blank' rel="noopener noreferrer">Here is your Referral link</a>
                <p className='referral-link-text'>Referral Link  <span className='click-to-copy-text'>(Click to copy)</span></p>
                <p>Refer your friends and get 500 points on every joining</p>

                <div className="referral-item">
                    
                    <div className="referral-header">
                        <h1>My Referrals (10)</h1>
                        <div className='referral-item-content'>
                            <p className='points-text'>Points: 1000:</p>
                            <Button variant="primary" size="small">Collect All</Button>
                        </div>
                    </div>

                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Total Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#01</td>
                                    <td>Albert Flores</td>
                                    <td>816</td>
                                </tr>
                                <tr>
                                    <td>#02</td>
                                    <td>Theresa Webb</td>
                                    <td>647</td>
                                </tr>
                                <tr>
                                    <td>#03</td>
                                    <td>Cameron Williamson</td>
                                    <td>492</td>
                                </tr>
                                <tr>
                                    <td>#04</td>
                                    <td>Brooklyn Simmons</td>
                                    <td>423</td>
                                </tr>
                                <tr>
                                    <td>#05</td>
                                    <td>Annette Black</td>
                                    <td>447</td>
                                </tr>
                                <tr>
                                    <td>#06</td>
                                    <td>Esther Howard</td>
                                    <td>426</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ComingSoonPage;















// progress bar

// import React, { useState } from "react";


// const ComingSoonPage = ({ title = "Coming Soon" }) => {
//     const [count, setCount] = useState(10);

//     const handleStart = () => {
//         if (count < 100) setCount((prev) => prev + 10); // stop at 100%
//     };

//     // Choose color according to progress value
//     const getProgressColor = () => {
//         if (count <= 30) return "#ff4d4f"; // red
//         if (count <= 60) return "#faad14"; // orange
//         if (count <= 90) return "#52c41a"; // green
//         return "#389e0d"; // dark green for 100%
//     };

//     return (
//         <main className="coming-soon-page">
//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: "10px",
//                     height: "100vh",
//                 }}
//             >
//                 <input
//                     type="text"
//                     value={`${count}%`}
//                     readOnly
//                     style={{
//                         border: "2px solid #ccc",
//                         padding: "16px",
//                         borderRadius: "10px",
//                         width: "430px",
//                         color: "black",
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         textAlign: "center",
//                         background: `linear-gradient(
//               to right,
//               ${getProgressColor()} ${count}%, #f0f0f0 ${count}%
//             )`,
//                         transition: "background 0.4s ease",
//                     }} />

//                 <button
//                     onClick={handleStart}
//                     style={{
//                         background: "black",
//                         border: "none",
//                         padding: "16px",
//                         width: "100px",
//                         borderRadius: "10px",
//                         color: "white",
//                         cursor: "pointer",
//                         fontSize: "16px",
//                     }}
//                 >
//                     Start
//                 </button>
//             </div>
//         </main>
//     );
// };

// export default ComingSoonPage;


//  star srating


// import React, { useState } from "react";
// import "./ComingSoonPage.css";
// const StarRating = () => {

//     const [productRating, setProductRating] = useState(0);

//     const handleRating = (value) => {
//         setProductRating(value)
//     }

//     return (
//         <main className="coming-soon-page">

//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: "10px",
//                     marginTop: "50px",
//                 }}
//             >
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <span
//                         key={star}
//                         style={{
//                             fontSize: "40px",
//                             color: productRating >= star ? "yellow" : "#d3d3d3",
//                             cursor: "pointer",
//                             transition: "color 0.3s ease, transform 0.2s ease",
//                         }}
//                         onClick={() => handleRating(star)}
//                     >
//                         {
//                             console.log(productRating >= star, "checl")

//                         }
//                         ★
//                     </span>

//                 ))}
//             </div>
//         </main>
//     );
// };

// export default StarRating;


//  Custom Modal




// import React, { useRef, useEffect, useState } from "react";
// import "./ComingSoonPage.css";

// const CustomModal = () => {
//     const [modal, setModal] = useState(false);
//     const modalRef = useRef(null);

//     const handleCloseModal = () => {
//         setModal(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (modalRef.current && !modalRef.current.contains(event.target)) {
//                 console.log("Clicked outside!");
//                 setModal(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };

//     }, [setModal]);

//     return (
//         <>
//             {
//                 modal ? (
//                     <div
//                         style={{
//                             position: "fixed",
//                             top: 0,
//                             left: 0,
//                             width: "100vw",
//                             height: "100vh",
//                             backgroundColor: "rgba(0, 0, 0, 0.5)",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             zIndex: 1000,
//                         }}
//                     >
//                         <div
//                             ref={modalRef}
//                             style={{
//                                 width: "400px",
//                                 backgroundColor: "#fff",
//                                 borderRadius: "10px",
//                                 padding: "20px",
//                                 boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
//                             }}
//                         >

//                             {/* Modal Header */}

//                             <div
//                                 style={{
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     alignItems: "center",
//                                     marginBottom: "15px",
//                                 }}
//                             >
//                                 <h2 style={{ margin: 0 }}>Modal Title</h2>
//                                 <span
//                                     onClick={handleCloseModal}
//                                     style={{
//                                         cursor: "pointer",
//                                         fontSize: "20px",
//                                         fontWeight: "bold",
//                                     }}
//                                 >
//                                     ×
//                                 </span>
//                             </div>

//                             {/* Modal Body */}
//                             <div style={{ marginBottom: "15px" }}>
//                                 <p>
//                                     This is the content of the modal. You can put text, forms, or
//                                     anything here.
//                                 </p>
//                             </div>

//                             {/* Modal Footer */}
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     justifyContent: "flex-end",
//                                     gap: "10px",
//                                 }}
//                             >
//                                 <button
//                                     onClick={handleCloseModal}
//                                     style={{
//                                         padding: "10px 20px",
//                                         borderRadius: "5px",
//                                         border: "none",
//                                         backgroundColor: "#ccc",
//                                         cursor: "pointer",
//                                     }}
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     style={{
//                                         padding: "10px 20px",
//                                         borderRadius: "5px",
//                                         border: "none",
//                                         backgroundColor: "#007bff",
//                                         color: "#fff",
//                                         cursor: "pointer",
//                                     }}
//                                 >
//                                     Confirm
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ) : <div className="coming-soon-page">
//                     <button onClick={() => setModal(true)}>Open Modal</button>
//                 </div>
//             }
//         </>

//     );
// };

// export default CustomModal

//  swap list below


// import React, { useState } from 'react'


// function SwapList() {
// var list_one = [
//     {
//         id: 1,
//         item: "item 1",
//     },
//     {
//         id: 2,
//         item: "item 2",
//     },
//     {
//         id: 3,
//         item: "item 3",
//     },
//     {
//         id: 4,
//         item: "item 4",
//     },

//     {
//         id: 5,
//         name: "item 5",
//     }

// ]

// var list_two = [
//     {
//         id: 1,
//         item: "item A",
//         id: 2,
//         item: "item B",
//     },
//     {
//         id: 3,
//         item: "item C",
//     },
//     {
//         id: 4,
//         item: "item D",
//     },
//     {
//         id: 5,
//         item: "item E",
//     }

// ]
// const [firstList, setFirstList] = useState(list_one);
// const [secondList, setSecondList] = useState(list_two);

//     return (
//         <div className="coming-soon-page">
// {/* {
//     firstList?.map((list, index) => {
//         console.log(list,"listlistlist");

//         return (
//             <div key={index}>
//                 {list.item}
//             </div>
//         )
//     }),
//     secondList?.map((list, index) => {
//         console.log(list,"listlistlist");

//         return (
//             <div key={index}>
//                 {list.item}
//             </div>
//         )
//     })

// } */}
//             <h1>Hello</h1>
//         </div>
//     )
// }

// export default SwapList



