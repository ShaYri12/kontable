import {
  RiUserAddLine,
  RiFileAddLine,
  RiSettings4Line,
  RiEyeLine,
  RiCalendarLine,
} from "react-icons/ri";

const cards = [
  {
    title: "Ajouter des collaborateurs",
    description: "Lorem ipsum Ajouter des collaborateurs",
    icon: "/assets/dashboard-card-icon1.png",
    color: "orange",
    imgSrc: "/assets/dashboard-card-bg1.png",
  },
  {
    title: "Ajouter des declarations",
    description: "Lorem ipsum Ajouter des flores de connaissance",
    icon: "/assets/dashboard-card-icon2.png",
    color: "green",
    imgSrc: "/assets/dashboard-card-bg2.png",
  },
  {
    title: "Parametrer le cabinet",
    description: "Lorem ipsum Ajouter des Parametrer le cabinet",
    icon: "/assets/dashboard-card-icon3.png",
    color: "pink",
    imgSrc: "/assets/dashboard-card-bg3.png",
  },
  {
    title: "Base de connaissance",
    description: "Lorem ipsum Ajouter Base de la connaissance",
    icon: "/assets/dashboard-card-icon4.png",
    color: "blue",
    imgSrc: "/assets/dashboard-card-bg4.png",
  },
  {
    title: "Calendrier 2025",
    description: "Lorem ipsum Ajouter des Base de Calendrier 2025",
    icon: "/assets/dashboard-card-icon5.png",
    color: "cyan",
    imgSrc: "/assets/dashboard-card-bg5.png",
  },
];

const colorVariants = {
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  pink: "bg-pink-50 text-pink-500",
  blue: "bg-blue-50 text-blue-500",
  cyan: "bg-cyan-50 text-cyan-500",
};

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-[12px] overflow-hidden px-[22px] py-[22px] hover:shadow-lg transition-shadow relative"
        >
          <img
            src={card.imgSrc}
            alt="background img"
            className="w-full h-full object-cover absolute z-[1] left-0 top-0"
          />
          <div className="relative z-[2]">
            <img
              src={card.icon}
              alt={card.title}
              className="w-[162px] h-auto mx-auto"
            />
            <h3 className="font-[500] text-[18px] md:text-[20px] mb-[8px] text-black mt-[35px] break-words">
              {card.title}
            </h3>
            <p className="text-[12px] text-secondary">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
