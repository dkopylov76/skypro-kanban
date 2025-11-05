import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Column from "../components/Column/Column";
import CardsItem from "../components/Card/CardsItem";

const Container = styled.div`
    width: 100vw;
`;

const MainPage = ({ loading }) => {
    return (
        <Container>
            <Header />
            <Main loading={loading} />
            <Outlet />
        </Container>
    );
};

export default MainPage;