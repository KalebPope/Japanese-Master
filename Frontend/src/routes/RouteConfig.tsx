import {Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup";
import ZeroToHero from "../pages/courses/Courses";
import Introduction from "../pages/courses/immersion/Introduction";
import Courses from "../pages/courses/Courses";

export default function RouteConfig(){
    return (
    <>
      <Routes>
        
        <Route path="/home" element={<Home />} />,
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />


        <Route path="/courses">
            <Route index element={<Courses />} />
            <Route path="zerotohero">
            <Route index element={<ZeroToHero />} />
            <Route path="introduction" element={<Introduction />} />
            </Route>
        </Route>

      </Routes>
    </>
    )
}