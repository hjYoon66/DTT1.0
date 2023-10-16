import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./components/Nav/NavBar";
import Restaurant1 from "./components/Restaurant/Restaurant1";
import SimpleInfo from "./components/Restaurant/SimpleInfo";
import MypageInfo from "./components/Mypage/MypageInfo";
import MyPageReservation from "./components/Mypage/MypageReservation";
import Join from "./components/Join";
import MyPage from "./components/Mypage/MyPage";
import Reservation12 from "./components/Reservation/Reservation12";
import Reservation11 from "./components/Reservation/Reservation11";
import Predict from "./components/Restaurant/Predict";

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
                <Route path="MyPageReservation" element={<MyPageReservation />}></Route>
                <Route path="Join" element={<Join />}></Route>
                <Route path="MyPage" element={<MyPage />}></Route>
                <Route path="Reservation11" element={<Reservation11 />}></Route>
                <Route path="Reservation12" element={<Reservation12 />}></Route>
                <Route path="Predict" element={<Predict />}></Route>
            </Routes>
        </Suspense>
    </BrowserRouter>
);
