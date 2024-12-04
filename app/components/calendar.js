"use client";

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

export function Drawer({ isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const drawer = document.getElementById("drawer");
      if (drawer && !drawer.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300 z-[9999] ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <div
        id="drawer"
        className={`fixed right-0 top-0 z-[99999] h-full w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 bg-white border border-[#E5E9EB] w-[40px] h-[40px] flex items-center justify-center rounded-full text-blackish hover:text-gray-700 shadow-md"
          aria-label="Close drawer"
        >
          <IoMdClose size={24} />
        </button>

        <div className="h-full overflow-y-auto px-[20px] pt-12 pb-[20px] flex flex-col gap-[12px]">
          <h2 className="mb-[12px] text-[24px] font-[600]">Calendrier 2025</h2>
          <CalendarEvent
            date="20 May, 2024"
            title="Ouverture de Kontable a partir du 1er Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here", "Status Here"]}
            image="/assets/calendar-img-1.png"
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Rendez-vous de suivi de 15 min par telephone ou en visio courant Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here"]}
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Ouverture de Soltea a partir du lundi 26 Mai 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here", "Status Here"]}
            image="/assets/calendar-img-2.png"
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Rendez-vous de suivi de 15 min par telephone ou en visio courant Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here"]}
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Rendez-vous de suivi de 15 min par telephone ou en visio courant Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here"]}
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Rendez-vous de suivi de 15 min par telephone ou en visio courant Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here"]}
          />
        </div>
      </div>
    </div>
  );
}

export const CalendarEvent = ({ date, title, time, statusText, image }) => {
  return (
    <div className="flex flex-col gap-[12px] rounded-[12px] border border-[#DFE1E7] py-[16px] px-[12px]">
      <div className="text-[14px] font-[500] text-secondary">{date}</div>
      <h3 className="font-[500] text-black">{title}</h3>
      <div className="font-[600] text-[#6F6F6F]">{time}</div>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-[204px] object-cover rounded-[8px]"
        />
      )}
      <div className="flex flex-wrap gap-[12px]">
        {statusText.map((status, index) => (
          <span
            key={index}
            className={`rounded-full px-[12px] py-[4px] text-[14px] font-[500] ${
              index === 0
                ? "bg-[#E2F2E2] text-[#478443]"
                : "bg-[#EAF5FF] text-[#2B7FFC]"
            }`}
          >
            {status}
          </span>
        ))}
      </div>
    </div>
  );
};
