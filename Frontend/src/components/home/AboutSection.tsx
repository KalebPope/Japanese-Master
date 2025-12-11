import { RefObject } from "react";

type PropsType = {
  ref?: RefObject<HTMLDivElement | null>;
  brushColour: string;
  title: string;
  paragraphs: string[];
  middleImage: string;
  slidenumber: number;
};

export default function AboutSection(props: PropsType) {
  return (
    <>
      {/*------------*/}
      {/*About section*/}
      {/*------------*/}
      <div
        ref={props.ref}
        data-slidenumber={props.slidenumber}
        className={`h-[200vh] sticky top-0 overflow-hidden font-intervariable font-extrabold bg-white`}>
        {/*Brush*/}
        <div className="h-screen about-section relative -translate-x-20 opacity-0 transition-all duration-700 ease-out flex justify-center items-center">

          <div className="absolute right-10 top-1/2 flex flex-col space-y-2 z-50">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 ${
                  index === 12
                    ? "bg-red-500"
                    : "border-2 border-red-500 bg-transparent"
                } rounded-full`}
              />
            ))}
          </div>

          <img
            src={`/images/home/${props.brushColour}`}
            className="absolute -bottom-10 left-0 w-600 h-300 -rotate-10"
          />

          {/*Course text and paragraphs*/}
          <div className="grid grid-cols-[2fr_1fr_2fr] justify-center items-center">
            <div className="z-10 justify-self-end pt-50">
              <h1 className="text-8xl font-sukajan text-center pb-5 text-white">
                {props.title}
              </h1>
              {props.paragraphs.map((value, index) => (
                <p
                  key={index}
                  className="font-intervariable text-xl w-150 pb-2 pt-5 text-white">
                  {value}
                </p>
              ))}
            </div>

            {/*Middle image*/}
            <img
              src={`/images/home/${props.middleImage}`}
              className={`${
                props.middleImage == "samurai.png" ? "pl-7" : ""
              } z-10`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
