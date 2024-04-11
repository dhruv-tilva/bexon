"use client";
import React from "react";
import Image from "next/image";
import { StarEmptyIcon, StarIcon } from "@/assets/icons";

export const SliderCard = ({ url, name, description, rating }) => {
  const fillStars = Array.from({ length: rating }, (_, index) => index + 1);
  const nonFillStars = Array.from(
    { length: 5 - fillStars.length },
    (_, index) => index + 1
  );
  return (
    <div className="embla__slide pb-5 border-b border-other-light2 md:border-none md:border-transparent flex ">
      <Image width={64} height={64} className="w-8 h-8" src={url} alt="" />
      <div className="ml-3">
        <p className="text-secondary-heading text-sm font-medium">{name}</p>
        <div className="flex items-center gap-1">
          {fillStars.length ? (
            fillStars.map((star, index) => {
              return <StarIcon key={star} className="w-5 h-5" />;
            })
          ) : (
            <></>
          )}
          {nonFillStars.length ? (
            nonFillStars.map((star, index) => {
              return <StarEmptyIcon key={star} className="w-5 h-5" />;
            })
          ) : (
            <></>
          )}
        </div>
        <p className="text-xss text-secondary-paragraph mt-2">{description}</p>
      </div>
    </div>
  );
};
