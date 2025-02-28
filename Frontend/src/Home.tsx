import { useContext } from "react"
import { DarkModeContext } from "./context/DarkmodeContext"

export default function Home()
{
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  return (
    <>
    <button onClick={toggleDarkMode}>{darkMode ? "On" : "Off"}</button>
    </>
  )
}
