export default function Home() {
  return (
    <div className="text-center pt-5">
      <h1 className="font-nuku1 text-5xl pb-5 text-red-500">Japanese Master Welcome Page</h1>
      <div className="bg-red-500">
      <div className="flex flex-col max-w-200 mx-auto p-10">
        <h1 className=" text-white text-4xl font-bold pb-5">Master Japanese From Zero.</h1>
      <p className="text-xl max-w-150 mx-auto pb-5 text-white">
        Japanese Master is a Japanese learning website which gives advice on how
        to learn Japanese effectively and efficiently
        by guiding you through all aspects from beginner to advanced so you can
        level up your understanding!
      </p>
      </div>
      </div>
      <div className="flex overflow-hidden whitespace-nowrap w-full">
      <div className="flex animate-scroll text-7xl pt-10 pb-10">
      <h1>あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわおんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン</h1>
      </div>
      <div className="flex animate-scroll text-7xl pt-10 pb-10 aria-hidden:">
      <h1>あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわおんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワオン</h1>
      </div>
      </div>
    </div>
  );
}
