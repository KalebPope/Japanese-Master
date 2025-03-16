import { Link } from "react-router-dom";

export default function Header() {
  //Todo: Make a useDropdown hook and turn Darkmode into useDarkmode

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] py-5 px-5 text-xl dark:text-white dark:bg-black">
      <h1 className="font-nuku1 text-red-500 text-2xl">Japanese Master</h1>
      <div className="flex justify-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/immersion">Courses</Link>
        <Link to="JLPT">JLPT</Link>
        <Link to="Kanji">Kanji</Link>
        <Link to="Grammar">Grammar</Link>
      </div>
      <div className="flex justify-end gap-4">
        <h1>Search</h1>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
