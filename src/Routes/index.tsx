import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Container/Home';
import PublicRoutes from './Public';
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}>

            </Route>
        </Routes>
    )
}
