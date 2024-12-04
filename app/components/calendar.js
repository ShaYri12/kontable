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
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close drawer"
        >
          <IoMdClose size={24} />
        </button>

        <div className="h-full overflow-y-auto p-6 pt-12">
          <h2 className="mb-6 text-2xl font-bold">Calendrier 2025</h2>
          <CalendarEvent
            date="20 May, 2024"
            title="Ouverture de Kontable a partir du 1er Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here", "Status Here"]}
            image="/placeholder.svg?height=150&width=300"
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Rendez-vous de suivi de 15 min par telephone ou en visio courant Fevrier 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here"]}
            image="/placeholder.svg?height=1&width=1"
          />
          <CalendarEvent
            date="20 May, 2024"
            title="Ouverture de Soltea a partir du lundi 26 Mai 2025"
            time="2:30 PM - 3:30 PM"
            statusText={["Status Here", "Status Here"]}
            image="/placeholder.svg?height=150&width=300"
          />
        </div>
      </div>
    </div>
  );
}

export const CalendarEvent = ({ date, title, time, statusText, image }) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-200 p-4">
      <div className="mb-2 text-sm text-gray-500">{date}</div>
      <h3 className="mb-1 text-lg font-semibold">{title}</h3>
      <div className="mb-2 text-sm text-gray-500">{time}</div>
      <img src={image} alt={title} className="mb-2 w-full rounded-lg" />
      <div className="flex flex-wrap gap-2">
        {statusText.map((status, index) => (
          <span
            key={index}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
          >
            {status}
          </span>
        ))}
      </div>
    </div>
  );
};
