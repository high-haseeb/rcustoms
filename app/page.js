"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, PresentationControls, OrbitControls } from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import React, { Suspense, lazy, useState, useRef, useEffect } from "react";
import { Html, Float } from "@react-three/drei";
import { SofaCobra } from "@/components/SofaCobra";
import { ArmChairCobra } from "@/components/ArmChairCobra";
import { PorscheSofa } from "@/components/PorscheSofa";
import * as THREE from "three";
import { CobraTable } from "@/components/CobraTable";
import { PorscheTable } from "@/components/PorscheTable";
//
// export default function Home() {
//   const [loadedPorsche, loadPorsche] = useState(false);
//   const [loadedArmChair, loadArmChair] = useState(false);
//   const [loadedSofa, loadSofa] = useState(false);
//   const [loadedPorscheTable, loadPorscheTable] = useState(true);
//   const [loadedCobraTable, loadCobraTable] = useState(false);
//
//   const togglePorsche = () => {
//     loadArmChair(false);
//     loadSofa(false);
//     loadPorsche(true);
//   };
//   const toggleArmChair = () => {
//     loadPorsche(false);
//     loadSofa(false);
//     loadArmChair(true);
//   };
//   const toggleSofa = () => {
//     loadPorsche(false);
//     loadArmChair(false);
//     loadSofa(true);
//   };
//   const leatherColors = {
//     black: "#000000",
//     dark_brown: "#2A1711",
//     light_brown: "#5f361b",
//   };
//   const colorsPorsche = {
//     Jet_Black: "#201A1E",
//     Carbon_Black: "#74828B",
//     Guards_Red: "#FA2223",
//     Irish_Green: "#029220",
//     Agate_Grey: "#AAB1B9",
//     Metallic_Blue: "#0387D9",
//   };
//   const colorsCobraSofa = {
//     Raven_black: "#000000",
//     Acapulco_Blue: "#004080",
//     Wimbledon_White: "#FFFFFF",
//     Highland_Green: "#214021",
//     Candyapple_Red: "#B30000",
//   };
//   const colorsCobraArmChair = {
//     Raven_black: "#000000",
//     Acapulco_Blue: "#004080",
//     Wimbledon_White: "#FFFFFF",
//     Highland_Green: "#214021",
//     Candyapple_Red: "#B30000",
//   };
//   const [currColorPorsche, setColorPorsche] = useState(
//     colorsPorsche.Guards_Red,
//   );
//   const [currColorCobraArmChair, setColorCobraArmChair] = useState(
//     colorsCobraArmChair.Candyapple_Red,
//   );
//   const [currColorCobraSofa, setColorCobraSofa] = useState(
//     colorsCobraSofa.Candyapple_Red,
//   );
//   const [currLeather, setLeather] = useState(leatherColors.black);
//   const changeLeahterColor = (color) => setLeather(color);
//   const changeColorCallbackPorsche = (color) => setColorPorsche(color);
//   const changeColorCallbackCobraArmChair = (color) =>
//     setColorCobraArmChair(color);
//   const changeColorCallbackCobraSofa = (color) => setColorCobraSofa(color);
//   return (
//     <div className="flex  w-screen h-screen">
//       {loadedSofa && (
//         <>
//           <ColorMenu
//             colors={colorsCobraSofa}
//             className="flex absolute top-0 left-0   items-center justify-center text-xl z-50 font-bold "
//             callback={changeColorCallbackCobraSofa}
//           />
//           <LeahterMenu
//             colors={leatherColors}
//             className="flex absolute top-0 right-0  items-center justify-center text-xl z-50 font-bold "
//             callback={changeLeahterColor}
//           />
//         </>
//       )}
//       {loadedArmChair && (
//         <>
//           <ColorMenu
//             colors={colorsCobraArmChair}
//             className="flex absolute top-0 left-0   items-center justify-center text-xl z-50 font-bold "
//             callback={changeColorCallbackCobraArmChair}
//           />
//           <LeahterMenu
//             colors={leatherColors}
//             className="flex absolute top-0 right-0  items-center justify-center text-xl z-50 font-bold "
//             callback={changeLeahterColor}
//           />
//         </>
//       )}
//       {loadedPorsche && (
//         <ColorMenu
//           colors={colorsPorsche}
//           className="flex absolute top-0 left-0 w-screen  items-center justify-center text-xl z-50 font-bold "
//           callback={changeColorCallbackPorsche}
//         />
//       )}
//       <div className="flex absolute top-0 left-0 w-screen  items-center justify-center text-xl z-40 font-bold ">
//         <button
//           onClick={togglePorsche}
//           className="  rounded-md bg-stone-300  p-4 m-4 backdrop-blur-lg"
//         >
//           Porsche Seats
//         </button>
//
//         <button
//           onClick={toggleArmChair}
//           className="  rounded-md bg-stone-300  p-4 m-4"
//         >
//           Cobra Armchair
//         </button>
//
//         <button
//           onClick={toggleSofa}
//           className="  rounded-md bg-stone-300  p-4 m-4"
//         >
//           Cobra Sofa
//         </button>
//       </div>
//       <Canvas camera={{ position: [5, 0, 15], fov: 30 }} className="">
//         <directionalLight position={[0, 5, -3]} intensity={0.5} />
//         <PresentationControls rotation={[0, Math.PI, 0]}>
//           <Suspense
//             fallback={
//               <Html className="text-2xl  font-bold font-sans text-white">
//                 Loading...
//               </Html>
//             }
//           >
//             <Stage preset={"portrait"} environment={"warehouse"}>
//               {loadedPorsche && (
//                 <PorscheSofa
//                   scale={1.69}
//                   rotation={[0, Math.PI, 0]}
//                   carColor={currColorPorsche}
//                 />
//               )}
//               {loadedSofa && (
//                 <SofaCobra
//                   scale={1.69}
//                   rotaion={[0, Math.PI, 0]}
//                   carColor={currColorCobraSofa}
//                   leatherColor={currLeather}
//                 />
//               )}
//               {loadedArmChair && (
//                 <ArmChairCobra
//                   scale={1.69}
//                   rotaion={[0, Math.PI, 0]}
//                   carColor={currColorCobraArmChair}
//                   leatherColor={currLeather}
//                 />
//               )}
//             </Stage>
//           </Suspense>
//         </PresentationControls>
//
//         <mesh scale={100}>
//           <sphereGeometry args={[1, 64, 64]} />
//           <LayerMaterial side={THREE.BackSide}>
//             <Color color="#444" alpha={1} mode="normal" />
//             <Depth
//               colorA={loadedPorsche ? currColorPorsche : loadedArmChair ? currColorCobraArmChair : currColorCobraSofa}
//               colorB="black"
//               alpha={0.5}
//               mode="normal"
//               near={0}
//               far={300}
//               origin={[100, 100, 100]}
//             />
//           </LayerMaterial>
//         </mesh>
//         <CameraRig />
//       </Canvas>
//     </div>
//   );
// }

