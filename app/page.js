"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  SpotLight,
  Lightformer,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import { Suspense, lazy, useState, useRef, useEffect } from "react";
import { Html, Float } from "@react-three/drei";
import { PorscheSeats } from "@/components/PorscheSeats";
import { SofaCobra } from "@/components/SofaCobra";
import { ArmChairCobra } from "@/components/ArmChairCobra";
import * as THREE from "three";

export default function Home() {
  const [loadedPorsche, loadPorsche] = useState(true);
  const [loadedArmChair, loadArmChair] = useState(false);
  const [loadedSofa, loadSofa] = useState(false);

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
  const colorsPorsche = {
    Jet_Black: "#201A1E",
    Carbon_Black: "#74828B",
    Guards_Red: "#FA2223",
    Irish_Green: "#029220",
    Agate_Grey: "#AAB1B9",
    Metallic_Blue: "#0387D9",
  };
  const colorsCobra = {
    Raven_black: "#000000",
    Acapulco_Blue: "#004080",
    Wimbledon_White: "#FFFFFF",
    Highland_Green: "#214021",
    Candyapple_Red: "#B30000",
  };
  const [currColorPorsche, setColorPorsche] = useState(
    colorsPorsche.Agate_Grey,
  );
  const [currColorCobra, setColorCobra] = useState(colorsCobra.Candyapple_Red);
  const changeColorCallbackPorsche = (color) => setColorPorsche(color);
  const changeColorCallbackCobra = (color) => setColorCobra(color);
  return (
    <div className="flex  w-screen h-screen">
      {(loadedSofa || loadedArmChair) && (
        <ColorMenu
          colors={colorsCobra}
          className="flex absolute top-0 left-0 w-screen  items-center justify-center text-xl z-50 font-bold "
          callback={changeColorCallbackCobra}
        />
      )}
      {loadedPorsche && (
        <ColorMenu
          colors={colorsPorsche}
          className="flex absolute top-0 left-0 w-screen  items-center justify-center text-xl z-50 font-bold "
          callback={changeColorCallbackPorsche}
        />
      )}
      <div className="flex absolute top-0 left-0 w-screen  items-center justify-center text-xl z-40 font-bold ">
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
      <Canvas camera={{ position: [5, 0, 15], fov: 30 }} className="">
        <directionalLight position={[0, 5, -3]} intensity={0.5} />
        {/* <ambientLight intensity={1} /> */}
        {/* <OrbitControls /> */}
        <PresentationControls rotation={[0, Math.PI, 0]}>
          <Suspense
            fallback={
              <Html className="text-2xl  font-bold font-sans text-white">
                Loading...
              </Html>
            }
          >
            <Stage preset={"portrait"} environment={"warehouse"}>
              {loadedPorsche && (
                <PorscheSeats
                  scale={1.69}
                  rotaion={[0, Math.PI, 0]}
                  carColor={currColorPorsche}
                />
              )}
              {loadedSofa && (
                <SofaCobra scale={1.69} rotaion={[0, Math.PI, 0]} carColor={currColorCobra}/>
              )}
              {loadedArmChair && (
                <ArmChairCobra scale={1.69} rotaion={[0, Math.PI, 0]} carColor={currColorCobra} />
              )}
            </Stage>
          </Suspense>
        </PresentationControls>

        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Color color="#444" alpha={1} mode="normal" />
            <Depth
              colorA={loadedPorsche ? currColorPorsche : currColorCobra}
              colorB="black"
              alpha={0.5}
              mode="normal"
              near={0}
              far={300}
              origin={[100, 100, 100]}
            />
          </LayerMaterial>
        </mesh>
        <CameraRig />
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
const ColorMenu = ({ colors, callback }) => {
  return (
    <div className="font-sans  text-4xl text-white flex-col  z-50 absolute top-0 left-0">
      {Object.keys(colors).map((colorName, index) => {
        return (
          <div
            className={` w-16 h-16 m-4 rounded-[4rem] cursor-pointer`}
            style={{
              background: `linear-gradient(to bottom, ${colors[colorName]}, grey)`,
            }}
            onClick={() => {
              callback(colors[colorName]);
            }}
            title={colorName}
          ></div>
        );
      })}
    </div>
  );
};
