import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Auth/Signup";

export default function MainRoutes () {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}