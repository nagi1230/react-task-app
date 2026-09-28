// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import DsaPractice from './DsaPractice/DsaPractice.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />
// )

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Utilities/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
        <App />
  //     </PersistGate>
  //   </Provider>
  // </StrictMode>
);