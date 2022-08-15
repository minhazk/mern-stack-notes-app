import { useTasksContext } from '../../context/TasksContext';

const TasksList = () => {
    const { tasks } = useTasksContext();

    return tasks.map(task => {
        return task.name;
    });
};

export default TasksList;