const colors = {
  Leather: {
    black: "#000000",
    dark_brown: "#2A1711",
    light_brown: "#5f361b",
  },
  Porsche: {
    Jet_Black: "#201A1E",
    Carbon_Black: "#74828B",
    Guards_Red: "#FA2223",
    Irish_Green: "#029220",
    Agate_Grey: "#AAB1B9",
    Metallic_Blue: "#0387D9",
  },
  Sofa: {
    Raven_black: "#000000",
    Acapulco_Blue: "#004080",
    Wimbledon_White: "#FFFFFF",
    Highland_Green: "#214021",
    Candyapple_Red: "#B30000",
  },
  ArmChair: {
    Raven_black: "#000000",
    Acapulco_Blue: "#004080",
    Wimbledon_White: "#FFFFFF",
    Highland_Green: "#214021",
    Candyapple_Red: "#B30000",
  },
  Table: {
    Wimbledon_White: "#FFFFFF",
    Highland_Green: "#214021",
    Candyapple_Red: "#B30000",
  },
};

const Models = {
  Porsche: {
    componentName: "PorscheSofa",
    colors: colors.Porsche,
  },
  ArmChair: {
    componentName: "ArmChairCobra",
    colors: colors.ArmChair,
    leather: colors.Leather,
  },
  Sofa: {
    componentName: "SofaCobra",
    colors: colors.Sofa,
  },
  PorscheTable: {
    componentName: "PorscheTable",
    colors: {},
  },
  CobraTable: {
    componentName: "CobraTable",
    colors: colors.Table,
  },
};

