import React from 'react';
import { useTasksContext } from '../../context/TasksContext';

const Counter = ({ count }) => {
    return <span className='text-2xl font-semibold'>{count}</span>;
};

const checkIfToday = time => {
    return new Date(time).toDateString() === new Date().toDateString();
};

const TaskCount = () => {
    const { tasks } = useTasksContext();

    return (
        <div>
            <div className='flex gap-2 items-baseline'>
                <Counter count={tasks.filter(task => !checkIfToday(task.createdAt)).length} />
                <p className='mr-5'>Tasks Left Today</p>
                <Counter count={tasks.length} />
                <p>Total Tasks</p>
            </div>
        </div>
    );
};

export default TaskCount;
