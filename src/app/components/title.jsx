import React from "react";

const Title = ({ className, children }) => {
  return (
    <h1
      className={`text-primary-heading font-semibold mt-1 text-3xl lg:text-5xl xl:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
