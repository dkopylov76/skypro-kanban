import Login from "./PopUps/Login";

const SignIn = ({ setIsAuth }) => {
    return <Login setIsAuth={setIsAuth} isSignUp={false} />;
};

export default SignIn;