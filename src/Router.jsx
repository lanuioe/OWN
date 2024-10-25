import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";
import CanvasTest from "./canvastest/CanvasTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandStory />} />
        <Route path="/introbranding" element={<IntroBranding />} />
        <Route path="/canvas" element={<CanvasTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
