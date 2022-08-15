import { useState, useRef } from 'react';

const NewTodo = () => {
    const [name, setName] = useState('');
    const [subTasks, setSubTasks] = useState([]);
    const [focus, setFocus] = useState('name');
    const inputRef = useRef();

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            if (focus === 'name') {
                inputRef.current.value = null;
                setFocus('subtask');
            } else if (focus === 'subtask') {
                setSubTasks(prev => {
                    return [...prev, { id: Math.random(), name: inputRef.current.value, isComplete: false }];
                });
            }
        }
    };

    const handleNameInput = e => {
        if (focus !== 'name') return;
        setName(e.target.value);
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

    return (
        <div className='my-4'>
            <input ref={inputRef} onInput={handleNameInput} onKeyDown={handleKeyDown} className='bg-zinc-800 w-full py-2 px-4 rounded' placeholder='Type here' />
            {!!name && (
                <div className='bg-zinc-800 mt-2 rounded p-3 pb-4'>
                    <p onClick={handleNameClick} className={`text-lg font-semibold ${focus !== 'name' && 'italic'}`}>
                        {name}
                    </p>

                    <div>
                        <h3 className='text-md mt-2 mb-3'>{!!subTasks.length && 'Sub Tasks - ' + subTasks.length}</h3>
                        <div className='flex flex-wrap gap-4'>
                            {subTasks.map(task => {
                                return (
                                    <p id={task.id} key={task.id} onClick={handleDeleteSub} className='text-sm bg-zinc-900 py-1 px-2 rounded cursor-pointer hover:opacity-50 transition-opacity'>
                                        {task.name}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewTodo;
