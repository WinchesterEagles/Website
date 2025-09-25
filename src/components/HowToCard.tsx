"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";

export interface HowToCard {
  pagePrompt: string;
  tutorialSteps: string[];
}

export function HowToWindow({ howToCard }: { howToCard: HowToCard }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className=" cursor-pointer text-lg text-blue-900"
      >
        {howToCard.pagePrompt}
      </a>

      <div
        className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50
                    transition-all duration-300 ease-out
                    ${
                      open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
      >
        <div
          className={`bg-white rounded-2xl p-4 shadow-lg max-h-[80vh] overflow-y-auto w-11/12 max-w-3xl
                      transform transition-all duration-200 ease-out
                      ${open ? "scale-100" : "scale-60"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">{howToCard.pagePrompt}</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX className=" text-black w-8 h-8" />
            </button>
          </div>

          {/* Scrollable content */}
          <ul className="text-gray-700 space-y-2 list-disc px-2">
            {howToCard.tutorialSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
