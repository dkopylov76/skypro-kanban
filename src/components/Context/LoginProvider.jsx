import { useState } from "react";
import { LoginContext } from "./LoginContext";
import { checkLs } from "../../utils/checkLs";


const LoginProvider = ({children}) => {
    const [user, setUser] = useState(checkLs());

    const updateUserInfo = (userData) => {
        setUser(userData);
        if (userData) {
            localStorage.setItem("userInfo", JSON.stringify(userData));
        } else {
            localStorage.removeItem("userInfo");
        }
    };

    return (
        <LoginContext.Provider value={{ user, updateUserInfo }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;