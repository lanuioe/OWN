import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BrandStory />} />
      <Route path="/introbranding" element={<IntroBranding />} />
    </Routes>
  );
};

export default Router;
