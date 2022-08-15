import { useTasksContext } from '../../context/TasksContext';
import dateFormatter from './../../utils/DateFormatter';

const TasksList = () => {
    const { tasks } = useTasksContext();

    return (
        <div className='flex flex-col gap-3'>
            {tasks.map(task => {
                return (
                    <div className='bg-zinc-800 py-2 px-3 rounded cursor-pointer' key={task._id}>
                        <p className='font-semibold'>{task.name}</p>
                        <p className='text-sm text-end'>{dateFormatter.format(Date.parse(task.createdAt))}</p>
                        {task.subTasks?.map(subTask => {
                            return (
                                <div className='flex gap-2 items-center' key={subTask._id}>
                                    <input type='checkbox' defaultChecked={subTask.isComplete} />
                                    <label>{subTask.name}</label>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default TasksList;
