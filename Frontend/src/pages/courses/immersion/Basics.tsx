import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Basics() {

  //Todo: put this logic into its own useHook
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

    const preventScroll = (e: Event) => {
    if (currentSlide === 0 || currentSlide === 2) {
      e.preventDefault();
    }
  };


  const scroll = (direction: string) => {

    if (scrollRef.current) {

      if (direction == "Left" && currentSlide > 0) {

        scrollRef.current.scrollBy({ left: -1000, behavior: "smooth" });

        setCurrentSlide(currentSlide - 1);

      } else if (direction == "Right" && currentSlide < 2) {

        scrollRef.current.scrollBy({ left: 1000, behavior: "smooth" });

        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  useEffect(() => {

    if (scrollRef.current) {

      scrollRef.current.scrollLeft = 1000;

    }

  }, []);

  return (
    <>
      <div className="flex items-center relative">
        <div
          ref={scrollRef}
          className="relative flex w-full gap-6 snap-x snap-center snap-mandatory overflow-x-auto scroll-hide h-calc justify-items-center items-center">
          <div className="shrink-0 snap-center">
            <span className="w-250 h-150 shrink-0 flex items-center justify-center" />
          </div>
          <div className="shrink-0 snap-center relative">
            <Link
              to="introduction"
              className="bg-custom bg-cover w-250 h-150 flex items-center justify-center">
              Introduction
            </Link>
          </div>
          <div className="shrink-0 snap-center">
            <a className="bg-custom bg-cover w-250 h-150 flex items-center justify-center">
              Introduction
            </a>
          </div>
          <div className="shrink-0 snap-center">
            <a className="bg-custom bg-cover w-250 h-150 flex items-center justify-center">
              Introduction
            </a>
          </div>
          <div className="shrink-0 snap-center">
            <span className="w-250 h-150 shrink-0 flex items-center justify-center" />
          </div>
        </div>
        <button
          className={`absolute items-center flex left-0 ${
            currentSlide == 0 ? "text-[#ffffff26]" : "text-white"
          } ml-10 bg-black text-5xl font-bold`}
          onClick={() => scroll("Left")}>
          &#8810;
        </button>
        <button
          className={`absolute right-0 ${
            currentSlide == 2 ? "text-[#ffffff26]" : "text-white"
          } mr-10 bg-black text-5xl font-bold`}
          onClick={() => scroll("Right")}>
          &#8811;
        </button>
      </div>
    </>
  );
}
