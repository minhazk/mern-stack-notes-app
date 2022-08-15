import React from 'react';
import { BiUser } from 'react-icons/bi';

const NavBar = () => {
    return (
        <header>
            <nav className='flex justify-between py-4'>
                <h1 className='text-xl font-semibold'>
                    Note<span className='text-orange-600'>eFy</span>
                </h1>
                <div>
                    <button>
                        <BiUser size={20} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
