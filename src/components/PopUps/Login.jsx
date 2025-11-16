import { signIn, signUp } from '../../services/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LoginWrapper,
    LoginMain,
    LoginBlock,
    LoginTtl,
    LoginName,
    LoginMail,
    LoginPass,
    LoginButton,
    LoginText,
    LoginError,
} from './Login.styled';

const Login = ({ isSignUp, setIsAuth }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        login: false,
        password: false,
    });

    const [error, setError] = useState("");

    const validateForm = () => {
        const newErrors = { name: false, login: false, password: false };
        let isValid = true;

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = true;
            isValid = false;
        }

        if (!formData.login.trim()) {
            newErrors.login = true;
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = true;
            isValid = false;
        }

        setErrors(newErrors);
        if (!isValid) {
            setError("Заполните все поля");
        }
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: false });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
    try {
        const data = !isSignUp
            ? await signIn({ login: formData.login, password: formData.password })
            : await signUp(formData);

        if (data) {
            setIsAuth(true);
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/");
        }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <LoginWrapper>
            <LoginMain>
                <LoginBlock>
                    <LoginTtl>{isSignUp ? "Регистрация" : "Вход"}</LoginTtl>
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <LoginName
                                $error={errors.name}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Имя"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        )}
                        <LoginMail
                            $error={errors.login}
                            type="text"
                            name="login"
                            id="login"
                            placeholder="Эл. почта"
                            value={formData.login}
                            onChange={handleChange}
                        />
                        <LoginPass
                            $error={errors.password}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Пароль"
                            value={formData.password}
                            onChange={handleChange}
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
                    <LoginError>{error}</LoginError>
                </LoginBlock>
            </LoginMain>
        </LoginWrapper>
    );
};

export default Login;