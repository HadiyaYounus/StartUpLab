import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import StartUps from "../pages/StartUps";
import Favourites from "../pages/Favourites";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />

          <Route 
            path="startups" 
            element={<StartUps />} 
          />

          <Route 
            path="favourites" 
            element={<Favourites />} 
          />

          <Route 
            path="about" 
            element={<About />} 
          />

          <Route 
            path="*" 
            element={<NotFound />} 
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;