import React, { useState } from "react";
import { useCookies } from "react-cookie";
import MyPageList1 from "./MyPageList1";
import MyPageList2 from "./MyPageList2";
import {useNavigate} from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


const MypageReservation = () => {
    const [reservations, setReservations] = useState([]);
    const [cookies, setCookie] = useCookies(["user"]);
    const users = cookies.user;
    const movePage = useNavigate();
    const [key, setKey] = useState('매장1');
    const moveMyPageInfo = () => {
        movePage("/MypageInfo");
    };
    return (
        <>
            <div className="MContent-container" id="myreservation">
                <div className="MInner-container">
                    <div style={{ textAlign: "center" }} className="M-container">
                        <h2>예약 확인</h2>
                        <p>Please check your future own reservation!</p>
                        <hr />

                        <h3><Badge bg="secondary">{users}</Badge>님의 예약현황</h3>
                    </div>
                    <div className="Tab-container">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="매장1" title="매장1">
                                <MyPageList1 />
                            </Tab>
                            <Tab eventKey="매장2" title="매장2">
                                <MyPageList2 />
                            </Tab>
                            </ Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MypageReservation;

