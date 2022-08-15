import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

const useTasksContext = () => useContext(TasksContext);

const UseTasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const createTask = task => {
        setTasks(prev => [...prev, task]);
    };

    return <TasksContext.Provider value={{ tasks, createTask }}>{children}</TasksContext.Provider>;
};

export { useTasksContext, UseTasksProvider };
