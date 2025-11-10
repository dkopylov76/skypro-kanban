import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F1F1F1;
`;

export const LoginMain = styled.div`
    min-width: 368px;
    margin: 0 auto;
    max-width: 370px;
    width: 100%;
    height: 329px;
    display: flex;
    flex-direction: column;
    padding: 50px 60px 50px 60px;
    box-sizing: border-box;
    border: 0.7px solid rgba(212, 219, 229, 1);
    border-radius: 10px;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    background: rgba(255, 255, 255, 1);
`;

export const LoginContainer = styled.div`
    width: 248px;
    height: 229px;
    display: flex;
`;

export const LoginBlock = styled.div`
    width: 248px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginTtl = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    text-align: center;
    margin-bottom: 20px;
`;

export const LoginName = styled.input`
    width: 248px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    margin-bottom: 7px;
    box-sizing: border-box;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: rgba(148, 166, 190, 1);
        line-height: 16px;
        letter-spacing: -2%;
        text-align: left;
    }
`;

export const LoginMail = styled.input`
    width: 248px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    margin-bottom: 7px;
    box-sizing: border-box;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: rgba(148, 166, 190, 1);
        line-height: 16px;
        letter-spacing: -2%;
        text-align: left;
    }
`;

export const LoginPass = styled.input`
    width: 248px;
    height: 30px;
    padding: 8px 10px 8px 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    &::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: rgba(148, 166, 190, 1);
        line-height: 16px;
        text-align: left;
    }
`;

export const LoginButton = styled(Link)`
    width: 248px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding: 8px 10px 8px 10px;
    border-radius: 4px;
    background: rgba(86, 94, 239, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
`;

export const LoginText = styled(Link)`
    width: 185px;
    height: 42px;
    font-size: 20px;
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -2%;
    text-align: center;
    cursor: pointer;
    outline: none;
`;
