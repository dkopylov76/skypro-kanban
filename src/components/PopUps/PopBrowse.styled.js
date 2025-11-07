import { Link } from "react-router-dom";
import styled from "styled-components";

export const PopBrowseMain = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`;

export const PopBrowseContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`;

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const PopBrowseStatus = styled.div`
    margin-bottom: 11px;
`;

export const PopBrowseSubttl = styled.p`
    margin-bottom: 14px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const FormSubttl = styled.label`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const CalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const CalendarPeriod = styled.div`
    padding: 0 7px;
`;

export const CalendarP = styled.p`
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
`;

export const ThemeDown = styled.div`
    display: block;
    margin-bottom: 20px;
`;

export const PopBrowseBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
`;

export const PopBrowseBtnGroup = styled.div`
    margin-right: 8px;
`;

export const BtnBrowse = styled(Link)`
    /* height: 30px;
    margin-bottom: 10px;
    padding: 5px 14px; */
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
    }
`;

export const BtnBrowseClose = styled(Link)`
    /* height: 30px;
    margin-bottom: 10px;
    padding: 5px 14px; */
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
    &:hover {
        background-color: #33399b;
    }
`;