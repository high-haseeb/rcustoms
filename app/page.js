"use client";
import { Canvas , useFrame} from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  Lightformer
} from "@react-three/drei";
import { Suspense, lazy, useState , useRef} from "react";
import { Html, Float } from "@react-three/drei";
import { PorscheSeats } from "@/components/PorscheSeats";
import { SofaCobra } from "@/components/SofaCobra";
import { ArmchairCobra } from "@/components/ArmchairCobra";
import * as THREE from 'three'
//TODO: make parts toggle menu
//TODO: add a tyre loaading animaation
//TODO: add background changer support
//

const LazyModel = lazy(() => <PorscheSeats />);
export default function Home() {
  const [loadedPorsche, loadPorsche] = useState(false);
  const [loadedArmChair, loadArmChair] = useState(false);
  const [loadedSofa, loadSofa] = useState(false);

  const environments = ["forest","warehouse","city", "dawn", "park", "lobby", "sunset",  "studio"];
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
      <div className="flex absolute top-0 left-0 w-screen  items-center justify-center">
        <button
          onClick={togglePorsche}
          className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4"
        >
          Porsche Seats
        </button>

        <button
          onClick={toggleArmChair}
          className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4"
        >
          Cobra ArmChair
        </button>

        <button
          onClick={toggleSofa}
          className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4"
        >
          Cobra Sofa
        </button>

        <button
          onClick={changeEnvironment}
          className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4"
        >
          env
        </button>
      </div>
      <Canvas shadows className="">
        <Suspense
          fallback={
            <Html className="text-2xl  w-full">Loading Environment...</Html>
          }
        >
          <PresentationControls rotation={[0, Math.PI, 0]}>
            <Stage
              environment={environment}
              preset={"portrait"}
              rotation={[0, 0, Math.PI]}
            >
              <Suspense
                fallback={
                  <Html className="text-2xl  ">Loading...</Html>
                }
              >
                {loadedPorsche && <PorscheSeats />}
                {loadedSofa && <SofaCobra />}
                {loadedArmChair && <ArmchairCobra />}
              </Suspense>
            </Stage>
          </PresentationControls>
        </Suspense>
        <CameraRig/>
      </Canvas>
    </div>
  );
}






function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(Math.sin(t / 5), 0, 2+ Math.cos(t / 5) / 2), 0.05)
    state.camera.lookAt(0, 0, 0)
  })
}
