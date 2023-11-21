import React, {useEffect, useRef, useState} from "react";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import tableState1_1 from "../../assets/img/Signs/available1.glb";
import tableState1_2 from "../../assets/img/Signs/inuse1.glb";
import tableState1_3 from "../../assets/img/Signs/occupied1.glb";
import tableState1_4 from "../../assets/img/Signs/reserved1.glb";
import human1 from "../../assets/img/Human/Human_sit1-1.glb"; //glb파일 변경
import human3 from "../../assets/img/Human/Human_sit1-2.glb"; //glb파일 변경
import * as THREE from 'three';
import axios from "axios";

export const State1 = () => {
    const [reservations1, setReservations1] = useState([]);
    const tableAvail1 = useLoader(GLTFLoader, tableState1_1);
    const tableInuse1 = useLoader(GLTFLoader, tableState1_2);
    const tableOccupied1 = useLoader(GLTFLoader, tableState1_3);
    const tableReserved1 = useLoader(GLTFLoader, tableState1_4);
    const Human1 = useLoader(GLTFLoader, human1);
    const animations_H1 = Human1.animations; //sit1애니메이션
    const Human3 = useLoader(GLTFLoader, human3);
    const animations_H3 = Human3.animations; //sit2애니메이션
    // const [state1, setState1] = useState("");
    const [state1, setState1] = useState("");
    // console.log("data1: " + props.state);

    useEffect(() => {
        // AnimationMixer 생성
        const mixer1 = new THREE.AnimationMixer(Human1.scene);
        const mixer3 = new THREE.AnimationMixer(Human3.scene);

        // 애니메이션 액션 생성 및 재생
        if (animations_H1 && animations_H1.length > 0) {
            animations_H1.forEach((clip) => {
                const action = mixer1.clipAction(clip);
                action.play();
            });
        }

        if (animations_H3 && animations_H3.length > 0) {
            animations_H3.forEach((clip) => {
                const action = mixer3.clipAction(clip);
                action.play();
            });
        }

        // 렌더링 루프에서 애니메이션 업데이트
        const animate = () => {
            const deltaTime = clock.getDelta(); // deltaTime은 프레임 간의 시간 간격입니다.
            mixer1.update(deltaTime);
            mixer3.update(deltaTime);
            requestAnimationFrame(animate);
        };

        const clock = new THREE.Clock();
        animate(); // 애니메이션 루프 시작
    }, [animations_H1], [animations_H3]);

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }

            if (delay !== null) {
                const intervalId = setInterval(tick, delay);
                return () => {
                    clearInterval(intervalId);
                };
            }
        }, [delay]);
    }

    const fetchData1 = async () => {
        try {
            const response1 = await fetch("/table/1/1/status");
            const data1 = await response1.json();
            setState1(data1);
            console.log(state1);

            const response2 = await axios.get("/reservations/time");
            if (response2.status === 200) {
              const data2 = response2.data;
              setReservations1(data2);

              const today = new Date();
              reservations1.forEach((reservation) => {
                if (reservation.date === today) {
                  setState1(4);
                }
              });
              console.log(reservations1);
            } else {
              console.error("예약 정보를 불러오는데 실패하였습니다:", response2.status);
            }

            const response3 = await fetch("/reservations/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response3.ok) {
                // 성공적으로 업데이트된 경우
                console.log("테이블 상태가 업데이트되었습니다.");
            } else {
                // 업데이트 실패한 경우
                console.error("테이블 상태 업데이트에 실패했습니다.");
            }
        } catch (error) {
            console.log("에러:", error);
        }
    };

    useInterval(fetchData1, 5000);


    if (state1 === 3) {
        return (
            <>
                <primitive
                    object={tableReserved1.scene}
                    scale={4.5}
                    position={[-8, 3, -20]}
                />
            </>
        );
    } else if (state1 === 2) {
        return (
            <>
                <primitive
                    object={tableOccupied1.scene}
                    scale={4.5}
                    position={[-8, 3, -20]}
                />
                <primitive
                    object={Human1.scene}
                    scale={0.15}
                    position={[-19, 6, -15]}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </>
        );
    } else if (state1 === 1) {
        return (
            <>
                <primitive
                    object={tableInuse1.scene}
                    scale={5.5}
                    position={[-8, 3, -20]}
                />

                <primitive
                    object={Human1.scene}
                    scale={0.15}
                    position={[-19, 6, -15]}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </>
        );
    } else if (state1 === 0) {
        return (
            <>
                <primitive
                    object={tableAvail1.scene}
                    scale={4.5}
                    position={[-8, 3, -20]}
                />
            </>

        );
    } else {
        return (
            <>
                <primitive
                    object={tableAvail1.scene}
                    scale={4.5}
                    position={[-8, 3, -20]}
                />
            </>
        );
    }
};
