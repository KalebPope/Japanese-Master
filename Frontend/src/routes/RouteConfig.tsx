import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup";
import Courses from "../pages/courses/Courses";
import Kana from "../pages/courses/Kana";
import Introduction from "../pages/courses/immersion/Introduction";

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
          </Route>

        </Route>
      </Routes>
    </>
  );
}
