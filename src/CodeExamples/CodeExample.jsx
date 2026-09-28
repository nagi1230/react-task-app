// import React from 'react'

// function CodeExamples() {

//     const debounce = (funct, delay) => {
//         let timer;
//         return function (...args) {
//             clearTimeout(timer);
//             timer = setTimeout(() => funct(...args), delay)
//         }
//     }

//     const handleDebounce = debounce(()=>{
//         console.log("debounce from a funct");
//     },1000)

//     return (
//         <div>
//             <h1>Code Example</h1>
//             {/* <button onClick={handleDebounce}>Click me</button> */}
//             <input type="text" onChange={handleDebounce} placeholder='Search...' />
//         </div>
//     )
// }

// export default CodeExamples



// import React, { useState } from 'react'

// function CodeExample() {

//     const [addInputField, setAddInputField] = useState([1]);
//     const [inputValue, setInputValue] = useState({
//         index: 0,
//         value: ""
//     });
//     const handleAddField = () => {
//         setAddInputField([...addInputField, addInputField.length + 1])
//     }

//     const handleDeleteField = (index) => {
//         const updatedFiled = addInputField?.filter((_, itemIndex) => itemIndex !== index)
//         if (updatedFiled?.length !== 0) {
//             setAddInputField(updatedFiled)
//         }
//     }

//     const handleSubmit = () => {
//     }
//     console.log(inputValue, "inputValue");

//     return (
//         <div style={{
//             height: "100vh",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//         }}>
//             <div style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "15px",
//                 width: "250px"
//             }}>
//                 {
//                     addInputField.map((_, index) => (
//                         <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 style={{
//                                     flex: 1,
//                                     padding: "8px",
//                                     borderRadius: "5px",
//                                     border: "1px solid #ccc",

//                                 }}
//                                 onChange={(e) => setInputValue(prev => (    {
//                                     ...prev,
//                                     [index]: {
//                                         index: index,
//                                         value: e.target.value
//                                     }
//                                 }))}
//                                 value={inputValue.value}
//                             />
//                             <button
//                                 style={{
//                                     padding: "8px 12px",
//                                     border: "none",
//                                     borderRadius: "5px",
//                                     backgroundColor: "#f44336",
//                                     color: "#fff",
//                                     cursor: "pointer",
//                                 }}
//                                 onClick={() => handleDeleteField(index)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))
//                 }



//                 <div style={{ display: "flex", gap: "10px" }}>
//                     <button
//                         style={{
//                             flex: 1,
//                             padding: "8px 12px",
//                             border: "none",
//                             borderRadius: "5px",
//                             backgroundColor: "#4CAF50",
//                             color: "#fff",
//                             cursor: "pointer",
//                         }}
//                         onClick={handleAddField}
//                     >
//                         Add
//                     </button>
//                     <button
//                         style={{
//                             flex: 1,
//                             padding: "8px 12px",
//                             border: "none",
//                             borderRadius: "5px",
//                             backgroundColor: "#2196F3",
//                             color: "#fff",
//                             cursor: "pointer",
//                         }}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default CodeExample


// import React, { useState } from 'react';

// function CodeExample() {

//     const [fields, setFields] = useState([{
//         index: 0,
//         value: ""
//     }]);

//     const handleOnchangeAtion = (e, index) => {
//         const updatedFieldList = fields?.map((list) => list?.index === index ? { ...list, value: e.target.value, index: index } : list);
//         setFields(updatedFieldList);
//     }

//     const handleAddField = () => {
//         setFields((prev) => [...prev, {
//             index: prev.length,
//             value: ""
//         }]);
//     }

//     const handleRemoveField = (index) => {
//         const updatedFiled = fields?.filter((list) => list.index !== index)
//         if (updatedFiled?.length !== 0) {
//             setFields(updatedFiled)
//         }
//     }

//     const handleSubmit = () => {
//         console.log(fields, "fieldsfields");
//     }

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//             }}
//         >
//             <div
//                 style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "15px",
//                     width: "250px",
//                 }}
//             >
//                 {fields.map((field) => (
//                     <div
//                         key={field.index}
//                         style={{ display: "flex", alignItems: "center", gap: "10px" }}
//                     >
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             style={{
//                                 flex: 1,
//                                 padding: "8px",
//                                 borderRadius: "5px",
//                                 border: "1px solid #ccc",
//                             }}
//                             value={field.value?.charAt(0).toUpperCase() + field.value?.slice(1)}
//                             onChange={(e) => handleOnchangeAtion(e, field.index)}
//                         />
//                         <button
//                             style={{
//                                 padding: "8px 12px",
//                                 border: "none",
//                                 borderRadius: "5px",
//                                 backgroundColor: "#f44336",
//                                 color: "#fff",
//                                 cursor: "pointer",
//                             }}
//                             onClick={() => handleRemoveField(field.index)}
//                         >
//                             Remove
//                         </button>
//                     </div>
//                 ))}

//                 <div style={{ display: "flex", gap: "10px" }}>

//                     <button
//                         style={{
//                             flex: 1,
//                             padding: "8px 12px",
//                             border: "none",
//                             borderRadius: "5px",
//                             backgroundColor: "#4CAF50",
//                             color: "#fff",
//                             cursor: "pointer",
//                         }}
//                         onClick={handleAddField}
//                     >
//                         Add
//                     </button>

//                     <button
//                         style={{
//                             flex: 1,
//                             padding: "8px 12px",
//                             border: "none",
//                             borderRadius: "5px",
//                             backgroundColor: "#2196F3",
//                             color: "#fff",
//                             cursor: "pointer",
//                         }}
//                         onClick={() => handleSubmit()}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CodeExample;

import React, { useEffect, useState } from "react";

const CodeExample = () => {
  const [boxes] = useState([
    { num: 1, gridColumn: 1, gridRow: 1 },
    { num: 2, gridColumn: 2, gridRow: 1 },
    { num: 3, gridColumn: 3, gridRow: 1 },
    { num: 4, gridColumn: 1, gridRow: 2 },
    { num: 5, gridColumn: 1, gridRow: 3 },
    { num: 6, gridColumn: 1, gridRow: 4 },
    { num: 7, gridColumn: 2, gridRow: 4 },
    { num: 8, gridColumn: 3, gridRow: 4 },
  ]);

  const [activeOrder, setActiveOrder] = useState([]);
  const containerStyle = {
    display: "grid",
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    gap: "10px",
    width: "max-content",
    margin: "50px auto",
  };

  const boxStyle = {
    backgroundColor: "#cbd1ff",
    border: "1.5px solid #707070",
    borderRadius: "10px",
    width: "80px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const handleAddRow = (num) => {
    if (activeOrder.some((a) => a === num)) return;
    setActiveOrder((prev) => [...prev, num]);
  };

  useEffect(() => {
    if (activeOrder.length === boxes.length) {
      const timer = setInterval(() => {
        setActiveOrder((prev) => {
          if (prev.length === 0) {
            clearInterval(timer);
            return prev;
          }
          const updated = [...prev];
          updated.shift();
          return updated;
        });
      }, 500);
    }
  }, [activeOrder, boxes.length]);

  return (
    <div style={containerStyle}>
      {boxes.map((item) => (
        <div
          key={item.num}
          onClick={() => handleAddRow(item.num)}
          style={{
            ...boxStyle,
            gridColumn: item.gridColumn,
            gridRow: item.gridRow,
            background: activeOrder.includes(item.num)
              ? "red"
              : "white",
          }}
        >
          {item.num}
        </div>
      ))}
    </div>
  );
};

export default CodeExample;
