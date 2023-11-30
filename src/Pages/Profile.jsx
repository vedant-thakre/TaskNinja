import React, { useState, useEffect, useRef } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useApp } from '../Context/AppContext';


const Profile = () => {
  const { righthidebutton , setRightHideButton, navright, setNavright } = useApp();
  const menuItems = [
    { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Orders" },
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Favorites" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
  ];

  const menuRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      setNavright(window.innerWidth >= 1280);
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
        setNavright(false);
      }
    };

    if (righthidebutton) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      if (righthidebutton) {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    };
  }, [righthidebutton, menuRef]);

  return (
    <div className="">
      

      {/* Side drawer menu */}
      <div
        ref={menuRef}
        className={
          navright
            ? "fixed top-0 right-0 w-[250px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {menuItems.map(({ icon, text }, index) => (
              <div key={index} className=" py-4">
                <li className="text-xl flex cursor-pointer w-[50%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                  {icon} {text}
                </li>
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Profile;
