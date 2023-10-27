import React, { useState } from "react";
import NavBar3 from "./Nav/NavBar3";
import "./Join.css";
import { Icon } from '@iconify/react';

const Join = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 회원 가입 정보
    const userData = {
      id: id,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
    };

    try {
      // 서버로 회원 가입 요청 전송
      const response = await fetch("/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // 회원 가입 성공 처리
        console.log("회원 가입 성공");
        {
        }
      } else {
        // 회원 가입 실패 처리
        console.log("회원 가입 실패");
        alert("회원가입에 실패했습니다.");
        window.location.reload();
      }
    } catch (error) {
      console.log("오류 발생", error);
    }
  };

  return (
      <>
        <NavBar3 />
        <div className="parent-containerJ" id="Join">
          <div className="form-containerJ">
            <h4 className="mb-4 pb-3">DTT Sign Up</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-style2"
                    placeholder="Your Name"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <i className="input-icon uil uil-user">
                  <Icon icon="uil:user" />
                </i>
              </div>
              <div className="form-group mt-2">
                <input
                    type="text"
                    name="id"
                    className="form-style2"
                    placeholder="Your ID"
                    id="id"
                    autoComplete="off"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <i className="input-icon uil uil-at">
                  <Icon icon="uil:at" />
                </i>
              </div>
              <div className="form-group mt-2">
                <input
                    type="password"
                    name="password"
                    className="form-style2"
                    placeholder="Your Password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <i className="input-icon uil uil-lock-alt">
                  <Icon icon="uil:lock-alt" />
                </i>
              </div>

              <div className="form-group mt-2">
                <input
                    type="text"
                    name="phoneNumber"
                    className="form-style2"
                    placeholder="Your Phone Number"
                    id="phoneNumber"
                    autoComplete="off"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <i className="input-icon uil uil-lock-alt">
                  <Icon icon="tabler:phone" />
                </i>
              </div>

              <div className="form-group mt-2">
                <input
                    type="date"
                    name="birthDate"
                    className="form-style2"
                    placeholder="생년월일"
                    id="birthDate"
                    autoComplete="off"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
                <i className="input-icon uil uil-lock-alt">
                  <Icon icon="ic:baseline-calendar-month" />
                </i>
              </div>
              {/*<a href="#" className="btn mt-4">가입하기</a>*/}
              <button type="submit"  className="btn mt-4">회원 가입</button>
            </form>
          </div>
        </div>
      </>
  );
};
export default Join
