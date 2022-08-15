import React from 'react';
import { useTasksContext } from '../../context/TasksContext';

const Counter = ({ count }) => {
    return <span className='text-2xl font-semibold'>{count}</span>;
};

const TaskCount = () => {
    const { tasks } = useTasksContext();

    return (
        <div>
            <div className='flex gap-2 items-baseline'>
                <Counter count={tasks.length} />
                <p className='mr-5'>Tasks Left Today</p>
                <Counter count={tasks.length} />
                <p>Total Tasks</p>
            </div>
        </div>
    );
};

export default TaskCount;
