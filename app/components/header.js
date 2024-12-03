"use client";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import ThemeSwitcher from "./theme-switcher";

export function Header() {
  return (
    <header
      className="fixed bg-white z-[5] py-[20px] xl:px-[60px] md:px-[20px] px-4 border-b border-white flex items-center justify-between"
      style={{
        boxShadow: "0px 1px 0px 0px #C8C7CC80",
        width: "-webkit-fill-available !important",
      }}
    >
      <h1 className="text-[29px] font-[600]">Tableau de bord</h1>
      <div className="md:flex hidden items-center gap-[36px]">
        <Settings />
        <Profile />
      </div>
    </header>
  );
}

export function Settings() {
  return (
    <div className="flex gap-[16px] items-center">
      <ThemeSwitcher />
      <button className="w-[50px] h-[50px] flex items-center justify-center bg-white border border-[#EFEFF4] hover:bg-gray-100 rounded-full">
        <span className="relative">
          <MdOutlineNotificationsNone className="w-[20px] h-[20px] text-secondary" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF2D55] absolute top-[2px] right-[2px]"></div>
        </span>
      </button>
      <button className="w-[50px] h-[50px] flex items-center justify-center bg-white border border-[#EFEFF4] hover:bg-gray-100 rounded-full">
        <IoSettingsOutline className="w-[20px] h-[20px] text-secondary" />
      </button>
    </div>
  );
}

export function Profile() {
  return (
    <div className="flex items-center gap-[8px] lg:pe-0 md:pe-[50px] ps-[10px]">
      <div className="md:order-1 order-2 md:text-right space-y-[4px]">
        <div className="text-sm font-medium">Abidin Jajang</div>
        <div className="text-xs text-gray-500">Admin</div>
      </div>
      <div className="md:order-2 order-1 w-[50px] h-[50px] rounded-full">
        <img
          src="/assets/profile.png"
          className="rounded-full h-full w-full object-cover"
          alt="Profile"
        />
      </div>
    </div>
  );
}
