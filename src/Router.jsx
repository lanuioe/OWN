import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrandStory />} />
        <Route path="/introbranding" element={<IntroBranding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
