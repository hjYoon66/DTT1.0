import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Restaurant1 from "./components/Restaurant1";
import SimpleInfo from "./components/SimpleInfo";
import MypageInfo from "./components/MypageInfo";
import Join from "./components/Join";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="NavBar" element={<NavBar />}></Route>
                <Route path="Restaurant1" element={<Restaurant1 />}></Route>
                <Route path="SimpleInfo" element={<SimpleInfo />}></Route>
                <Route path="MypageInfo" element={<MypageInfo />}></Route>
                <Route path="Join" element={<Join />}></Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
);
