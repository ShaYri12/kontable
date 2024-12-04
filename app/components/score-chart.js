"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowRoundUp, IoMdArrowDropdown } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { TbGauge } from "react-icons/tb";

export default function ScoreChart() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Last 30 days");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const periods = [
    "Last 7 days",
    "Last 30 days",
    "Last 3 months",
    "Last 12 months",
  ];

  return (
    <div className="p-[24px] bg-white rounded-[6px] border border-[#E5E9EB]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[21px]">
        <h1 className="text-2xl font-semibold text-gray-900">Score</h1>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-[10px] py-[4px] text-[14px] font-medium text-blackish bg-white rounded-lg hover:bg-gray-50"
          >
            {selectedPeriod}
            <IoMdArrowDropdown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => {
                    setSelectedPeriod(period);
                    setIsDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Metrics Flex Container */}
        <div className="flex flex-wrap xl:gap-[22px] gap-[40px]">
          {/* Declarations Section */}
          <div className="flex flex-col">
            <h3 className="mb-[2px] text-[14px] font-[400] text-blackish">
              Declarations
            </h3>
            <p className="text-[30px] font-[700] text-blackish">128</p>
          </div>

          {/* Fléchages Section */}
          <div className="flex flex-col sm:border-l border-[#E5E9EB] ps-[8px]">
            <h3 className="mb-[2px] text-[14px] font-[400] text-blackish">
              Fléchages
            </h3>
            <p className="text-[30px] font-[700] text-blackish">118</p>
          </div>

          {/* Average Time Section */}
          <div className="flex-1 flex-col sm:border-l border-[#E5E9EB] ps-[8px] min-w-[145px]">
            <h3 className="mb-[2px] text-[14px] font-[400] text-blackish">
              Temps moyen par déclaration
            </h3>
            <div className="">
              {/* Time Display */}
              <div className="flex items-baseline gap-[12px]">
                <img src="/assets/meter.png" alt="meter" />
                <div>
                  <span className="text-[30px] font-[700] text-blackish">
                    ~1:08
                  </span>
                  <span className="text-[25px] font-[400] text-blackish ps-[3px]">
                    S
                  </span>
                </div>
              </div>

              {/* Percentage Increase */}
              <span className="text-[15.84px] flex items-center justify-center rounded-full me-[4px] text-[#478443] bg-[#4784431F] w-[21px] h-[21px] font-[500]">
                <IoIosArrowRoundUp />
              </span>
              <span className="text-[#478443] text-[15px] font-medium ml-[12px]">
                +15.50%
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-[230px]">
          <img
            src="/assets/score-chart.png"
            alt="score chart"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
