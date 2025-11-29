import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function Header() {
  const { user } = useAuth();
  const [dropdown, setDropdown] = useState<boolean | null>(null);

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] py-5 px-5 text-xl items-center dark:text-white dark:bg-black">
      <h1 className="font-nuku1 text-red-500 text-3xl">Japanese Master</h1>
      <div className="flex justify-center gap-4">
        <Link to="/home">Home</Link>
        <Link to="/basics">Courses</Link>
        <Link to="JLPT">JLPT</Link>
        <Link to="Kanji">Kanji</Link>
        <Link to="Grammar">Grammar</Link>
      </div>
      <div className="flex justify-end gap-4 items-center">
        <h1>Search</h1>
        
        {user ? (
          <div className="relative">
            <img
              src="/images/profile1.jpg"
              className="w-10 h-10 rounded-full"
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown && (
              <div className="fixed mt-2 pb-20 right-0 w-60 bg-white text-black shadow-md rounded-l-lg pt-10 pl-5">
                <div className="grid grid-cols-[1fr_2fr] gap-0">
                  <img src="/images/profile1.jpg" className="w-15 h-15 rounded-full" />
                  <div>
                    <h2 className="text-[1rem] truncate">{user.username}</h2>
                    <h2 className="text-[1rem] truncate">{user.email}</h2>
                  </div>
                </div>
                <Link to="/settings">Settings</Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signup">Signup</Link>
        )}
      </div>
    </div>
  );
}
