import React, { useState, useEffect, useRef } from "react";
import Logo from '../assets/logo.png';
import { useApp } from '../Context/AppContext';

const Sidebar = () => {
  const [todaysTask, setTodaysTask] = useState(true);
  const [allTask, setAllTask] = useState(false);
  const [completedTask, setCompletedTask] = useState(false);
  const [incompleteTask, setIncompleteTask] = useState(false);
  const { lefthidebutton, setRightHideButton, navleft, setNavleft} = useApp();
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setNavleft(window.innerWidth >= 1280);
      setRightHideButton(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNavleft(false);
      }
    };
    
    if (lefthidebutton) {
      document.addEventListener("mousedown", handleOutsideClick);
      console.log("got clicked");
    }

    return () => {
      if (lefthidebutton) {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, [lefthidebutton, menuRef]);

  const handleButtonClick = (taskType) => {
    setTodaysTask(taskType === 'todays' ? !todaysTask : false);
    setAllTask(taskType === 'all' ? !allTask : false);
    setCompletedTask(taskType === 'completed' ? !completedTask : false);
    setIncompleteTask(taskType === 'incomplete' ? !incompleteTask : false);
  };

  const getButtonClassName = (isActive) =>
    `px-4 py-2 text-md text-gray-700 hover:text-orange-500 ${
      isActive ? "border-r-[5px] border-orange-500 bg-orange-50" : ""
    } text-left w-full`;

  return (
    <div className="">
      {/* Side drawer menu */}
      <div
        ref={menuRef}
        className={
          navleft
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300 gap-5 flex flex-col"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <div className="flex text-black w-full items-center justify-center pt-3 gap-3 ">
          <img src={Logo} alt="" className="w-[55px]" />
          <h2 className="text-2xl">Task<span className="font-semibold">Ninja</span></h2>
        </div>
        <button className="mx-3 py-3 font-semibold text-lg bg-orange-400 rounded-md ">Add New Task</button>
        <div className="text-black mt-6 gap-5 flex flex-col items-start">
          <button
            className={getButtonClassName(todaysTask)}
            onClick={() => handleButtonClick('todays')}
          >
            Todays Tasks
          </button>
          <button
            className={getButtonClassName(allTask)}
            onClick={() => handleButtonClick('all')}
          >
            All Tasks
          </button>
          <button
            className={getButtonClassName(completedTask)}
            onClick={() => handleButtonClick('completed')}
          >
            Completed Tasks
          </button>
          <button
            className={getButtonClassName(incompleteTask)}
            onClick={() => handleButtonClick('incomplete')}
          >
            Incomplete Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
