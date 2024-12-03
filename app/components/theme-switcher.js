"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineSun } from "react-icons/ai";

export default function ThemeSwitcher() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div className="flex items-center justify-center w-[85px] border border-[#EFEFF4] rounded-full">
      <button
        onClick={toggleTheme}
        className="relative flex items-center justify-between w-full p-[4px] bg-white rounded-full focus:outline-none"
        aria-label="Toggle theme"
      >
        <span className="sr-only">
          {isLight ? "Switch to dark mode" : "Switch to light mode"}
        </span>
        <motion.div
          className="absolute w-[35px] h-[35px] bg-bluish rounded-full z-[2]"
          animate={{ x: isLight ? 0 : 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <span className="w-[35px] h-[35px] flex items-center justify-center">
          <AiOutlineSun
            className={`w-[20px] h-[20px] text-[20px] ${
              isLight ? "text-white" : "text-secondary"
            } relative z-[3]`}
          />
        </span>
        <span className="w-[35px] h-[35px] flex items-center justify-center">
          <IoMoonOutline
            className={`w-[20px] h-[20px] text-[20px] ${
              isLight ? "text-secondary" : "text-white"
            } relative z-[3]`}
          />
        </span>
      </button>
    </div>
  );
}
