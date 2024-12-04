"use client";
import Image from "next/image";
import { StatCard } from "./stats";

export default function Flechages() {
  const flechage = [
    {
      title: "Externe",
      value: 56,
      change: { value: 5.5, timeframe: "than last day" },
      icon: (
        <Image src="/assets/Show.png" alt="Show icon" width={20} height={20} />
      ),
      iconBg: "bg-[#FCE9E2]",
    },
    {
      title: "Kontable",
      value: 128,
      change: { value: 5.5, timeframe: "than last day" },
      icon: (
        <Image
          src="/assets/Heart.png"
          alt="Heart icon"
          width={20}
          height={20}
        />
      ),
      iconBg: "bg-[#EBEDFF]",
    },
    {
      title: "En attente",
      value: 245,
      change: { value: -5.5, timeframe: "than last day" },
      icon: (
        <Image src="/assets/Time.png" alt="Time icon" width={20} height={20} />
      ),
      iconBg: "bg-[#EAF5FF]",
    },
    {
      title: "Fléché",
      value: 245,
      change: { value: -5.5, timeframe: "than last day" },
      icon: (
        <Image
          src="/assets/Arrow-Right.png"
          alt="Arrow Right icon"
          width={20}
          height={20}
        />
      ),
      iconBg: "bg-[#F9DDFE]",
    },
    {
      title: "Paye",
      value: 245,
      change: { value: -5.5, timeframe: "than last day" },
      icon: (
        <Image
          src="/assets/Tick-Square.png"
          alt="Tick Square icon"
          width={20}
          height={20}
        />
      ),
      iconBg: "bg-[#DDFEDE]",
    },
  ];

  return (
    <div className="w-full mx-auto bg-white rounded-[6px] border border-[#E5E9EB]">
      <div className="px-[24px] py-[24px]">
        <h2 className="text-[19px] md:text-[24px] font-[600] pb-[16px] border-b-[2.64px] border-[#F6F6F6]">
          Fléchages
        </h2>
      </div>
      <div className="px-[16px]">
        <div className="mb-[16px] border-b-[2.64px] border-[#F6F6F6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-y-[30px] pb-[16px] md:gap-x-0 gap-x-[20px]">
            {flechage.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
