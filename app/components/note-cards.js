import React from "react";
import { FiUsers, FiCheck, FiX } from "react-icons/fi";

// NoteCard component
export function NoteCard({
  content,
  guestCount,
  acceptedCount,
  rejectedCount,
  timestamp,
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 space-y-4">
      <div className="flex justify-between items-start">
        <p className="text-sm text-gray-600">{content}</p>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FiUsers className="w-4 h-4" />
          <span>{guestCount} guests</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs">
            <FiCheck className="w-3 h-3" />
            <span>{acceptedCount}</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs">
            <FiX className="w-3 h-3" />
            <span>{rejectedCount}</span>
          </div>
        </div>
      </div>

      <button className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
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
