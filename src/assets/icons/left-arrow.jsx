import React from "react";

export const LeftArrow = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="-0.5"
        y="-0.5"
        width="23"
        height="23"
        rx="11.5"
        transform="matrix(0 -1 -1 0 23 23)"
        stroke="#D8D0C7"
      />
      <path
        d="M12.0309 16C12.0309 14.9391 11.6062 13.9217 10.8503 13.1716C10.0943 12.4214 9.06907 12 8 12M8 12C8.52935 12 9.05351 11.8965 9.54257 11.6955C10.0316 11.4945 10.476 11.1998 10.8503 10.8284C11.2246 10.457 11.5215 10.016 11.7241 9.53071C11.9267 9.04542 12.0309 8.52528 12.0309 8M8 12H16"
        stroke="#110804"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
