// import Login from "../components/PopUps/Login";

// const RegisterPage = () => {


//     return (
//     <>
//         <Login />
//     </>
//     )
// };

// export default RegisterPage;

import Login from "../components/PopUps/Login";

const LoginPage = ({setIsAuth}) => {
    // return <Login />;
    return <Login setIsAuth={setIsAuth} />;
};

export default LoginPage;