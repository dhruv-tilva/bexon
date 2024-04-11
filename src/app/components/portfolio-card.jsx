import Image from "next/image";
import React from "react";
import Paragraph from "./paragraph";

export const PortfolioCard = ({ url, title, description, className }) => {
  return (
    <div className={className}>
      <Image width={500} height={600} src={url} className="w-full" alt="" />
      <h3 className="text-secondary-heading text-lg mt-2 font-semibold uppercase">
        {title}
      </h3>
      <Paragraph className="text-xss md:w-96 md:text-sm">
        {description}
      </Paragraph>
    </div>
  );
};
