import React, {useEffect, useState} from "react";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import tableState2_1 from "../../assets/img/Signs/available2.glb";
import tableState2_2 from "../../assets/img/Signs/inuse2.glb";
import tableState2_3 from "../../assets/img/Signs/occupied2.glb";
import tableState2_4 from "../../assets/img/Signs/reserved2.glb";
import human1 from "../../assets/img/Human/Human_sit1-1.glb"; //glb파일 변경
import human3 from "../../assets/img/Human/Human_sit1-2.glb"; //glb파일 변경
import * as THREE from 'three';
export const State2 = (props) => {
    const [reservations2, setReservations2] = useState([]);
    const tableAvail2 = useLoader(GLTFLoader, tableState2_1);
    const tableInuse2 = useLoader(GLTFLoader, tableState2_2);
    const tableOccupied2 = useLoader(GLTFLoader, tableState2_3);
    const tableReserved2 = useLoader(GLTFLoader, tableState2_4);
    const [state2, setState2] = useState("");
    const Human1 = useLoader(GLTFLoader, human1);
    const animations_H1 = Human1.animations; //sit1애니메이션
    const Human3 = useLoader(GLTFLoader, human3);
    const animations_H3 = Human3.animations; //sit2애니메이션
    console.log("data2: " + props.state);
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

    if (props.state === "3") {
        return (
            <>
                <primitive
                    object={tableReserved2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                    // children-0-castShadow
                />
            </>
        );
    } else if (props.state === "2") {
        return (
            <>
                <primitive
                    object={tableOccupied2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                    // children-0-castShadow
                />
            </>
        );
    } else if (props.state === "1") {
        return (
            <>
                <primitive
                    object={tableInuse2.scene}
                    scale={5.5}
                    position={[30, 3, -20]}
                    // children-0-castShadow
                />
                <primitive
                    object={Human3.scene}
                    scale={0.13}
                    position={[19, 5, -24.5]}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </>
        );
    } else if (props.state === "0") {
        return (
            <>
                <primitive
                    object={tableAvail2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                    // children-0-castShadow
                />
            </>
        );
    } else {
        return (
            <>
                <primitive
                    object={tableAvail2.scene}
                    scale={4.5}
                    position={[30, 3, -20]}
                    // children-0-castShadow
                />
            </>
        );
    }
};
