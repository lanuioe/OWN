import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainHome from './component/MainHome'
import IntroBranding from './brandingIntro/IntroBranding'
import AppService from './appservice/AppService'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainHome />} />
                <Route path='/introbranding' element={<IntroBranding />} />
                <Route path='/appservice' element ={<AppService />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;