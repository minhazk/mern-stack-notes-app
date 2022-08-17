import { useState } from 'react';

const SubTask = ({ subTask }) => {
    const [checked, setChecked] = useState(subTask.isComplete);

    const handleChange = () => {
        setChecked(prev => !prev);
        console.log(checked);
    };

    return (
        <div>
            <input className='hidden' onChange={handleChange} type='checkbox' checked={checked} id={subTask._id} />
            <label htmlFor={subTask._id}>
                <div className='flex items-center gap-3'>
                    <button className='w-4 aspect-square flex items-center justify-center border outline-none focus:border-none border-white rounded focus:ring focus:ring-offset-1 focus:ring-orange-600 focus:ring-opacity-50 hover:shadow-[0_0_0_3px] hover:shadow-[rgba(255,101,2,0.39)]'>
                        <div className={`w-3/4 aspect-square bg-orange-600 rounded-sm ${!checked && 'hidden'}`}></div>
                    </button>
                    <p>{subTask.name}</p>
                </div>
            </label>
        </div>
    );
};

export default SubTask;
