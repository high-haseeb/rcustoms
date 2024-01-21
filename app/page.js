"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { LayerMaterial, Color, Depth } from "lamina";
import React, { Suspense,  useState, useRef  } from "react";
import { Html } from "@react-three/drei";
import { ArmChairCobra } from "@/components/ArmChairCobra";
import { PorscheSofa } from "@/components/PorscheSofa";
import * as THREE from "three";
import { TableCobra } from "@/components/TableCobra";
import { TablePorsche } from "@/components/TablePorsche";
import { SofaNew } from "@/components/SofaCobranew";

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
    Aluminium: "lightgray"
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
    Silver: "silver",
    Gray: "gray",
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
  const [currColor, setColor] = useState(colors.Porsche.Guards_Red);
  const [currLeather, setLeather] = useState(colors.Leather.black);

  const changeLeatherColor = (color) => {
    setLeather(color);
  };

  const props = {
    scale: 1.69,
    position: [0, 0, 0],
  };
  const ref = useRef();
  return (
    <div className="flex w-screen h-screen">
      <div className="flex absolute top-0 left-0 w-screen items-center justify-center text-xl font-bold z-50">
        <GenerateButtons toggleSeat={(model) => {setLoadedModel(model)}}/>
      </div>
      <ColorMenu
        colors={loadedModel.colors}
        className="flex absolute top-0 left-0 items-center justify-center text-xl  font-bold"
        callback={(color) => setColor(color)}
      />
      {loadedModel.componentName === Models.Sofa.componentName || loadedModel.componentName === Models.ArmChair.componentName ? 
      <LeatherMenu
        colors={colors.Leather}
        className="flex absolute top-0 right-0 items-center justify-center text-xl font-bold"
        callback={changeLeatherColor}
      />: <></>}
      <Canvas camera={{ position: [5, 0, 15], fov: 30 }}>
        <directionalLight position={[0, 5, -3]} intensity={0.5} />
        <PresentationControls rotation={[0, Math.PI, 0]}>
        <Suspense fallback={<Loading />}>
          <Stage preset={"portrait"} environment={"warehouse"}>
              {loadedModel.componentName === Models.Sofa.componentName ? (
                <SofaNew key="sofa" {...props} carColor={currColor} leatherColor={currLeather}/>
              ) : loadedModel.componentName === Models.Porsche.componentName ? (
                <PorscheSofa key="porsche" {...props} carColor={currColor} />
              ) : loadedModel.componentName === Models.ArmChair.componentName ? (
                <ArmChairCobra key="armchair" {...props} carColor={currColor} leatherColor={currLeather}/>
              ) : loadedModel.componentName === Models.PorscheTable.componentName ? (
                <TablePorsche {...props} />
              ) : loadedModel.componentName === Models.CobraTable.componentName ? (
                <TableCobra {...props} color={currColor}/>
              ) : null}
          </Stage>
        </Suspense>
        </PresentationControls>
        {/* <OrbitControls /> */}
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
      key={label}
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
            key={index}
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
            key={index}
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
