import { RiTeamLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { FiFolderMinus } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";
import { CiBookmarkMinus } from "react-icons/ci";
import { LuFileUp } from "react-icons/lu";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { PiCompass } from "react-icons/pi";
import Link from "next/link";
const menuItems = [
  { name: "Tableau de bord", icon: <MdDashboard />, path: "/" },
  {
    name: "Declarations",
    icon: <FiFolderMinus />,
    path: "/declarations",
    badge: "5",
  },
  {
    name: "Flechages",
    icon: <IoIosSwap strokeWidth={2} />,
    path: "/flechages",
  },
  {
    name: "Archives",
    icon: <CiBookmarkMinus strokeWidth={0.8} />,
    path: "/archives",
  },
  { name: "Exports", icon: <LuFileUp />, path: "/exports" },
  { name: "Tutoriel", icon: <HiOutlinePlayCircle />, path: "/tutoriel" },
];

const menuItems2 = [
  { name: "Cabinet", icon: <IoBriefcaseOutline />, path: "/cabinet" },
  { name: "Equipe", icon: <RiTeamLine />, path: "/equipe" },
];

const menuItems3 = [
  { name: "Connaissance", icon: <FaRegStar />, path: "/connaissance" },
  { name: "LinkedIn", icon: <PiCompass />, path: "/linkedin" },
];

const menus = [
  { items: menuItems },
  { items: menuItems2 },
  { items: menuItems3 },
];

const MenuContainer = ({ pathname }) => {
  return (
    <div className="space-y-[24px]">
      {menus.map((menu, index) => (
        <nav key={index} className="flex-1 space-y-[8px]">
          {menu.items.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-[8px] p-[8px] bg-white rounded-full transition-colors ${
                  isActive
                    ? "text-black border border-[#EFEFF4]"
                    : "text-secondary hover:bg-gray-50"
                }`}
              >
                <span
                  className={`w-[40px] h-[40px] flex items-center justify-center rounded-full ${
                    isActive
                      ? "border border-[#0087FF] bg-[#E8EFFF] text-bluish"
                      : ""
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                </span>
                <span className="font-[500] md:text-[17px]">{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-bluish flex items-center justify-center text-white text-[12px] font-[700] leading-[18px] min-w-[21px] min-h-[21px] px-[6.5px] pt-[2px] pb-[1.2px] rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      ))}
    </div>
  );
};

export default MenuContainer;
