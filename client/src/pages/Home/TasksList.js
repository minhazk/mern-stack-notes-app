import { useTasksContext } from '../../context/TasksContext';
import Task from './Task';
import dateFormatter from './../../utils/DateFormatter';

const TasksList = () => {
    const { tasks } = useTasksContext();

    return (
        <div className='flex flex-col-reverse gap-3'>
            {tasks.map(task => {
                return <Task task={task} key={task._id} />;
            })}
        </div>
    );
};

export default TasksList;
