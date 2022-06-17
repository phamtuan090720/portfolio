import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Container/Home";
import PageNotFound from "../Container/404";
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
