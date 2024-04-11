import React from "react";

export const InfoOpen = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#FE7E41" />
      <path
        d="M7 14C8.32611 14 9.59785 13.4732 10.5355 12.5355C11.4732 11.5978 12 10.3261 12 9C12 9.65661 12.1293 10.3068 12.3806 10.9134C12.6319 11.52 13.0002 12.0712 13.4645 12.5355C13.9288 12.9998 14.48 13.3681 15.0866 13.6194C15.6932 13.8707 16.3434 14 17 14"
        stroke="white"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
