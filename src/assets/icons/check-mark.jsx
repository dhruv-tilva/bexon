"use client";
import React from "react";

export const CheckMark = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="#F9EBDB" />
      <path
        d="M5 8L7 10L11 6"
        stroke="#FE7E41"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
