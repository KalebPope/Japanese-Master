import { Route, Routes } from "react-router-dom";
import Immersion from "../pages/Methods/Immersion";
import Basics from "../pages/Methods/Immersion/Basics";
import Introduction from "../pages/Methods/Immersion/Introduction";

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
