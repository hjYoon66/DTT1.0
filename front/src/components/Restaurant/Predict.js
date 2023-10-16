import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "94663c62d6a8d0293add18abca03af44";
const Predict = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(lat);
            console.log(lon);
            getWeather(lat, lon);
        });
    }, []);



    const getWeather = async (lat, lon) => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            const json = await res.json();
            const city = json.city.name;
            const temp = json.list[0].main.temp //[] 안의 값은 숫자 0 ~ 40까지 -> 변해야함
            const wind = json.list[0].wind.speed;
            const rain = json.list[0].rain; //rain인경우가 없음 현재
            console.log(json);
            console.log(temp)
            console.log(city)
            console.log(wind)
            console.log(rain)
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <h2>hello</h2>
        </>
    );
};

export default Predict;