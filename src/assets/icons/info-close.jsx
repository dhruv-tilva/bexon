import React from "react";

export const InfoClose = (props) => {
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
      <rect
        width="2"
        height="8"
        rx="1"
        transform="matrix(0.965927 0.258816 -0.258822 0.965925 11.6816 9.32666)"
        fill="white"
      />
      <circle
        cx="1"
        cy="1"
        r="1"
        transform="matrix(0.965927 0.258816 -0.258822 0.965925 12.458 6.42871)"
        fill="white"
      />
    </svg>
  );
};
