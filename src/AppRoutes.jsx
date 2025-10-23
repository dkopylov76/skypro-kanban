import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NewCardPage from "./pages/NewCard";
import ExitPage from "./pages/Exit";

function AppRoutes() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<MainPage loading={loading} />}>
                </Route>
            </Routes>
    );
}

export default AppRoutes;


// {/* Страница входа */}
//                     <Route path="/login" element={<LoginPage />} />
//                     {/* Страница регистрации */}
//                     <Route path="/register" element={<RegisterPage />} />
                    // {/* Страница выхода */}
                    // <Route path="/exit" element={<ExitPage />} />
                    // {/* Новая карточка */}
                    // <Route path="/card" element={<NewCardPage />} />
