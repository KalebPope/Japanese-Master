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
      <div ref={secondPageRef} className="h-screen font-intervariable font-extrabold flex flex-col items-center">
        <h1 className="text-6xl pb-5">What is Japanese Master about?</h1>

        <p className="font-intervariable text-3xl max-w-250 mx-auto pb-5 text-center">
          Japanese Master is a Japanese learning website which gives advice on
          how to learn Japanese effectively and efficiently by guiding you
          through all aspects from beginner to advanced so you can level up your
          understanding!
        </p>

        <img src="/images/monitor.png" alt="Monitor" className="max-w-100 max-h-100"></img>
      </div>
    </>
  );
}
