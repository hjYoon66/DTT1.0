import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const MypageInfo = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const movePage = useNavigate();
    const [cookies, setCookie] = useCookies(["user"]);
    const [cookies2, setCookie2] = useCookies(["userId"]);
    const users = cookies.user;
    const userId=cookies2.userId;



    const moveHome = () => {
        movePage("/");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 회원 가입 정보
        const userData = {
            id: userId,
            password: password,
            name: users,
            phoneNumber: phoneNumber,
            birthDate: birthDate,
        };

        try {
            // 서버로 회원 가입 요청 전송
            const response = await fetch("/users/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                // 회원 가입 성공 처리s
                console.log("회원 가입 성공");
                {
                    moveHome();
                }
            } else {
                // 회원 가입 실패 처리
                console.log("회원 가입 실패");
                alert("정보 수정에 실패했습니다.");
                window.location.reload();
            }
        } catch (error) {
            console.log("오류 발생", error);
        }
    };

    return (
        <>
        <div className="Info1-container"  id="myinfo">
            <div className="Info2-container">
                <div style={{ textAlign: "center" }} className="M-container">
                    <h2>개인 정보 수정</h2>
                    <p>Update Personal Information</p>
                    <hr />
                    <Form className="InfoForm">
                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label column sm="2">
                                ID
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="id" placeholder="ID" value={userId} onChange={(e) => setId(e.target.value)} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="이름" value={users} onChange={(e) => setName(e.target.value)} disabled />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" value={password}
                                              onChange={(e) => setPassword(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label column sm="2">
                                Tel
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="전화번호" value={phoneNumber}
                                              onChange={(e) => setPhoneNumber(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label column sm="2">
                                Birth
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="date" placeholder="생년월일" value={birthDate}
                                              onChange={(e) => setBirthDate(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12">
                                &nbsp; {/* 빈 공백을 사용하여 간격 생성 */}
                            </Col>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mx-auto d-block">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MypageInfo;
