import React from 'react';
import { useApp } from '../Context/AppContext';
import { FaBell } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const { lefthidebutton, righthidebutton, navleft, setNavleft, navright, setNavright } = useApp();
  const currentDate = new Date();

  return (
    <div className='bg-transperant w-full flex px-7 pt-5 h-[200px] text-black'>
      <div className='flex h-full w-full gap-10'>
        {lefthidebutton && (
            <HiOutlineMenuAlt4
            className='text-[25px] cursor-pointer h-[50px]'
            onClick={() => {
                console.log('Clicked left button');
                setNavleft(!navleft);}}
            />
        )}
        <div className='flex w-full justify-between '>
          <div className='flex h-[50px] items-center justify-between w-[500px]'>
            <div className='relative'>
                <input type="text" className='w-[300px] pl-3 pr-10 outline-none bg-white rounded-lg h-[50px]'
          placeholder='Search Task' />
           <IoSearch className='absolute cursor-pointer top-4 right-4 text-lg text-gray-500'/>
            </div>
          <p>{currentDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric',})}</p>
          </div>
          <div className='flex gap-1'>
            <FaBell className='text-lg cursor-pointer text-orange-400 h-[50px]' />
            <button
              className="hidden h-[50px] sm:block mx-3 py-2 px-4 text-white font-normal text-md bg-orange-400 rounded-md"
            >
              Add New Task
            </button>
          </div>
        </div>

        {righthidebutton && (
          <button
            className={`bg-black text-white flex xl:hidden items-center py-2 rounded-full border border-black`}
            style={{ height: '50px' }}
            onClick={() => setNavright(!navright)}
          >
            Cart2
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
