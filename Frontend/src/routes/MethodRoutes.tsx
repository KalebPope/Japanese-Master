import { Route, Routes } from "react-router-dom";
import Immersion from "../pages/Lessons/Immersion";

export default function MethodRoutes () {
    return (
        <Routes>
        <Route path="/immersion" element={<Immersion />} />
        </Routes>
    )
}