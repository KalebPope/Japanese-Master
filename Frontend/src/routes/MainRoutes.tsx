import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Signup from "../pages/auth/Signup";

export default function MainRoutes () {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}