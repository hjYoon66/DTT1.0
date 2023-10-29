import React, {useEffect, useState} from "react";
import NavBar2 from "../Nav/NavBar2";
import "./Predict.css";

const Predict = () => {
    const dateNow = new Date();
    const todayDate = dateNow.toISOString().slice(0, 10);
    const [date, setDate] = useState(todayDate);
    const [time, setTime] = useState("");
    const [table, setTable] = useState("");
    const [predict, setPredict] = useState("");

    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const futureDate = oneWeekAgo.toISOString().split("T")[0];
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     // 이미 예약된 데이터가 있는지 확인하는 요청
        //     const response = await fetch(
        //         `/reservation/data?date=${date}&time=${time}&tableN=${table}`,
        //         {
        //             method: "GET",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //         }
        //     );
        //     if (response.ok) {
        //         const data = await response.json();
        //         console.log("ok");
        //         setPredict(data);
        //         const resultContainer = document.getElementById("resultContainer");
        //         resultContainer.innerText = data; // 결과 값을 텍스트로 삽입
        //     } else {
        //         console.log("error");
        //     }
        // } catch (error) {
        //     console.error("오류가 발생하였습니다.", error);
        // }

        try {
            const data = { day: date, hour: time, rainfall:0.0, temperature: 22 };  // 보낼 데이터를 정의합니다.
            console.log(data)

            // Flask 서버에 POST 요청을 보냅니다.
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',  // POST 요청을 보냅니다.
                headers: {
                    'Content-Type': 'application/json'  // 요청 본문의 타입을 JSON으로 설정합니다.
                },
                body: JSON.stringify(data)  // JSON 문자열로 변환하여 요청 본문에 담습니다.
            });
            console.log("hello")
            if (response.ok) {
                const result = await response.json();  // 응답 본문을 JSON으로 해석합니다.
                setPredict(result);  // 상태를 업데이트합니다.
                console.log(result)
            } else {
                console.log('error');
            }
        } catch (error) {
            console.error("오류가 발생하였습니다.", error);
        }

    };

    function generateHourOptions() {
        const options = [];
        const startTime = 11; // 시작 시간 (9시)
        const endTime = 20; // 종료 시간 (18시)

        for (let hour = startTime; hour <= endTime; hour++) {
            for (let minute = 0; minute <= 59; minute += 60) {
                const formattedHour = hour.toString().padStart(2, "0"); // 시간을 2자리 숫자로 포맷팅
                const formattedMinute = minute.toString().padStart(2, "0"); // 분을 2자리 숫자로 포맷팅
                const time = `${formattedHour}:${formattedMinute}`;
                options.push(
                    <option key={time} value={time}>
                        {time}
                    </option>
                );
            }
        }

        return options;
    }

    return (
        <>
            <NavBar2/>
            <div className="PredictInner-container">
                <form className="Predict-form" onSubmit={handleFormSubmit}>
                    <h2 className="Predict-title mb-2">예측하기</h2>
                    <div className="form-group mt-3">
                        <select
                            className="form-style"
                            value={table === "1" ? "T1" : "T2"}
                            onChange={(e) => {
                                const value = e.target.value === "table1" ? "1" : "2";
                                setTable(value);
                            }}>
                            <option value="">테이블 선택</option>
                            <option value="table1">Table 1</option>
                            <option value="table2">Table 2</option>
                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <input
                            className="form-style"
                            type="date"
                            value={date}
                            min={todayDate}
                            onChange={
                                (e) =>
                                    setDate(
                                        e.target.value >= todayDate && e.target.value <= futureDate
                                            ? e.target.value
                                            : todayDate
                                    )
                                // setDate((e.target.value >= todayDate) && (e.target.value <=todayDate-) ? e.target.value : todayDate)
                            }
                        />
                    </div>
                    <div className="form-group mt-3">
                        <select
                            className="form-style"
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}>
                            <option value="">시간 선택</option>
                            {generateHourOptions()}
                        </select>
                    </div>
                    <button type="submit"  className="btn mt-4">예측 하기</button>
                </form>
                {predict === "" ? (
                    <></>
                ) : (
                    <div className="Predict-result">{predict.result}</div>
                )}
            </div>
        </>
    );
};
export default Predict;