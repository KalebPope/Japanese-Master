import { Link } from "react-router-dom";
import SideBar from "../../components/layout/SideBar";

export default function Immersion() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr]">
      <SideBar />
      <div className="flex flex-col items-center pt-10">
        <h1 className="font-bold text-5xl whitespace-nowrap">
          Immersion Method
        </h1>
        <div className="inline-flex gap-2">
          <Link
            to="basics"
            className="border-4 rounded-lg w-70 h-30 mt-10 flex items-center justify-center">
            Basics
          </Link>
          <h1 className="border-4 rounded-lg w-70 h-30 mt-10 flex items-center justify-center">
            Intermediate
          </h1>
          <h1 className="border-4 rounded-lg w-70 h-30 mt-10 flex items-center justify-center">
            Advanced
          </h1>
        </div>
      </div>
    </div>
  );
}
