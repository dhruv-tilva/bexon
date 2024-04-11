import React from "react";

const DottedLine = (props) => {
  return (
    <svg
      width="1170"
      height="2"
      viewBox="0 0 1170 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1H1170" stroke="#E7DFD7" strokeDasharray="17 17" />
    </svg>
  );
};

export default DottedLine;
