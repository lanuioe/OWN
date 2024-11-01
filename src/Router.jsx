import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";
import AppService from "./appservice/AppService";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BrandStory />} />
      <Route path="/introbranding" element={<IntroBranding />} />
      <Route path="/appservice" element={<AppService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
