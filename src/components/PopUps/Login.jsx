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
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }
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
                            <LoginButton type='submit'>
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