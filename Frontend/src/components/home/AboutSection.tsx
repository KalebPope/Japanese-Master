import { RefObject, useState } from "react";

type PropsType = {
  ref?: RefObject<HTMLDivElement | null>;
  brushColour: string;
  title: string;
  paragraphs: string[];
  middleImage: string;
  slideNumber: number;
  slidesCount: number;
  currentSlide: number
};

export default function AboutSection(props: PropsType) {

  return (
    <>
      {/*------------*/}
      {/*About section*/}
      {/*------------*/}
      <div
        ref={props.ref}
        data-slideNumber={props.slideNumber}
        className="about-section h-screen relative flex justify-center items-center overflow-hidden snap-center font-intervariable font-extrabold -translate-x-20 opacity-0 transition-all duration-700 ease-out">
        {/*Brush*/}
        <img
          src={`/images/${props.brushColour}`}
          className="absolute -bottom-10 left-0 w-600 h-300 -rotate-10"
        />

        <div className="grid grid-cols-[2fr_1fr_2fr] justify-center items-center">
          {/*Course text and paragraphs*/}
          <div className="z-10 justify-self-end pt-50">
            <h1 className="text-8xl font-sukajan text-center pb-5 text-white">
              {props.title}
            </h1>

            <div className="">
              {props.paragraphs.map((value, index) => (
                <p
                  key={index}
                  className="font-intervariable text-xl w-150 pb-5 text-white">
                  {value}
                </p>
              ))}
            </div>
          </div>

          {/*Middle image*/}
          <img src={`/images/${props.middleImage}`} className={`${props.middleImage == "samurai.png" ? "pl-7" : ""} z-10`} />
        </div>

        {/*Slide selection*/}
        <div className="absolute right-10 flex flex-col space-y-2">
          {Array.from({ length: props.slidesCount }).map((value, index) => (
            <div key={index} className={`w-3 h-3 ${index ===  props.currentSlide ? "bg-red-500" : "border-2 border-red-500 bg-transparent" } rounded-full`}></div>
          ))}
        </div>
      </div>
    </>
  );
}
