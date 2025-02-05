import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  Stage,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Hamburger } from "./Hamburger";
import { Fox } from "./Fox";

const Scene = () => {
  const cube = useRef();
  // useFrame(() => {
  //   cube.current.rotation.y += 0.01;
  // });

  const directionLightHelper = useRef();

  useHelper(directionLightHelper, THREE.DirectionalLightHelper, 1, "hotpink");

  return (
    <>
      <OrbitControls />
      <Perf />
      <directionalLight
        position={[1, 2, 5]}
        ref={directionLightHelper}
        castShadow
        intensity={1}
      />
      <ambientLight intensity={1.5} />
      {/* <ContactShadows /> */}
      {/* <Sky sunPosition={[1, 0.001, 0]}/> */}
      {/* <Environment
        preset="sunset"
        // ground={{
        //   height: 100,
        //   radius: 500,
        //   scale:50
        // }}
        background
      ></Environment> */}

      {/* <mesh castShadow ref={cube} position={[-5, 0, 0]}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="hotpink" />
      </mesh> */}
      <mesh receiveShadow position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="lightblue" side={2} />
      </mesh>
      <Suspense fallback={null}>
        <Hamburger position={[5, 0, 0]} />
        <Fox scale={0.1} position={[-5, 0, 0]}/>

      </Suspense>
      {/* <mesh castShadow position={[5, 0, 0]}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh> */}
    </>
  );
};

export default Scene;
