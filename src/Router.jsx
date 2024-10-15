import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainHome from './component/MainHome'
import IntroBranding from './brandingIntro/IntroBranding'
import CanvasTest from './canvastest/CanvasTest';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainHome />} />
                <Route path='/introbranding' element={<IntroBranding />} />
                <Route path='/canvas' element={<CanvasTest />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;