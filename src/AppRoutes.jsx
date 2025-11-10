import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/Main";
import SignInPage from "./pages/SignIn";
import RegisterPage from "./pages/Register";
import NewCardPage from "./pages/NewCard";
import ExitPage from "./pages/Exit";
import BrowseCardPage from "./pages/BrowseCard";
import NotFoundPage from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
            <Routes>
                <Route element={<PrivateRoute isAuth={isAuth} />}>
                    {/* Главная страница */}
                    <Route path="/" element={<MainPage setIsAuth={setIsAuth} loading={loading} />}>
                        {/* Страница выхода */}
                        <Route path="/exit" element={<ExitPage />} />
                        {/* Новая карточка */}
                        <Route path="/card" element={<NewCardPage />} />
                        {/* карточка */}
                        <Route path="/card/:id" element={<BrowseCardPage />} />
                    </Route>
                </Route>
                {/* Страница входа */}
                <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
                {/* Страница регистрации */}
                <Route path="/register" element={<RegisterPage />} />

        {/* <Route path="/" element={currentUser ? <Navigate to="/dashboard" /> : <AuthForm />} />
        <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/" />} /> */}

                {/* Страница 404 */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
    );
}

export default AppRoutes;


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