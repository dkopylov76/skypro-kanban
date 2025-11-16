import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { fetchTasks } from "../services/api";
import { useCallback, useEffect, useState } from "react";

const Container = styled.div`
    width: 100vw;
`;

const MainPage = () => {
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [errors, setErrors] = useState("");

    const getTasks = useCallback(async () => {
        try {
            setLoading(true);
            const data = await fetchTasks({
                token: "aaskldjfsdhfaweuiewiuf",
            });
            if (data) setTasks(data);
        } catch (err) {
            setErrors(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getTasks();
    }, [getTasks]);
    
    return (
        <Container>
            <Header />
            <Main loading={loading} tasks={tasks} error={errors} />
            <Outlet />
        </Container>
    );
};

export default MainPage;