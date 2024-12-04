"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
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
    <div className="p-[24px] bg-white rounded-2xl shadow-sm border border-gray-200">
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
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Declarations Section */}
          <div className="flex flex-col pe-[40px]">
            <h3 className="mb-[2px] text-[14px] font-[400] text-blackish">
              Declarations
            </h3>
            <p className="text-[30px] font-[700] text-blackish">128</p>
          </div>

          {/* Fléchages Section */}
          <div className="flex flex-col border-l border-[#E5E9EB] ps-[8px] pe-[40px]">
            <h3 className="mb-[2px] text-[14px] font-[400] text-blackish">
              Fléchages
            </h3>
            <p className="text-[30px] font-[700] text-blackish">118</p>
          </div>

          {/* Average Time Section */}
          <div className="flex-1 flex-col border-l border-[#E5E9EB] ps-[8px]">
            <h3 className="mb-[2px] text-[14px] font-[400] text-blackish">
              Temps moyen par déclaration
            </h3>
            <div className="relative">
              <div className="absolute -top-1 -left-1">
                <TbGauge className="w-12 h-12 text-yellow-400" />
              </div>
              <div className="pl-10">
                {/* Time Display */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-[30px] font-[700] text-blackish">
                    ~1:08
                  </span>
                  <span className="text-xl font-medium text-blackish">S</span>
                </div>

                {/* Percentage Increase */}
                <div className="flex items-center gap-1 text-green-600">
                  <FaArrowUp className="w-3 h-3" />
                  <span className="text-sm font-semibold">+15.50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[230px]">
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
