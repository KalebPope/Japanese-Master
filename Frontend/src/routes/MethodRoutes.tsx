import { Route, Routes } from "react-router-dom";
import Immersion from "../pages/courses/Immersion";
import Basics from "../pages/courses/immersion/Basics";
import Introduction from "../pages/courses/immersion/Introduction";

export default function MethodRoutes() {
  return (
    <Routes>
      <Route path="immersion">
        <Route index element={<Immersion />} />
        <Route path="basics">
         <Route index element={<Basics />} />
         <Route path="introduction" element={<Introduction />} />
        </Route>
      </Route>
    </Routes>
  );
}
