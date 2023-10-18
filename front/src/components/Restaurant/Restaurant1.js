import React, {useState, useEffect, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import object1 from "../../assets/img/Building/realBuilding.glb";
import object2 from "../../assets/img/Building/s1_table1.glb";
import object3 from "../../assets/img/Building/s1_table2.glb";
import {State1} from "./State1";
import {State2} from "./State2";
import {useNavigate} from "react-router-dom";
import Navbar2 from "../Nav/NavBar2";
import human1 from "../../assets/img/Human/Human_sit1-1.glb"; //glb파일 변경
import human3 from "../../assets/img/Human/Human_sit1-2.glb"; //glb파일 변경
import * as THREE from 'three';


const Restaurant1 = () => {
    const store = useLoader(GLTFLoader, object1);
    const table1 = useLoader(GLTFLoader, object2);
    const table2 = useLoader(GLTFLoader, object3);
    const [state1, setState1] = useState("0");
    const [state2, setState2] = useState("0");
    const movePage = useNavigate();
    const Human1 = useLoader(GLTFLoader, human1);
    const animations_H1 = Human1.animations; //sit1애니메이션
    const Human3 = useLoader(GLTFLoader, human3);
    const animations_H3 = Human3.animations; //sit2애니메이션

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


    const moveRes1 = () => {
        movePage("/Reservation11")
    }
    const moveRes2 = () => {
        movePage("/Reservation12");
    }
    // const fetchData2 = async () => {
    //   const response2 = await fetch("/table/1/2/status");
    //   const data2 = await response2.json();
    //   console.log(data2.type);
    //   setState2(data2);
    // }
    const eventSource = new EventSource("/sse/listen");
    useEffect(() => {
        eventSource.onmessage = (event) => {
            console.log("hi");
            const eventD = JSON.parse(event.data);
            const id = eventD.id.toString();
            const status = eventD.status.toString();
            console.log("Received event:", id);
            if (id === "1") {
                setState1(status);
            } else if (id === "2") {
                setState2(status);
            } else {
                console.log("not id");
            }
        };

        // 컴포넌트가 언마운트될 때 EventSource를 닫습니다.
        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <>
            <Navbar2/>
            <div className="SContent-container">
                <div className="SInner-container">
                    <Canvas
                        style={{
                            width: "650px",
                            height: "650px",
                            position: "center",
                            margin: "0 auto",
                        }}
                        camera={{position: [80, 80, 80]}}
                        shadows
                    >
                        <primitive
                            object={store.scene}
                            scale={2}
                            position={[0, 0, 0]}
                            // children-0-castShadow
                        />
                        <primitive
                            object={table1.scene}
                            scale={3}
                            position={[-8, -6, -20]}
                            // children-0-castShadow
                            onClick={moveRes1}
                        />

                        <State1 state={state1}/>

                        <primitive
                            object={table2.scene}
                            scale={3}
                            position={[30, -6, -20]}
                            // children-0-castShadow
                            onClick={moveRes2}
                        />
                        <primitive
                            object={Human1.scene}
                            scale={0.15}
                            position={[-19, 6, -15]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <primitive
                            object={Human3.scene}
                            scale={0.13}
                            position={[-17.5, 6.5, -25]}
                            rotation={[0, Math.PI / 2, 0]}
                        />

                        <State2 state={state2}/>
                        <directionalLight intensity={1}/>
                        <ambientLight intensity={1.2}/>
                        <spotLight
                            intensity={0.1}
                            angle={0.1}
                            penumbra={1}
                            // children-0-castShadow
                        />
                        <primitive
                            object={Human1.scene}
                            scale={0.15}
                            position={[-19, 6, -15]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <primitive
                            object={Human3.scene}
                            scale={0.13}
                            position={[-17.5, 6.5, -25]}
                            rotation={[0, Math.PI / 2, 0]}
                        />

                        <OrbitControls target={[0, 1, 0]}/>
                    </Canvas>
                </div>
            </div>
        </>

    )
        ;
};

export default Restaurant1