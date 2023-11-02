import React, {useState, useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import {OrbitControls} from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
// import object1 from "../../assets/img/Building/realBuilding.glb";
import object1 from "../../assets/img/Building/realBuild.glb";
import object2 from "../../assets/img/Building/s1_table1.glb";
import object3 from "../../assets/img/Building/s1_table2.glb";
import {State1} from "./State1";
import {State2} from "./State2";
import {useNavigate} from "react-router-dom";
import Navbar2 from "../Nav/NavBar2";



const PredictedRestaurant1 = () => {
    const store = useLoader(GLTFLoader, object1);
    const table1 = useLoader(GLTFLoader, object2);
    const table2 = useLoader(GLTFLoader, object3);
    const [state1, setState1] = useState("0");
    const [state2, setState2] = useState("0");
    const location = useLocation();
    const predictResult = location.state.predictResult;
    const table = location.state.table;
    console.log(table)
    useEffect(() => {
        if (predictResult === 1) {
            setState1("1");
        }

    }, [predictResult]);

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
                        />

                        <State1 state={state1}/>

                        <primitive
                            object={table2.scene}
                            scale={3}
                            position={[30, -6, -20]}
                            // children-0-castShadow
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

export default PredictedRestaurant1