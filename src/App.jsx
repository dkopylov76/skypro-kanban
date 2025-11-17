import "./App.css";
import AppRoutes from "./AppRoutes";
import LoginProvider from "./components/Context/LoginProvider";

function App() {
    return (
        <LoginProvider>
            <AppRoutes />
        </LoginProvider>
    );
}

export default App;