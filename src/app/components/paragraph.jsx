import React from "react";

const Paragraph = ({ className, children }) => {
  return (
    <p className={`text-secondary-paragraph text-xs ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
