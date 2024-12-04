"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import Image from "next/image";
import MenuContainer from "./MenuContainer";
import { Profile, Settings } from "./header";

export function Sidebar() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const sidebarRef = useRef(null);

  const checkWidth = () => {
    if (window.innerWidth >= 1024) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      if (window.innerWidth < 1024) {
        setIsSmall(false);
        setIsDrawerOpen(false);
      }
    }
  };

  useEffect(() => {
    // Check width on mount
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Add event listener for clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkWidth);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div
        className={`${
          isSmall ? "hidden" : "flex"
        } fixed right-[10px] md:top-[16px] top-[6px] z-[22]`}
      >
        <button
          onClick={toggleSidebar}
          className="rounded-[15px] lg:px-[23px] px-[10px] py-[7.9px] md:text-[20px] font-[500] leading-[24.2px]  transition"
        >
          {isDrawerOpen ? (
            <IoIosCloseCircle color="#000000" size={35} />
          ) : (
            <IoMenu color="#000000" size={35} />
          )}
        </button>
      </div>
      <div
        className={`h-full lg:flex hidden sidebar-behind top-0 left-0 ${
          isSmall
            ? "xl:w-[300px] xl:min-w-[300px] w-[240px] min-w-[240px]"
            : "hidden"
        }`}
      ></div>

      <div
        ref={sidebarRef}
        className={`custom-scrollbar fixed top-0 bg-white h-screen overflow-y-auto border-r transition-all duration-200 lg:shadow-none shadow-md xl:px-[24px] px-4 ${
          isSmall
            ? "xl:w-[300px] xl:min-w-[300px] w-[240px] min-w-[240px] left-0 z-[10]" // Left side for smaller screens
            : "max-w-[320px] w-full right-0 z-[20]" // Right side for larger screens
        } ${
          isDrawerOpen
            ? "lg:transalte-x-0 translate-x-0"
            : "lg:translate-x-0 translate-x-full"
        } transition-transform flex flex-col`}
      >
        <div className="p-[20px] lg:mt-[10px] mt-[5px] md:mb-[30px] flex gap-[8px] items-center">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={37.39}
            height={39.79}
          />
          <h1 className="text-3xl font-[600] text-[#140E34]">kontable</h1>
        </div>

        <div className="md:hidden flex items-center my-[10px]">
          <Profile />
        </div>
        <div className="md:hidden flex items-center justify-center my-[10px]">
          <Settings />
        </div>

        <MenuContainer pathname={pathname} />

        <div
          className="text-white rounded-xl px-[14px] pt-[31px] mt-[46px] mb-[70px] text-center"
          style={{
            background: "linear-gradient(124.16deg, #418DFF 0%, #3400B1 98.9%)",
          }}
        >
          <h3 className="font-[600] mb-[22px]">Always Here for You</h3>
          <p className="text-[14px] mb-[20px]">
            Your dedicated connection to personalized support.
          </p>
          <div className="bg-white text-black rounded-[12px] mb-[-50px] px-[16px] py-[20px] border border-[#BDBDBD]">
            <div className="flex flex-col items-center justify-center mb-3">
              <h5 className="font-[600] mb-[20px]">Contact Privilege</h5>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-200">
                <img
                  src="/assets/contact-img.jpg"
                  alt="contact img"
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-[500] mt-[8px]">Pundjabi Ahay</h5>
            </div>
            <div className="flex gap-[8px] mt-[12px]">
              <button className="flex-1 bg-black text-white text-[12px] p-[11px] rounded-full">
                Contact
              </button>
              <button className="flex-1 bg-white text-[12px] p-[11px] rounded-full border border-black">
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
