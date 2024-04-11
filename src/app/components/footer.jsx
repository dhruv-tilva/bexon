import React from "react";
import { links } from "../data";
import Link from "next/link";
import { UnionRight } from "@/assets/icons";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 px-4 lg:px-8 bg-primary-light">
      <div className="max-w-screen-2xl mx-auto md:flex md:justify-between">
        <div className="w-1/3">
          <h4 className="text-sm md:text-xl font-medium w-full pb-1 border-b uppercase border-other-light2">
            menu
          </h4>
          <ul className="mt-5 flex flex-col gap-2 md:flex-row md:items-center md:gap-5">
            {links.map((item, index) => {
              return (
                <li key={item.id}>
                  <Link
                    className="text-sm whitespace-nowrap text-secondary-paragraph transition-all duration-200 hover:text-primary-base"
                    href="#"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-2/5 mt-5 md:mt-0">
          <h4 className="text-sm md:text-xl font-medium w-full pb-1 border-b uppercase border-other-light2">
            follow us here
          </h4>
          <ul className="mt-5 flex w-full flex-col gap-2 md:w-2/5">
            <li className="group w-full flex items-center justify-between cursor-pointer border-b border-other-light2 pb-2">
              <span className="text-xs md:text-sm text-secondary-paragraph transition-all duration-200 group-hover:text-primary-base">
                Instagram
              </span>
              <UnionRight className=" transition-all duration-200 group-hover:text-primary-base" />
            </li>
            <li className="group w-full flex items-center justify-between cursor-pointer border-b border-other-light2 pb-2">
              <span className="text-xs md:text-sm text-secondary-paragraph transition-all duration-200 group-hover:text-primary-base">
                Twitter
              </span>
              <UnionRight className="transition-all duration-200 group-hover:text-primary-base" />
            </li>
            <li className="group w-full flex items-center justify-between cursor-pointer border-b border-other-light2 pb-2">
              <span className="text-xs md:text-sm text-secondary-paragraph transition-all duration-200 group-hover:text-primary-base">
                Email
              </span>
              <UnionRight className=" transition-all duration-200 group-hover:text-primary-base" />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto md:flex md:items-center mt-5 pt-3 md:mt-8 md:border-t md:border-other-light2 md:justify-between">
        <p className="text-xss md:text-base text-secondary-paragraphThin md:mt-0">
          Security & Privacy
        </p>
        <p className="text-xss md:text-base text-secondary-paragraphThin mt-1 md:mt-0">
          © 2022 UIHUT All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
