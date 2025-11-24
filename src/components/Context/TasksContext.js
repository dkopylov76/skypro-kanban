import { createContext } from "react";

// export const TasksContext = createContext(null);

export const TasksContext = createContext({
    tasks: [],
    loading: false,
    error: "",
});