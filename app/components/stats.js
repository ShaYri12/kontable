"use client";

import Image from "next/image";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

export function StatCard({ title, value, change, icon, iconBg }) {
  const isPositive = change.value > 0;

  return (
    <div className="flex flex-col px-4 py-4">
      <div className="flex justify-between items-center gap-1">
        <h3 className="text-[18px] md:text-[20px] text-blackish font-[400]">
          {title}
        </h3>
        <div
          className={`${iconBg} w-[50px] h-[50px] w-min-[50px] min-h-[50px] rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
      <p className="text-[32px] text-[#2B303C] font-[700] my-[9px]">{value}</p>
      <div className="flex flex-wrap items-center text-sm">
        <span
          className={`text-[15.84px] flex items-center justify-center rounded-full me-[4px] ${
            isPositive
              ? "text-[#478443] bg-[#4784431F] w-[21px] h-[21px]"
              : "text-[#F34343] bg-[#F343431A] w-[21px] h-[21px]"
          } font-[500]`}
        >
          {isPositive ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />}
        </span>
        <span
          className={`${
            isPositive ? "text-[#478443]" : "text-[#F34343]"
          } font-medium`}
        >
          {isPositive ? "+" : ""}
          {change.value}%
        </span>
        <span className="text-[#A2A5AE] ml-1">{change.timeframe}</span>
      </div>
    </div>
  );
}

export function StatsPanel() {
  const stats = [
    {
      title: "A Verifier",
      value: 56,
      change: { value: 5.5, timeframe: "than last day" },
      icon: (
        <Image src="/assets/Show.png" alt="Show icon" width={20} height={20} />
      ),
      iconBg: "bg-[#FCE9E2]",
    },
    {
      title: "Pret a l'envoi",
      value: 128,
      change: { value: 5.5, timeframe: "than last day" },
      icon: (
        <Image
          src="/assets/Message.png"
          alt="Message icon"
          width={20}
          height={20}
        />
      ),
      iconBg: "bg-[#EBEDFF]",
    },
    {
      title: "Envoye",
      value: 245,
      change: { value: -5.5, timeframe: "than last day" },
      icon: (
        <Image src="/assets/Send.png" alt="Send icon" width={20} height={20} />
      ),
      iconBg: "bg-[#EAF5FF]",
    },
    {
      title: "Telecharge",
      value: 245,
      change: { value: -5.5, timeframe: "than last day" },
      icon: (
        <Image
          src="/assets/Paper-Download.png"
          alt="Paper Download icon"
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
          Déclarations
        </h2>
      </div>
      <div className="px-[16px]">
        <div className="mb-[16px] border-b-[2.64px] border-[#F6F6F6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-y-[30px] pb-[16px] md:gap-x-0 gap-x-[20px]">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
