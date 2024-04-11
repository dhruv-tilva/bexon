"use client";
import React, { useCallback, useEffect } from "react";
import { sliderData } from "../data";
import useEmblaCarousel from "embla-carousel-react";
import { LeftArrow, StarEmptyIcon, StarIcon } from "@/assets/icons";
import RightArrow from "@/assets/icons/right-arrow";
import Image from "next/image";

const DesktopCrousel = ({ className }) => {
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
  return (
    <div className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliderData.map((item, index) => {
            return (
              <div
                className="embla__slide divide-y divide-other-light2"
                key={index}
              >
                {item.map((_, index) => {
                  const fillStars = Array.from(
                    { length: _.rating },
                    (_, index) => index + 1
                  );
                  const nonFillStars = Array.from(
                    { length: 5 - fillStars.length },
                    (_, index) => index + 1
                  );
                  return (
                    <div
                      key={_.id}
                      className={`${index == 0 ? "pb-5" : "pt-5"} flex`}
                    >
                      <Image
                        width={64}
                        height={64}
                        className="w-12 h-12"
                        src={_.url}
                        alt=""
                      />
                      <div className="ml-3">
                        <p className="text-secondary-heading text-base font-medium">
                          {_.name}
                        </p>
                        <div className="flex items-center gap-1">
                          {fillStars.length ? (
                            fillStars.map((star, index) => {
                              return (
                                <StarIcon key={star} className="w-5 h-5" />
                              );
                            })
                          ) : (
                            <></>
                          )}
                          {nonFillStars.length ? (
                            nonFillStars.map((star, index) => {
                              return (
                                <StarEmptyIcon key={star} className="w-5 h-5" />
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </div>
                        <p className="text-sm text-secondary-paragraph mt-2">
                          {_.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-start mt-20 gap-4">
        <LeftArrow
          className="w-11 h-11 cursor-pointer"
          onClick={() => onPrevButtonClick()}
        />
        <RightArrow
          className="w-11 h-11 cursor-pointer"
          onClick={() => onNextButtonClick()}
        />
      </div>
    </div>
  );
};

export default DesktopCrousel;
