import React from "react";

const Navber = () => {
  return (
    <div className="mb-[80px] md:mx-20">
       
      <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row justify-center gap-8 md:gap-0">
        <div className="flex-1">
          <h2 className="font-bold text-[24px] text-center md:text-left">CS — Ticket System</h2>
        </div>
        <div typeof="none" className="flex-none">
          <ul className="flex flex-col md:flex-row gap-2  md:gap-[32px] justify-center items-center">
            <li className="cursor-pointer"><a href="#">Home</a></li>
            <li className="cursor-pointer"><a href="#">FAQ</a></li>
            <li className="cursor-pointer"><a href="#">Changelog</a></li>
            <li className="cursor-pointer"><a href="#">Blog</a></li>
            <li className="cursor-pointer"><a href="#">Downloadv</a></li>
            <li className="cursor-pointer"><a href="#">Contact</a></li>
            <button
              className="text-white font-semibold rounded py-3 px-4 cursor-pointer bg-gradient-to-tr from-[rgb(99,46,227)] to-[rgb(159,98,242)]"
            >
              <i className="fa-solid fa-plus"></i>New Ticket
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
