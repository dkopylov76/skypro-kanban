import { Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function AppRoutes() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <Router>
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<MainPage loading={loading} />} />
                {/* Страница входа */}
                <Route path="/login" element={<LoginPage />} />
                {/* Страница регистрации */}
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;