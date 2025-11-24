// import { useState } from "react";
// import { TasksContext } from "./TasksContext";
// import { checkLs } from "../../utils/checkLs";


// const TasksProvider = ({children}) => {
//     const [task, setTask] = useState(checkLs());

//     const updateTaskInfo = (taskData) => {
//         setTask(taskData);
//         if (taskData) {
//             localStorage.setItem("taskInfo", JSON.stringify(taskData));
//         } else {
//             localStorage.removeItem("taskInfo");
//         }
//     };

//     return (
//         <TaskContext.Provider value={{ task, updateTaskInfo }}>
//             {children}
//         </TaskContext.Provider>
//     );
// };

// export default TaskProvider;


import { useContext, useState, useEffect } from "react";
import { fetchTasks, postTask, editTask } from "../../services/api";
import { LoginContext } from "./LoginContext";
import { TasksContext } from "./TasksContext";


export const TasksProvider = ({ children }) => {
   const [tasks, setTasks] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const { user } = useContext(LoginContext);


   useEffect(() => {
      if (!user) {
         setTasks([]);
         return;
      }

      const loadTasks = async () => {
         setLoading(true);
         setError("");
         try {
            const data = await fetchTasks(user.token);
            setTasks(data);
         } catch (err) {
            console.error("Ошибка загрузки задач", err);
            setError("Не удалось загрузить задачи");
         } finally {
            setLoading(false);
         }
      };
      loadTasks();
   }, [user]);


   const addNewTask = async ({ task }) => {
      if (!user?.token) {
         setError("Требуется авторизация");
         return;
      }
      setLoading(true);
      setError("");
      try {
         const newTasks = await postTask({ token: user?.token, task });
         setTasks(newTasks);
      } catch (err) {
         console.error("Ошибка добавления задачи", err);
         setError("Не удалось добавить задачу");
      } finally {
         setLoading(false);
      }
   };


   const updateTask = async ({ task, id }) => {
      if (!user?.token) {
         setError("Требуется авторизация");
         return;
      }
      setLoading(true);
      setError("");
      try {
         const newTasks = await editTask({ token: user?.token, id, task });
         setTasks(newTasks);
      } catch (err) {
         console.error("Ошибка редактирования задачи", err);
         setError("Не удалось обновить задачу");
      } finally {
         setLoading(false);
      }
   };


   return (
      <TasksContext.Provider value={{
         tasks,
         setTasks,
         loading,
         error,
         addNewTask,
         updateTask
         }}
      >
         {children}
      </TasksContext.Provider>
   );
};