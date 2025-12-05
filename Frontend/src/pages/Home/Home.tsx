import { useRef } from "react";
import AlternatingText from "../../components/AlternatingText";

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

  return (
    <>
      {/*------------*/}
      {/*Landing section*/}
      {/*------------*/}

      <div className="h-calc relative flex flex-col justify-center items-center">
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
              src="/images/32851.jpg"
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

      {/*------------*/}
      {/*About section*/}
      {/*------------*/}
      <div
        ref={secondPageRef}
        className="font-intervariable font-extrabold">
        {/*Courses section*/}
        <div className="max-w-7xl mx-auto grid grid-cols-2 justify-center pb-50">
          <img src="images/image.png" className="w-200 h-100 pr-10"></img>
          <div className="col-start-2 flex flex-col justify-center items-center">
            <h1 className="text-8xl font-sukajan text-center pb-5">Courses</h1>

            <p className="font-intervariable text-xl w-150">
              Learn the basics all the way to advanced Japanese through detailed
              lessons, witten by native Japanese people!
            </p>

            <p className="font-intervariable text-xl pt-5 w-150">
              Each course is structured for the level it is based upon, giving
              you detailed descriptions, fun quizzes and a sense of completion
              with progress trackers and trophies for your profile!
            </p>
          </div>
        </div>

        {/*Games section*/}
        <div className="max-w-7xl mx-auto grid grid-cols-2 justify-center pb-50">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-sukajan text-center pb-5">Games </h1>

            <p className="font-intervariable text-xl w-150">
              Better your understanding with fun games designed to help you
              learn Better!
            </p>

            <p className="font-intervariable text-xl pt-5 w-150">
              Learn the Kana and have fun with a memorise type game where you
              match the sounds with the symbol or tackle Kanji with games
              designed to make them easier to remember!
            </p>
          </div>
          <img src="images/image.png" className="w-200 h-100 pr-10"></img>
        </div>

        {/*Flashcards section*/}
        <div className="max-w-7xl mx-auto grid grid-cols-2 justify-center pb-50">
          <img src="images/image.png" className="w-200 h-100 pr-10"></img>
          <div className="col-start-2 flex flex-col justify-center items-center">
            <h1 className="text-8xl font-sukajan text-center pb-5">
              Flashcards
            </h1>

            <p className="font-intervariable text-xl w-150">
              Look up Japanese words to get dictionary entries right at your
              fingertips and save them later to learn!
            </p>

            <p className="font-intervariable text-xl pt-5 w-150">
              Download the mobile app to get Flashcards on the go or Download on
              your computer, whatever you like! Use these flashcards to better
              memorise Japanese words so you can build vocabulary faster!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
