import React from 'react';
import { UseTasksProvider } from '../../context/TasksContext';
import NewTodo from './NewTodo';
import TaskCount from './TaskCount';
import TasksList from './TasksList';

const Home = () => {
    return (
        <UseTasksProvider>
            <TaskCount />
            <NewTodo />
            <TasksList />
        </UseTasksProvider>
    );
};

export default Home;
