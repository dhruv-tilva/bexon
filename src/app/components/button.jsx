import React from "react";

const Button = () => {
  return (
    <button className="relative group">
      <span className="bg-primary-base border-2 border-transparent relative z-10 text-xss md:text-sm text-white group-hover:text-primary-base group-hover:bg-white transition-all duration-200 hover:border-primary-base block px-6 md:px-12 py-3 w-full lg:text-lg">
        START A PROJECT
      </span>
      <span className="border-secondary-heading absolute top-2 left-2 md:top-3 md:left-[10px] group-hover:border-primary-base transition-all duration-200 border-2 block h-11 lg:h-[52px] w-full"></span>
    </button>
  );
};

export default Button;
