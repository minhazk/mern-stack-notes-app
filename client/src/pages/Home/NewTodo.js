import { useState, useRef, useEffect } from 'react';
import { useTasksContext } from '../../context/TasksContext';

const NewTodo = () => {
    const [name, setName] = useState('');
    const [subTasks, setSubTasks] = useState([]);
    const [focus, setFocus] = useState('name');
    const inputRef = useRef();

    const { createTask } = useTasksContext();

    useEffect(() => inputRef.current.focus());

    const handleCreateTask = () => {
        createTask({ name, subTasks });
    };

    const handleKeyDown = e => {
        if (inputRef.current.value === '' || inputRef.current.value === null || inputRef.current.value.trim() === '[x]') return;
        if (e.key === 'Enter') {
            if (focus === 'name') {
                inputRef.current.value = null;
                setFocus('subtask');
            } else if (focus === 'subtask') {
                setSubTasks(prev => {
                    return [...prev, { id: Math.random(), name: inputRef.current.value, isComplete: inputRef.current.value.includes('[x]') }];
                });
            }
        }
    };

    const handleNameInput = e => {
        if (focus !== 'name') return;
        setName(e.target.value);
        inputRef.current.focus();
    };

    const handleNameClick = () => {
        inputRef.current.value = name;
        setFocus('name');
    };

    const handleDeleteSub = e => {
        setSubTasks(prev => {
            return prev.filter(task => task.id.toString() !== e.target.id);
        });
    };

    const focusStyle = {
        name: 'rgba(234,88,12,.5)',
        subtask: 'lightblue',
    };

    return (
        <div className='my-4'>
            <input
                ref={inputRef}
                onInput={handleNameInput}
                onKeyDown={handleKeyDown}
                className={`bg-zinc-800 w-full py-2 px-4 outline-none focus:shadow-[0_0_.5em_${focus && focusStyle[focus]}] transition-shadow rounded`}
                placeholder='Type here'
                autoFocus
            />
            {!!name && (
                <div className='bg-zinc-800 mt-2 rounded p-3 pb-4'>
                    <p onClick={handleNameClick} className={`font-semibold ${focus !== 'name' && 'italic'} transition-all`}>
                        {name}
                    </p>

                    <h3 className='text-sm mt-2 mb-3'>{'Sub Tasks - ' + subTasks.length}</h3>

                    {!!subTasks.length && (
                        <div className='flex flex-wrap gap-3 mb-4'>
                            {subTasks.map(task => {
                                return (
                                    <p id={task.id} key={task.id} onClick={handleDeleteSub} className='text-sm bg-zinc-900 py-1 px-2 rounded cursor-pointer hover:opacity-50 transition-opacity'>
                                        {task.name}
                                    </p>
                                );
                            })}
                        </div>
                    )}

                    <button onClick={handleCreateTask} className='text-sm bg-orange-600 py-1 px-3 rounded inline-flex'>
                        Create
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewTodo;
