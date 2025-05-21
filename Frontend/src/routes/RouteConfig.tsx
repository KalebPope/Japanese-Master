import {Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup";
import Basics from "../pages/courses/immersion/Basics";
import ZeroToHero from "../pages/courses/zeroToHero";
import Introduction from "../pages/courses/immersion/Introduction";
import Welcome from "../pages/home/Welcome";

export default function RouteConfig(){
    return (
    <>
      <Routes>
        
        <Route path="/" element={<Welcome />} />,
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />


        <Route path="/basics">
            <Route index element={<Basics />} />
            <Route path="ZeroToHero">
            <Route index element={<ZeroToHero />} />
            <Route path="introduction" element={<Introduction />} />
            </Route>
        </Route>

      </Routes>
    </>
    )
}