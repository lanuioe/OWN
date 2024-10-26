import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";
import AppService from "./appservice/AppService";
import Sticker from './stickerbook/Sticker'
import Analog from './analog/Analog'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BrandStory />} />
      <Route path="/introbranding" element={<IntroBranding />} />
      <Route path="/appservice" element={<AppService />} />
      <Route path='/sticker' element ={<Sticker />} />
      <Route path='/analog' element ={<Analog />} />
    </Routes>
  );
};

export default Router;
