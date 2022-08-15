import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

const TasksContext = createContext();

const useTasksContext = () => useContext(TasksContext);

const UseTasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    // call tasks from db in a useeffect but memoize it
    useEffect(() => {
        // const source = axios.CancelToken.source();
        getTasks();
        // return () => source.cancel();
    }, []);

    const getTasks = source => {
        // api.get('/', { cancelToken: source.token })
        api.get('/')
            .then(({ data }) => {
                setTasks(data);
            })
            .catch(err => {
                if (!axios.isCancel(err)) console.log(err);
            });
    };

    const createTask = task => {
        // setTasks(prev => [...prev, task]);
        api.post('/', task);
        getTasks();
    };

    return <TasksContext.Provider value={{ tasks, createTask }}>{children}</TasksContext.Provider>;
};

export { useTasksContext, UseTasksProvider };
