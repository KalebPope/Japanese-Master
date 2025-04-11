import { Link } from "react-router-dom";

export default function zeroToHero() {
  return (
    <>
      <div className="bg-custom bg-right h-100 mb-10">
        <div className="flex items-center justify-center backdrop-blur-xs h-100">
          <div className="flex flex-col items-center">
            <h1 className="font-nuku1 text-4xl font-bold pb-5">Zero To Hero</h1>
            <p className=" text-xl max-w-150 mx-auto pb-5 font-bold text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
              aspernatur ducimus quia! Consequuntur natus possimus rem magni,
              hic voluptatem unde laudantium, dolores odio tenetur aliquid
              reiciendis minima assumenda illum!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <span className="material-symbols-outlined">filter_list</span>
            <label>Filter</label>
          </div>
          <div className="flex items-center justify-self-end pr-5 mb-5">
            <span className="material-symbols-outlined">sort</span>
            <label>Sort by:</label>
            <select>
              <option>Test 1</option>
              <option>Test 2</option>
              <option>Test 3</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="introduction"
            className="bg-custom bg-cover w-70 h-50 rounded-2xl flex items-center justify-center select-none">
            Test
          </Link>
          <Link
            to="ZeroToHero"
            className="bg-custom bg-cover w-70 h-50 rounded-2xl flex items-center justify-center select-none">
            Test
          </Link>
          <Link
            to="ZeroToHero"
            className="bg-custom bg-cover w-70 h-50 rounded-2xl flex items-center justify-center select-none">
            Test
          </Link>
          <Link
            to="ZeroToHero"
            className="bg-custom bg-cover w-70 h-50 rounded-2xl flex items-center justify-center select-none">
            Test
          </Link>
          <Link
            to="ZeroToHero"
            className="bg-custom bg-cover w-70 h-50 rounded-2xl flex items-center justify-center select-none">
            Test
          </Link>
        </div>
      </div>
    </>
  );
}
