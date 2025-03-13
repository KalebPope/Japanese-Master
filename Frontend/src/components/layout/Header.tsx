import { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

export default function Header() {
  //Todo: Make a useDropdown hook and turn Darkmode into useDarkmode
  const [down, setDown] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] py-5 px-4 dark:text-white dark:bg-black">
      <h1 className="">Japanese Master</h1>
      <div className="flex justify-center gap-4">
        <a href="/">Home</a>
        <div className="relative">
          <button
            onMouseEnter={() => setDown(true)}
            onMouseLeave={() => setDown(false)}>
            Methods
          </button>
          <Dropdown
            isDown={down}
            items={[
              { id: 1, path: "/immersion", text: "Immersion" },
              { id: 2, path: "/JLPT", text: "JLPT" },
              { id: 3, path: "/textbooks", text: "Textbooks" },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <h1>Search</h1>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
