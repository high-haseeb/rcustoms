"use client";
import { Canvas } from "@react-three/fiber";
import {
  RandomizedLight,
  SpotLight,
  Stage,
  PresentationControls,
} from "@react-three/drei";
import { Suspense, lazy, useState } from "react";
import { Html } from "@react-three/drei";
import { PorscheSeats } from "@/components/PorscheSeats";
import { ArmchairCobra } from "@/components/ArmchiarCobra";
import { SofaCobra } from "@/components/SofaCobra";
import { Model } from "@/public/SofaCobra/Sofa";

//TODO: make parts toggle menu
//TODO: add a tyre loaading animaation
//TODO: add background changer support
//

const LazyModel = lazy(() => <PorscheSeats />);
export default function Home() {
  const [loadedPorsche, loadPorsche] = useState(false);
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
  return (
    <div className="flex  w-screen h-screen">
      <div className="flex absolute top-0 left-0 w-screen  items-center justify-center">
        <button onClick={togglePorsche} className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4">
          Porsche Seats
        </button>

        <button onClick={toggleArmChair} className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4">
          Cobra ArmChair
        </button>

        <button onClick={toggleSofa} className=" text-3xl z-50 rounded-md bg-stone-300 font-bold p-4 m-4">
          Cobra Sofa
        </button>
      </div>
      <Canvas shadows>
        <Suspense fallback={<Html className="text-2xl">Loading...</Html>}>
          <PresentationControls rotation={[0,0, 0]} >
            <Stage
              shadows="accumulative"
              environment={"forest"}
              preset={'portrait'}
            >
              {loadedPorsche && <PorscheSeats />}
              {loadedArmChair && <ArmchairCobra />}
              {loadedSofa && <Model />}
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
