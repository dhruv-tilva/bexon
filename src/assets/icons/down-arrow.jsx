"use client";
import React from "react";

export const DownArrow = (props) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }}
      {...props}
    >
      <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#D8D0C7" />
      <path
        d="M14 21.9381C16.1218 21.9381 18.1566 22.7875 19.6569 24.2994C21.1572 25.8113 22 27.8619 22 30M22 30C22 28.9413 22.207 27.893 22.6089 26.9149C23.011 25.9368 23.6003 25.048 24.3431 24.2994C25.0861 23.5508 25.968 22.957 26.9386 22.5518C27.9092 22.1467 28.9494 21.9381 30 21.9381M22 30V14"
        stroke="#110804"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
