"use client";
import React, { useState } from "react";
import Paragraph from "./paragraph";
import { InfoOpen, InfoClose } from "@/assets/icons";

export const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`p-5 ${isOpen ? "bg-stone-800" : ""}`}>
      <div className={`flex justify-between ${isOpen ? "mb-3" : "mb-0"}`}>
        <h4 className="text-secondary-thin2 text-base break-words md:w-52">
          {title}
        </h4>
        {isOpen ? (
          <InfoOpen
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <InfoClose
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      <Paragraph
        className={`text-secondary-thin3 text-xs overflow-hidden transition-all duration-300 ${
          isOpen ? "h-fit" : "h-0"
        }`}
      >
        {description}
      </Paragraph>
    </div>
  );
};
