import SideBar from "../../components/layout/SideBar"

export default function Lessons()
{

  return (
    <div className="grid grid-cols-[1fr_2fr_1fr]">
    <SideBar />
    <div className="flex flex-col items-center pt-10">
    <h1>The basics: Hiragana and Katakana</h1>
    </div>
    </div>
  )
}