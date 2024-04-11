"use client";
import React, { useCallback, useEffect } from "react";
import { SliderCard } from "./slider-card";
import { sliderData } from "../data";
import useEmblaCarousel from "embla-carousel-react";
import { LeftArrow } from "@/assets/icons";
import RightArrow from "@/assets/icons/right-arrow";

// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
const Carousel = ({ className }) => {
  const options = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  //   const onSelect = useCallback((emblaApi) => {
  //     setPrevBtnDisabled(!emblaApi.canScrollPrev());
  //     setNextBtnDisabled(!emblaApi.canScrollNext());
  //   }, []);

  //   useEffect(() => {
  //     if (!emblaApi) return;

  //     onSelect(emblaApi);
  //     emblaApi.on("reInit", onSelect);
  //     emblaApi.on("select", onSelect);
  //   }, [emblaApi, onSelect]);

  return (
    <div className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliderData.flat().map((item, index) => (
            <SliderCard
              url={item.url}
              name={item.name}
              description={item.description}
              rating={item.rating}
              key={item.id}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-5 gap-4">
        <LeftArrow
          className="cursor-pointer"
          onClick={() => onPrevButtonClick()}
        />
        <RightArrow
          className="cursor-pointer"
          onClick={() => onNextButtonClick()}
        />
      </div>
    </div>
  );
};

export default Carousel;
