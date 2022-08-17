import React, { useState } from 'react';
import SubTask from './SubTask';
import { BsCheck } from 'react-icons/bs';
import { RiCloseFill } from 'react-icons/ri';
import dateFormatter from '../../utils/DateFormatter';

const Task = ({ task }) => {
    const completeTasksNum = task.subTasks?.filter(task => task.isComplete).length || 0;
    const totalTasksNum = task.subTasks?.length || 0;
    const [progress, setProgress] = useState((completeTasksNum / totalTasksNum) * 100);
    const [subTasks, setSubTasks] = useState(task.subTasks);

    return (
        <div>
            <div className='bg-zinc-800 py-2 px-5 rounded cursor-pointer overflow-hidden'>
                <div className='flex gap-3 justify-between items-center'>
                    <div>
                        <p className='font-semibold'>{task.name}</p>
                        <p className='text-sm text-gray-400'>{dateFormatter.format(Date.parse(task.createdAt))}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='text-orange-400 font-bold text-sm'>{progress}%</div>
                        <div className='flex gap-1'>
                            <button>
                                <BsCheck size={25} />
                            </button>
                            <button>
                                <RiCloseFill size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full h-px bg-orange-600 mt-2 transition-transform' style={{ transform: `translateX(-${100 - progress}%)` }}></div>
            </div>
            <div className='bg-zinc-800 flex flex-col gap-3 mt-2 py-3 px-4 rounded'>
                {subTasks?.map(subTask => {
                    return <SubTask subTask={subTask} key={subTask._id} />;
                })}
            </div>
        </div>
    );
};

export default Task;
