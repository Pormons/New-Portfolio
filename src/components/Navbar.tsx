import { AnimatePresence, motion } from "framer-motion";
import { AtSign, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [showSocial, setShowSocial] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="fixed font-poppins justify-center px-10 md:px-24 items-center inset-0 top-2 grid grid-cols-3 w-full h-20">
      <div className="flex justify-start items-center">
        <a href="">
          <img src={logo} className="h-10" alt="logo" />
        </a>
      </div>

      <div className="flex justify-center text-white items-center">
        <div className="rounded-full md:p-[4px] bg-[#81818121] backdrop-blur-sm w-[11.5rem] flex justify-around items-center [box-shadow:0_0px_1px_1px_rgba(255,255,255,0.5)]">
          <div
            className={`absolute transition-all duration-500 ${
              index === 0 ? "-translate-x-[44px]" : "translate-x-[44px]"
            }  bg-[#a9b6c721] rounded-full cursor-pointer z-10 w-[80px] h-[40px]`}
          ></div>
          <button
            onClick={() => handleSelect(0)}
            className={`nav-button bg-[#35353521] flex justify-center items-center text-center cursor-pointer z-50 relative w-[80px] h-[40px] rounded-full ${
              index === 0 ? "nav-selected" : ""
            } `}
            data-tab="works"
          >
            <div className="nav-radial -z-10"></div>
            <span className="poppins-regular">Works</span>
          </button>
          <button
            onClick={() => handleSelect(1)}
            className={`nav-button bg-[#35353521] flex justify-center items-center text-center cursor-pointer z-50 relative w-[80px] h-[40px] rounded-full ${
              index === 1 ? "nav-selected" : ""
            } `}
            data-tab="about"
          >
            <div className="nav-radial -z-10 "></div>
            <span className="poppins-regular">About</span>
          </button>
        </div>
      </div>
      <button
        onClick={() => setShowSocial((prev) => !prev)}
        className="md:hidden justify-end items-center flex"
      >
        <motion.div
          initial={false}
          animate={{ rotate: showSocial ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            {showSocial ? (
              <motion.div
                key="x"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X color="white" />
              </motion.div>
            ) : (
              <motion.div
                key="at"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <AtSign color="white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>

      <div
        className={`flex transition-transform duration-300 fixed ${
          showSocial ? "scale-100" : "scale-0"
        } scale-0 md:scale-100 origin-top-right right-16 top-15 rounded-lg p-5 md:backdrop-blur-xs md:static bg-[#adadad49] [box-shadow:0_0px_1px_1px_rgba(255,255,255,0.5)] md:shadow-none md:bg-transparent md:flex-row md:justify-end flex-col text-white gap-2`}
      >
        <a
          href="https://www.linkedin.com/in/fermin-flauta/"
          target="_blank" rel="noopener noreferrer"
          className="flex duration-300  ease-in [box-shadow:0_0px_1px_1px_rgba(255,255,255,0)] hover:[box-shadow:0_0px_1px_1px_rgba(255,255,255,0.5)] p-2 px-5 transition-all  hover:bg-zinc-500/20 rounded-full"
        >
          <span className="poppins-regular">LinkedIn</span>
          <MoveUpRight />
        </a>
        <a
          href=""
          className="flex duration-300 ease-in [box-shadow:0_0px_1px_1px_rgba(255,255,255,0)] hover:[box-shadow:0_0px_1px_1px_rgba(255,255,255,0.5)] p-2 px-5 transition-all hover:bg-zinc-500/20 rounded-full"
        >
          <span>Resume</span>
          <MoveUpRight />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
