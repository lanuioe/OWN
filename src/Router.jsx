import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import MainHome from './component/MainHome'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainHome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;