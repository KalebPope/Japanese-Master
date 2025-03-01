import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import Lessons from "../pages/Lessons/Lessons";

export default function RouteConfig () {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
    </Routes>
    )
}