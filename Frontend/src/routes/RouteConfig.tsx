import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Auth/Signup";
import Courses from "../pages/courses/Courses";
import Kana from "../pages/courses/Kana";
import Introduction from "../pages/courses/immersion/Introduction";
import Hiragana from "../pages/courses/immersion/Hiragana";

export default function RouteConfig() {
  return (
    <>
      <Routes>
        {/*Home Routes*/}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        {/*Course Routes*/}
        <Route path="/courses">
          <Route index element={<Courses />} />

          <Route path="kana"> 
            <Route index element={<Kana />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="hiragana-1" element={<Hiragana />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}
