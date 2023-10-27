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



const Restaurant1 = () => {
    const store = useLoader(GLTFLoader, object1);
    const table1 = useLoader(GLTFLoader, object2);
    const table2 = useLoader(GLTFLoader, object3);
    const [state1, setState1] = useState("0");
    const [state2, setState2] = useState("0");
    const movePage = useNavigate();

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

                        <State2 state={state2}/>
                        <directionalLight intensity={1}/>
                        <ambientLight intensity={1.2}/>
                        <spotLight
                            intensity={0.1}
                            angle={0.1}
                            penumbra={1}
                            // children-0-castShadow
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