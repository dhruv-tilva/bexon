import Link from "next/link";
import React from "react";
import Paragraph from "./paragraph";

const Service = ({ title, description, className }) => {
  return (
    <div className={`pb-4 lg:pb-12 ${className}`}>
      <h4 className="text-secondary-heading text-lg font-semibold">{title}</h4>
      <div className="mt-1 flex items-end justify-between">
        <div>
          {description.map((item, index) => {
            return (
              <Paragraph className="text-xss md:text-xs" key={index}>
                {item}
              </Paragraph>
            );
          })}
        </div>
        <Link
          href="#"
          className="text-secondary-heading hover:text-primary-base transition-all duration-200 font-medium text-xs inline-block"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Service;