export default function Home() {
  const [loadedModel, setLoadedModel] = useState(Models.Sofa);
  const [currColor, setColor] = useState(colors.Sofa.Raven_black);
  const [currLeather, setLeather] = useState(colors.Leather.black);

  const changeLeatherColor = (color) => {
    setLeather(color);
  };

  const props = {
    scale: 1.69,
    rotation: [0, 0, 0],
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex absolute top-0 left-0 w-screen items-center justify-center text-xl font-bold z-50">
        <GenerateButtons toggleSeat={(model) => setLoadedModel(model)} />
      </div>
      <ColorMenu
        colors={loadedModel.colors}
        className="flex absolute top-0 left-0 items-center justify-center text-xl  font-bold"
        callback={(color) => setColor(color)}
      />
      <LeatherMenu
        colors={colors.Leather}
        className="flex absolute top-0 right-0 items-center justify-center text-xl font-bold"
        callback={changeLeatherColor}
      />
      <Canvas camera={{ position: [5, 0, 15], fov: 30 }}>
        <directionalLight position={[0, 5, -3]} intensity={0.5} />
        <PresentationControls rotation={[0, Math.PI, 0]}>
          <Suspense fallback={<Loading />}>
            <Stage preset={"portrait"} environment={"warehouse"}>
              {loadedModel.componentName === Models.Sofa.componentName ? (
                <SofaCobra
                  key="sofa"
                  {...props}
                  carColor={currColor}
                  leatherColor={currLeather}
                />
              ) : loadedModel.componentName === Models.Porsche.componentName ? (
                <PorscheSofa key="porsche" carColor={currColor} />
              ) : loadedModel.componentName ===
                Models.ArmChair.componentName ? (
                <ArmChairCobra
                  key="armchair"
                  {...props}
                  carColor={currColor}
                  leatherColor={currLeather}
                />
              ) : loadedModel.componentName ===
                Models.PorscheTable.componentName ? (
                <PorscheTable key="porscheTable" {...props} />
              ) : loadedModel.componentName ===
                Models.CobraTable.componentName ? (
                <CobraTable key="cobraTable" {...props} />
              ) : null}
            </Stage>
          </Suspense>
        </PresentationControls>
        <BackGround color={currColor} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
const BackGround = ({ color }) => {
  return (
    <mesh scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Color color="#444" alpha={1} mode="normal" />
        <Depth
          colorA={color}
          colorB="black"
          alpha={0.5}
          mode="normal"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
};
const GenerateButtons = ({ toggleSeat }) => {
  const modelButtons = [
    { model: Models.Porsche, label: "Porsche Seats" },
    { model: Models.ArmChair, label: "Cobra Armchair" },
    { model: Models.Sofa, label: "Cobra Sofa" },
    { model: Models.PorscheTable, label: "Porsche Table" },
    { model: Models.CobraTable, label: "Cobra Table" },
  ];

  return modelButtons.map(({ model, label }) => (
    <button
      // key={model}
      onClick={() => toggleSeat(model)}
      className="rounded-md bg-stone-300 p-4 m-4 backdrop-blur-lg"
    >
      {label}
    </button>
  ));
};
const Loading = () => {
  return (
    <Html className="text-2xl  font-bold font-sans text-white">Loading...</Html>
  );
};

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

const LeatherMenu = ({ colors, callback }) => {
  return (
    <div className="font-sans  text-4xl text-white flex-col  z-50 absolute top-0 right-0">
      {Object.keys(colors).map((colorName, index) => {
        return (
          <div
            className={` w-16 h-16 m-4 rounded-[4rem] cursor-pointer`}
            style={{
              background: `linear-gradient(to bottom, ${colors[colorName]}, black)`,
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

