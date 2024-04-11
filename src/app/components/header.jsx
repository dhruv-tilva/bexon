"use client";
import React, { useEffect, useState } from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { links } from "../data";
import { CrossIcon, MenuIcon } from "@/assets/icons";

export const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      className={`bg-primary-light fixed transition-all duration-500 top-0 z-20 w-full ${
        isShadow && "shadow-xl"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 lg:px-8 max-w-screen-2xl mx-auto w-full">
        <Logo
          onClick={() => {
            document
              .getElementById("header")
              .scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          className="cursor-pointer transition-all duration-200 hover:text-primary-base"
        />
        <ul className="hidden md:flex gap-12 items-center justify-between">
          {links.map((link, index) => {
            return (
              <li
                key={link.id}
                className={`text-base transition-all duration-200 ${
                  link.label == "Home"
                    ? "font-bold text-primary-base"
                    : "hover:text-primary-base"
                }`}
              >
                <Link href="#">{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className="relative z-20 md:hidden">
          <div className="flex items-center">
            {isToggle ? (
              <CrossIcon
                className="transition-all duration-200 cursor-pointer hover:text-primary-base"
                onClick={() => setIsToggle(false)}
              />
            ) : (
              <MenuIcon
                className="transition-all duration-200 cursor-pointer hover:text-primary-base"
                onClick={() => setIsToggle(true)}
              />
            )}
          </div>
          <ul
            className={`fixed top-0 bg-primary-light flex flex-col items-center justify-center gap-5 right-[-2px] bottom-0 overflow-hidden z-[-1] border-l-2 border-primary-base space-y-4 max-w-xl transition-width duration-300 ease-in-out delay-0, ${
              isToggle ? "w-full" : "w-0"
            }`}
          >
            <div className="p-6 space-y-10 sm:space-y-12 text-center">
              {links.map((link, index) => {
                return (
                  <li key={link.id}>
                    <Link
                      href="#"
                      className="text-lg text-secondary-paragraphThin transition-all duration-200 hover:text-primary-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};
