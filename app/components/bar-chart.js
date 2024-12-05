"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { id: 1, sent: 35, pending: 15 },
  { id: 2, sent: 20, pending: 15 },
  { id: 3, sent: 25, pending: 20 },
  { id: 4, sent: 30, pending: 15 },
  { id: 5, sent: 40, pending: 20 },
  { id: 6, sent: 35, pending: 10 },
  { id: 7, sent: 40, pending: 15 },
  { id: 8, sent: 30, pending: 25 },
  { id: 9, sent: 35, pending: 15 },
  { id: 10, sent: 30, pending: 10 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const total = payload[0].value + payload[1].value;
    return (
      <div
        className="bg-[#EFEFF4] border border-[#C8C7CC66] rounded-[8px]"
        style={{
          boxShadow: "0px 2px 10px 0px #0000001A",
        }}
      >
        <p className="px-[8px] text-[12px] font-[400] pb-[4px] pt-[2px]">{`Oct ${label}, 2024`}</p>
        <div className="space-y-[6px] bg-white rounded-[8px] p-[8px] bg-white">
          <div className="flex items-center gap-[8px]">
            <div className="h-[10px] w-[10px] rounded-full border-[2px] border-[#0283FD59] bg-white" />
            <span className="text-[12px] font-[400] text-[#666666]">
              Pret a l&apos;envoi
            </span>
            <span className="ps-1 ml-auto text-[12px] font-[400] text-black">
              {payload[1].value}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="h-[8px] w-[8px] rounded-full border-[2px] border-[#0283FD] bg-white" />
            <span className="text-[12px] font-[400] text-[#666666]">
              envoyé
            </span>
            <span className="ps-1 ml-auto text-[12px] font-[400] text-black">
              {payload[0].value}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="h-[8px] w-[8px] rounded-full border-[2px] border-[#08B787] bg-white" />
            <span className="text-[12px] font-[400] text-[#666666]">
              Temps par déclaration
            </span>
            <span className="ps-1 ml-auto text-[12px] font-[400] text-black">
              {(total / 60).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function StackedBarChart() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-[235px] w-full pt-[25px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -20,
            bottom: 0,
          }}
          onMouseEnter={handleMouseEnter}
        >
          <XAxis
            dataKey="id"
            tickLine={false}
            axisLine={false}
            fontSize={12}
            tickMargin={8}
            color="#CDCDCD"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            fontSize={12}
            tickFormatter={(value) => `${value}`}
            tickMargin={8}
            ticks={[0, 25, 50]}
            color="#CDCDCD"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="sent"
            fill="#0283FD"
            radius={[0, 0, 4, 4]}
            stackId="stack"
          />
          <Bar
            dataKey="pending"
            fill="#0283FD59"
            radius={[4, 4, 0, 0]}
            stackId="stack"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
