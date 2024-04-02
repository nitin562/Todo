import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-[25rem] h-full flex-col p-2">
      <button className="fixed z-20 w-10 p-2 text-black invert" onClick={toggleNavbar}>
        <img src="/menu.png" alt="toggle" className={`w-full aspect-square ${isOpen?"rotate-90":"rotate-0"} transition-all duration-500`} />
      </button>
      <div
        className={`bg-green-400/10 h-full w-full md:w-[25rem] absolute left-0 top-0 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[26rem]"
        }`}
      >
        <div className="pt-[5rem] px-2 flex flex-col items-center gap-y-4 flex-1">
          <p className="text-sky-400 text-7xl font-thin">TO<span className="text-emerald-400">DO</span></p>
          <div className="w-full flex flex-col pt-2 border-t-2 border-t-gray-400">
            <p className="text-white border-l-2 bg-green-600/40 p-1 font-thin text-xl indent-8">All</p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Nav;
