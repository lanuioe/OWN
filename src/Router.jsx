import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainHome from './component/MainHome'
import IntroBranding from './brandingIntro/IntroBranding'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainHome />} />
                <Route path='/introbranding' element={<IntroBranding />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;