import { Route, Routes } from "react-router-dom";
import ZeroToHero from "../pages/courses/zeroToHero";
import Basics from "../pages/courses/immersion/Basics";
import Introduction from "../pages/courses/immersion/Introduction";

export default function MethodRoutes() {
  return (
    <Routes>
      <Route path="basics">
        <Route index element={<Basics />} />
        <Route path="ZeroToHero">
          <Route index element={<ZeroToHero />} />
          <Route path="introduction" element={<Introduction />} />
        </Route>
      </Route>
    </Routes>
  );
}
