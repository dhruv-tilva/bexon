import Link from "next/link";
import SunGlass from "@/assets/sunglass.svg";
import Image from "next/image";
import Title from "./components/title";
import { CheckMark, DownArrow } from "@/assets/icons";
import Paragraph from "./components/paragraph";
import Button from "./components/button";
import { Video } from "./components/video";
import DottedLine from "./components/dotted-line";
import Union from "@/assets/union.svg";
import Service1 from "@/assets/service-1.png";
import Service2 from "@/assets/service-2.png";
import Service from "./components/service";
import { accordions, portfolios, services } from "./data";
import { PortfolioCard } from "./components/portfolio-card";
import { Accordion } from "./components/accordion";
import Carousel from "./components/carousel";
import Map from "@/assets/Map.svg";
import DesktopCrousel from "./components/desktop-carousel";
import RightArrow from "@/assets/icons/right-arrow";
import { Header } from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-12">
        <div className="p-4 max-w-screen-2xl mx-auto lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="lg:w-3/5">
              <p className="text-secondary-paragraphThin text-xss md:text-xs flex items-center">
                <Image
                  height={16}
                  width={16}
                  alt="Glass"
                  className="inline-block mr-1"
                  src={SunGlass.src}
                />{" "}
                GIVING YOU THE BEST DESIGNS
              </p>
              <Title>SAVING WORLD WITH GOOD DESIGNS.</Title>
            </div>
            <div className="hidden md:flex lg:w-2/5 lg:gap-12 lg:justify-end">
              <div className="">
                <h3 className="text-secondary-heading text-lg font-semibold xl:text-xl">
                  Partnership
                </h3>
                <p className="text-secondary-thin3 hover:text-primary-base transition-all duration-200 cursor-pointer text-sm xl:text-base whitespace-nowrap font-normal mt-1">
                  Get in touch with us
                </p>
              </div>
              <ul className="space-y-6 text-right">
                <li className="text-secondary-thin3 hover:text-primary-base transition-all duration-200 text-base xl:text-lg font-normal">
                  <Link href="">Email us</Link>
                </li>
                <li className="text-secondary-thin3 hover:text-primary-base transition-all duration-200 text-base xl:text-lg font-normal">
                  <Link href="">Instagram</Link>
                </li>
                <li className="text-secondary-thin3 hover:text-primary-base transition-all duration-200 text-base xl:text-lg font-normal">
                  <Link href="">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 max-w-screen-2xl mx-auto md:flex lg:px-8">
          <div className="lg:w-1/2 relative">
            <div className="flex items-center">
              <div className="flex items-center gap-1">
                <CheckMark className="w-5 h-5" />
                <span className="text-[10px] lg:text-base text-secondary-paragraphLight">
                  24/7 Online Support
                </span>
              </div>
              <div className="flex items-center gap-1 ml-6">
                <CheckMark className="w-5 h-5" />
                <span className="text-[10px] lg:text-base text-secondary-paragraphLight">
                  Quick Communication
                </span>
              </div>
            </div>
            <Paragraph className="mt-3 mb-7 lg:w-[434px] lg:text-lg lg:mb-9 lg:mt-8">
              Saving World with Good Designs. Because your satisfaction is
              everything. We are providing the best designs.
            </Paragraph>
            <Button />
            <DownArrow className="hidden cursor-pointer md:block mt-24" />
            <Image
              src={Union.src}
              className="hidden lg:block absolute top-48 right-14"
              width={100}
              height={200}
              alt=""
            />
          </div>
          <Video />
        </div>
        <div className="px-4 mt-4 max-w-screen-2xl mx-auto lg:px-8">
          <DottedLine className="w-full" />
        </div>
      </div>
      <section className="py-16">
        <div className="p-4 max-w-screen-2xl mx-auto md:grid md:grid-cols-2 md:gap-20 lg:px-8">
          <div className="md:order-2">
            <p className="text-secondary-paragraphLight text-xs">
              OUR SERVICES
            </p>

            <h4 className="uppercase font-semibold text-2xl lg:text-4xl xl:text-4xl">
              come on, we will <br /> help you buIld your
              <br /> dream project.
            </h4>
            <div className="grid grid-cols-2 gap-3 mt-7 lg:mt-16">
              <Image
                width={500}
                height={205}
                src={Service1.src}
                className="mt-5"
                alt=""
              />
              <Image width={500} height={205} src={Service2.src} alt="" />
            </div>
          </div>
          <div className="divide-y-2 md:order-1 divide-other-light1 mt-4 md:mt-0">
            {services.map((item, index) => {
              return (
                <Service
                  className={`${index !== 0 ? "pt-4 lg:pt-12" : ""}`}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
        <div className="px-4 lg:mt-16 max-w-screen-2xl mx-auto lg:px-8">
          <DottedLine className="w-full" />
        </div>
      </section>
      <section className="pb-16">
        <div className="px-4 max-w-screen-2xl mx-auto lg:px-8">
          <p className="text-secondary-paragraphLight text-xs">OUR PORTFOLIO</p>
          <h4 className="uppercase font-semibold text-2xl lg:text-4xl xl:text-4xl">
            our recent works
          </h4>
          <div className="mt-7 space-y-5 md:grid md:grid-cols-2 md:gap-5">
            {portfolios.map((item, index) => {
              return (
                <PortfolioCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  className={index == 0 ? "col-span-2" : ""}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-primary-darker py-9">
        <div className="px-4 max-w-screen-2xl mx-auto lg:px-8 md:grid md:grid-cols-3 md:gap-16 xl:gap-48">
          <div className="md:order-2">
            <p className="text-secondary-thin text-xs">OUR PROCESS</p>
            <h4 className="uppercase text-white font-semibold text-2xl lg:text-[33px] lg:leading-8">
              our process of working
            </h4>
          </div>
          <div className="mt-7 md:col-span-2 md:grid md:gap-5 md:grid-cols-2 md:mt-0 md:order-1">
            {accordions.map((item, index) => {
              return (
                <Accordion
                  title={item.title}
                  description={item.description}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-9">
        <div className="px-4 max-w-screen-2xl mx-auto md:grid md:grid-cols-2 md:gap-16 xl:gap-40 lg:px-8">
          <div className="mb-7">
            <p className="text-secondary-thin text-xs">TESTIMONIAl</p>
            <h4 className="uppercase font-semibold text-2xl lg:text-4xl xl:text-4xl">
              what client say <br /> about us
            </h4>
            <Carousel className="md:!hidden" />
            <DesktopCrousel className="!hidden md:!block" />
          </div>
          <div>
            <Image
              className="w-full"
              width={500}
              height={429}
              src={Map.src}
              alt=""
            />
          </div>
        </div>
        <div className="px-4 my-7 lg:mt-16 max-w-screen-2xl mx-auto lg:px-8">
          <DottedLine className="w-full" />
        </div>
      </section>
      <section className="py-7" id="contact">
        <div className="px-4 max-w-screen-2xl mx-auto md:flex flex-col items-center lg:px-8">
          <p className="text-secondary-thin text-xs md:text-center">
            CONTACT US
          </p>
          <h4 className="uppercase font-semibold max-w-xl text-2xl md:text-center mb-3 md:mb-12 md:mt-1 lg:text-4xl xl:text-4xl">
            let's work on <br /> something cool together
          </h4>
          <RightArrow className="w-7 h-7 cursor-pointer md:w-16 md:h-16" />
        </div>
        <div className="px-4 my-7 lg:mt-16 max-w-screen-2xl mx-auto lg:px-8">
          <DottedLine className="w-full" />
        </div>
      </section>
      <Footer />
    </>
  );
}
