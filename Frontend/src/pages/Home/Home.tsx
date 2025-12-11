import { useEffect, useRef, useState } from "react";
import AlternatingText from "../../components/home/AlternatingText";
import AboutSection from "../../components/home/AboutSection";

export default function Home() {
  const secondPageRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (secondPageRef.current) {
      secondPageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 3;

  useEffect(() => {
    const elements = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-slidenumber"));
            setCurrentSlide(index);
            entry.target.classList.add("translate-x-0", "opacity-100");
            entry.target.classList.remove("-translate-x-20", "opacity-0");
          } else {
            entry.target.classList.add("-translate-x-20", "opacity-0");
            entry.target.classList.remove("translate-x-0", "opacity-100");
          }
        });
      },
      { threshold: 0.4 }
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);


  return (
    <>
      {/*------------*/}
      {/*Landing section*/}
      {/*------------*/}
      <div className="h-screen relative flex flex-col justify-center items-center snap-proximity snap-center">
        {/*Semi circle shape*/}
        <div className="absolute bottom-100 left-1/2 -translate-x-1/2 w-192 h-96 bg-red-500 rounded-t-full -z-1"></div>

        {/*Grid container*/}
        <div className="max-w-7xl mx-auto grid grid-cols-[2fr_1fr_2fr] place-items-center justify-center items-center gap-4 pb-[100px]">
          {/*Left grid column with main text and alternating text*/}
          <div className="text-5xl">
            <h1 className="font-nuku1 text-5xl text-red-500">
              Japanese Master
            </h1>
            <span className=" font-intervariable text-black font-extrabold">
              Learn Japanese to:{" "}
            </span>
            <AlternatingText />
          </div>

          {/*Middle grid column with vertical Japanese text*/}
          <div className="">
            <h1 className="font-intervariable text-6xl text-black font-bold [writing-mode:vertical-lr]">
              日本語マスター
            </h1>
          </div>

          {/*Right grid column with Japanese image*/}
          <div className="justify-self-end">
            <img
              className="max-w-150 max-h-150"
              src="/images/home/geisha.jpg"
              alt="Japanese Calligraphy"
            />
          </div>
        </div>

        <div className="flex gap-30 pb-20">
          {/*Get started button*/}
          <button className="bg-red-500 hover:bg-red-700 active:bg-red-800 pl-15 pr-15 py-5 rounded-3xl text-white text-xl font-extrabold flex items-center justify-center max-w-50 max-h-20 whitespace-nowrap font-blastdragon">
            <span className=" pt-1">Get Started! </span>
          </button>

          {/*See more button*/}
          <button
            onClick={scroll}
            className="bg-red-500 hover:bg-red-700 active:bg-red-800 pl-15 pr-15 py-5 rounded-3xl text-white text-xl font-extrabold flex items-center justify-center max-w-50 max-h-20 whitespace-nowrap font-blastdragon">
            <span className=" pt-1">See more . . . </span>
            <img
              src="/icons/arrow.png"
              className="ml-2 max-w-6 max-h-6 invert-100"></img>
          </button>
        </div>

        {/*Japanese scroll*/}
        <div className="absolute bottom-0 flex overflow-hidden whitespace-nowrap w-full">
          <div className="flex animate-scroll text-8xl pt-10 pb-10">
            <h1>
              あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわおんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン
            </h1>
          </div>
          <div className="flex animate-scroll text-8xl pt-10 pb-10 aria-hidden:">
            <h1>
              あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわおんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン
            </h1>
          </div>
        </div>
      </div>

      {/*Course selection*/}



        <AboutSection
          ref={secondPageRef}
          brushColour="red-brush.png"
          title="Courses"
          paragraphs={[
            `Learn the basics all the way to advanced Japanese through detailed
            lessons, witten by native Japanese people!`,
            `Each course is structured for the level it is based upon, giving you
            detailed descriptions, fun quizzes and a sense of completion with
            progress trackers and trophies for your profile!`,
          ]}
          middleImage="samurai.png"
          slidenumber={0}
        />

        {/*Games selection*/}
        <AboutSection
          brushColour="blue-brush.png"
          title="Games"
          paragraphs={[
            `Better your understanding with fun games designed to help you learn Better.`,
            `Learn the Kana and have fun with a memorise type game where you match the sounds
            with the symbol or tackle Kanji with games designed to make them easier to remember!`,
          ]}
          middleImage="fish.png"
          slidenumber={1}
        />

        {/*Kanji selection*/}
        <AboutSection
          brushColour="purple-brush.png"
          title="Kanji"
          paragraphs={[
            `Learn to understand Kanji form Zero and make wanting to learn Kanji never daunting again!`,
            `Learn the secrets needed to fully grasp Kanji in a 
            intuitive way so you can level up your Japanese ability!`,
          ]}
          middleImage="kanji.png"
          slidenumber={2}
        />


      <div className="z-10 h-[100vh] relative">
        <div className="w-full h-screen bg-red-500">Next slide</div>
      </div>
    </>
  );
}
