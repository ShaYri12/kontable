"use client";
import { RxDotsHorizontal } from "react-icons/rx";

export function PieChart({
  title = "Chart Title",
  item1Name = "Item 1",
  item2Name = "Item 2",
  item3Name = "Item 3",
}) {
  return (
    <div className="w-full px-[20px] py-[20px] bg-white border border-[#E3E3E3] rounded-[6px]">
      <div className="flex justify-between items-center mb-[34px]">
        <h2 className="text-[20px] font-[600] text-blackish">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <RxDotsHorizontal className="h-[26px] w-[26px]" />
        </button>
      </div>

      <div className="relative w-full aspect-square max-w-[300px] mx-auto px-[5px]">
        <div className="absolute z-[2] flex items-center justify-center">
          <img
            src="/assets/pie-chart.png"
            alt={`${title} donut chart`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 mt-[34px]">
        <div className="flex items-center justify-center gap-2">
          <div className="w-[8px] h-[8px] rounded-[2px] bg-[#B642BD]"></div>
          <span className="text-blackish font-[300] md:text-[20px] text-[18px] w-fit">
            {item1Name}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[8px] h-[8px] rounded-[2px] bg-[#42AB3B]"></div>
          <span className="text-blackish font-[300] md:text-[20px] text-[18px] w-fit">
            {item2Name}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[8px] h-[8px] rounded-[2px] bg-bluish"></div>
          <span className="text-blackish font-[300] md:text-[20px] text-[18px] w-fit">
            {item3Name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PieCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
      <PieChart
        title="Taxes"
        item1Name="Lorem Ipsum"
        item2Name="Lorem"
        item3Name="Dolor Sit"
      />
      <PieChart
        title="Collaborateurs"
        item1Name="Lorem Ipsum"
        item2Name="Lorem"
        item3Name="Dolor Sit"
      />
      <PieChart
        title="Fléchages"
        item1Name="Lorem Ipsum"
        item2Name="Lorem"
        item3Name="Dolor Sit"
      />
    </div>
  );
}
