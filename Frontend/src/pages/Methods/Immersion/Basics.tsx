import { Link } from "react-router-dom";

export default function Basics() {
  return (
    <>
      <div className="flex justify-center items-center pb-5">
        <Link
          to="introduction"
          className="border-4 rounded-lg w-70 h-30 mt-10 flex items-center justify-center">
          Introduction
        </Link>
      </div>
    </>
  );
}
