import React from "react";
import { RiTeamLine } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { MdQuestionMark } from "react-icons/md";

// NoteCard component
export function NoteCard({
  content,
  guestCount,
  acceptedCount,
  rejectedCount,
  timestamp,
}) {
  return (
    <div className="rounded-[6px] bg-white p-[16px] space-y-[12px] shadow-md">
      <div className="flex flex-wrap justify-between items-start">
        <p className="text-sm text-blackish">{content}</p>
        <div className="flex items-center gap-[8px]">
          <div className="flex space-x-[-10px]">
            <span className="inline-block w-[24px] h-[24px] flex items-center justify-center bg-[#D7EDFF] text-[#0452C8] text-[10px] font-[600] rounded-full">
              PO
            </span>
            <span className="inline-block w-[24px] h-[24px] flex items-center justify-center bg-[#FFE8EC] text-[#FF2D55] text-[10px] font-[600] rounded-full">
              AD
            </span>
            <span className="inline-block w-[24px] h-[24px] flex items-center justify-center bg-[#E6FBF1] text-[#42AB3B] text-[10px] font-[600] rounded-full">
              TP
            </span>
          </div>
          <span className="text-[10px] text-secondary">{timestamp}</span>
        </div>
      </div>

      <div className="flex items-center gap-[12px]">
        <div className="flex items-center gap-[12px] text-sm text-gray-600">
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-whtie border border-[#EFEFF4]">
            <RiTeamLine className="w-[16px] h-[16px] text-secondary" />
          </div>
          <span className="text-blackish text-[14px] font-[500]">
            {guestCount} guests
          </span>
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px] px-[12px] py-1 rounded-full bg-[#E2F1E1]  text-[#42AB3B] text-[14px] ">
            <GiCheckMark className="w-[14px] h-[14px]" />
            <span>{acceptedCount}</span>
          </div>

          <div className="flex items-center gap-[4px] px-2 py-1 rounded-full bg-[#E5E9EB] text-black text-[14px] ">
            <MdQuestionMark className="w-[14px] h-[14px]" />
            <span>{rejectedCount}</span>
          </div>
        </div>
      </div>

      <button className="text-[11px] text-black hover:text-gray-700 font-[500] py-[6px] px-[24px] rounded-full border border-[#E5E9EB] bg-[#FCFCFC] transition-colors">
        Add Note
      </button>
    </div>
  );
}

// NoteCards component
const NoteCards = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <NoteCard
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        guestCount={4}
        acceptedCount={2}
        rejectedCount={2}
        timestamp="19m Ago"
      />

      <NoteCard
        content="Another important note about the upcoming event and its details."
        guestCount={6}
        acceptedCount={4}
        rejectedCount={2}
        timestamp="1h Ago"
      />

      <NoteCard
        content="Final reminder for all participants about the meeting schedule."
        guestCount={3}
        acceptedCount={3}
        rejectedCount={0}
        timestamp="2h Ago"
      />
    </div>
  );
};

export default NoteCards;
