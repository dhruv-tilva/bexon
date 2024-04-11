import React from "react";

const RightArrow = (props) => {
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
        y="24"
        width="24"
        height="24"
        rx="12"
        transform="rotate(-90 0 24)"
        fill="#FE7E41"
      />
      <path
        d="M11.9691 16C11.9691 14.9391 12.3938 13.9217 13.1497 13.1716C13.9057 12.4214 14.9309 12 16 12M16 12C15.4707 12 14.9465 11.8965 14.4574 11.6955C13.9684 11.4945 13.524 11.1998 13.1497 10.8284C12.7754 10.457 12.4785 10.016 12.2759 9.53071C12.0733 9.04542 11.9691 8.52528 11.9691 8M16 12H8"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
