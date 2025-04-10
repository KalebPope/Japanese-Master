import { Link } from "react-router-dom";

export default function zeroToHero() {
  return (
    <div className="mx-auto w-1/2 font-nuku1">
      <div className="flex flex-col items-center pt-10">
        <h1 className="font-bold text-5xl whitespace-nowrap">
          Zero to Hero
        </h1>
      </div>
        <div className=" mt-10">
      <div className="grid grid-cols-3 bg-red-500 w-full p-1">
        <h1 className="text-white text-4xl ">1 - Introduction</h1>
        <h1 className="flex justify-self-center items-end text-white text-3xl font-bold">はじめに</h1>
      </div>
      </div>
        <div className="flex w-full pt-10 justify-items-start">
        <Link to="introduction"
         className="bg-custom bg-cover rounded-3xl w-130 h-80 flex items-center justify-center">
              Test
            </Link>
        </div>
        <div className="pt-5">
          <h2>1.1 - What is the Japanese Language?</h2>
          <h2>1.2 - Hiragana</h2>
          <h2>1.3 - Katakana</h2>
          <h2>1.4 - Greetings</h2>
        </div>
        <div className=" mt-10">
      <div className="grid grid-cols-[2fr_1fr_1fr] bg-red-500 w-full p-1">
        <h1 className="text-white text-3xl ">2 - The Basics: Hiragana & Katakana</h1>
        <h1 className="col-start-3 flex justify-self-end items-center text-white text-3xl font-bold ">ひらがなとかカタカナ</h1>
      </div>
      </div>
        <div className="mt-10 mb-5">
          <h1 className="bg-red-500 w-full h-1"></h1>
          <h1 className="flex items-center pl-2 bg-red-500 w-38 h-8 rounded-br-2xl text-white">第１課 - Lesson 1</h1>
        </div>
        <h1 className="text-2xl">ひらがな - Hiragana</h1>
        <div className="flex w-full pt-30 justify-end">
        <a className="bg-custom bg-cover rounded-3xl w-130 h-80 flex items-center justify-center">
              Test
            </a>
        </div>
        </div>
  );
}
