// import { useNavigate } from 'react-router-dom';
// // import SignInPage from "./pages/SignIn";
// // import { useState } from 'react-router-dom';
// import {
//     LoginWrapper,
//     LoginMain,
//     LoginContainer,
//     LoginBlock,
//     LoginTtl,
//     LoginName,
//     LoginMail,
//     LoginPass,
//     LoginButton,
//     LoginText,
// } from './Login.styled';


// const Login = ({ isSignUp, setIsAuth }) => {
//     // const [isAuth, setIsAuth] = useState(false);
//     const navigate = useNavigate();
//     const handleLogin = (e) => {
//         e.preventDefault();
//         setIsAuth(true);
//         navigate("/");
//    };

// // const Login = () => {
//     return (
//         <>
//         <LoginWrapper>
//             <LoginMain>
//                 <LoginContainer>
//                     <LoginBlock>
//                         {/* <LoginTtl>Вход</LoginTtl> */}
//                         <LoginTtl>{isSignUp ? "Регистрация" : "Вход"}</LoginTtl>
//                         {/* <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2> */}
//                         <form onSubmit={handleLogin}>
//                         {isSignUp && (
//                             <LoginName type="text" name="name" id="formname" placeholder="Имя" />
//                         )}
//                         <LoginMail type="email" name="email" id="formmail" placeholder="Эл. почта" />
//                         <LoginPass type="password" name="password" id="formpass" placeholder="Пароль" />
//                         <LoginButton type="submit" onClick={handleLogin}>{isSignUp ? "Зарегистрироваться" : "Войти"}</LoginButton>
//                         {/* <LoginText to="/register">Нужно зарегистрироваться? Регистрируйтесь здесь</LoginText> */}
//                         </form>

//                         {!isSignUp && (
//                             <LoginText to="/register">Нужно зарегистрироваться? Регистрируйтесь здесь</LoginText>
//                         )}
//                         {isSignUp && (
//                             <LoginText to="/login">Войдите здесь</LoginText>
//                         )}
//                     </LoginBlock>
//                 </LoginContainer>
//             </LoginMain>
//         </LoginWrapper>
//         </>
//     );
// }

// export default Login;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LoginWrapper,
    LoginMain,
    LoginContainer,
    LoginBlock,
    LoginTtl,
    LoginName,
    LoginMail,
    LoginPass,
    LoginButton,
    LoginText,
} from './Login.styled';

const Login = ({ isSignUp, setIsAuth }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        // Здесь можно добавить логику авторизации
        setIsAuth(true);
        navigate("/");
    };

    return (
        <LoginWrapper>
            <LoginMain>
                <LoginContainer>
                    <LoginBlock>
                        <LoginTtl>{isSignUp ? "Регистрация" : "Вход"}</LoginTtl>
                        <form onSubmit={handleLogin}>
                            {isSignUp && (
                                <LoginName
                                    type="text"
                                    name="name"
                                    id="formname"
                                    placeholder="Имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            )}
                            <LoginMail
                                type="email"
                                name="email"
                                id="formmail"
                                placeholder="Эл. почта"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <LoginPass
                                type="password"
                                name="password"
                                id="formpass"
                                placeholder="Пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <LoginButton type="submit">
                                {isSignUp ? "Зарегистрироваться" : "Войти"}
                            </LoginButton>
                        </form>

                        {!isSignUp && (
                            <LoginText to="/register">Нужно зарегистрироваться? Регистрируйтесь здесь</LoginText>
                        )}
                        {isSignUp && (
                            <LoginText to="/login">Уже есть аккаунт? Войдите здесь</LoginText>
                        )}
                    </LoginBlock>
                </LoginContainer>
            </LoginMain>
        </LoginWrapper>
    );
};

export default Login;