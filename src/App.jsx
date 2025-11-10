import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
    return <AppRoutes />;
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import AuthForm from "./components/AuthForm";
// import Dashboard from "./components/Dashboard";

// export default function App() {
//   const currentUser = localStorage.getItem("currentUser");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={currentUser ? <Navigate to="/dashboard" /> : <AuthForm />} />
//         <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }