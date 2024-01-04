"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  SpotLight,
  AccumulativeShadows,
  PerformanceMonitor,
  Lightformer,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { Suspense, lazy, useState, useRef } from "react";
import { Html, Float } from "@react-three/drei";
import { PorscheSeats } from "@/components/PorscheSeats";
import { SofaCobra } from "@/components/SofaCobra";
import { ArmChairCobra } from "@/components/ArmChairCobra";
import * as THREE from "three";
//TODO: make parts toggle menu
//TODO: add a tyre loaading animaation
//TODO: add background changer support
//

export default function Home() {
  const [loadedPorsche, loadPorsche] = useState(false);
  const [loadedArmChair, loadArmChair] = useState(false);
  const [loadedSofa, loadSofa] = useState(true);

  const environments = [
    "forest",
    "warehouse",
    "city",
    "dawn",
    "park",
    "lobby",
    "sunset",
    "studio",
  ];
  const [environment, setEnvironment] = useState(environments[0]);
  const [environmentIndex, setEnvironmentIndex] = useState(0);

  const togglePorsche = () => {
    loadArmChair(false);
    loadSofa(false);
    loadPorsche(true);
  };
  const toggleArmChair = () => {
    loadPorsche(false);
    loadSofa(false);
    loadArmChair(true);
  };

  const toggleSofa = () => {
    loadPorsche(false);
    loadArmChair(false);
    loadSofa(true);
  };
  const changeEnvironment = () => {
    const newIndex = (environmentIndex + 1) % environments.length;
    setEnvironmentIndex(newIndex);
    setEnvironment(environments[newIndex]);
  };
  return (
    <div className="flex  w-screen h-screen">
      <div className="flex absolute top-0 left-0 w-screen  items-center justify-center text-xl z-50 font-bold ">
        <button
          onClick={togglePorsche}
          className="  rounded-md bg-stone-300  p-4 m-4 backdrop-blur-lg"
        >
          Porsche Seats
        </button>

        <button
          onClick={toggleArmChair}
          className="  rounded-md bg-stone-300  p-4 m-4"
        >
          Cobra ArmChair
        </button>

        <button
          onClick={toggleSofa}
          className="  rounded-md bg-stone-300  p-4 m-4"
        >
          Cobra Sofa
        </button>
      </div>
      <Canvas  camera={{ position: [5, 0, 15], fov: 30 }} className="">
        {/* <SpotLight position={[0, 5, 0]} angle={0.6} penumbra={1} castShadow intensity={3} shadow-bias={-0.0001} /> */}
        <ambientLight intensity={1} />
        {/* <PresentationControls rotation={[0, Math.PI, 0]} > */}
        <OrbitControls/>
          <Suspense fallback={<Html className="text-2xl  ">Loading...</Html>}>
            <Stage preset={'portrait'} environment={"warehouse"} >
              {loadedPorsche && <PorscheSeats scale={1.69} rotaion={[0, Math.PI, 0]} />}
              {loadedSofa && <SofaCobra scale={1.69} rotaion={[0, Math.PI, 0]} />}
              {loadedArmChair && <ArmChairCobra scale={1.69} rotaion={[0, Math.PI, 0]} />}
            </Stage>
          </Suspense>
        {/* </PresentationControls> */}
        {/** PerfMon will detect performance issues */}
        {/* Renders contents "live" into a HDRI environment (scene.environment). */}
        {/* <CameraRig /> */}
      </Canvas>
    </div>
  );
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 6 + Math.cos(t / 5) / 2),
      0.05,
    );
    state.camera.lookAt(0, 0, 0);
  });
}
function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  return (

    <>
      {/* Ceiling */}
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      <Lightformer position={[0, 1, 4]} scale={[2, 1, 1]} color="red" />
      <Lightformer position={[0, 10, -4]} scale={[20, 9, 1]} color="white" intensity={4} rotation-x={Math.PI / 4} />

      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="rect" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
    </>
  );
}
