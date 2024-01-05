import React, { useLayoutEffect, useMemo, useRef } from "react";
import {  applyProps } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF , useTexture } from "@react-three/drei";

export function PorscheSeats({ carColor, ...props }) {
  const { nodes, materials } = useGLTF("PorscheSeats/PorscheSeats.gltf");
  const redGlass = new THREE.MeshStandardMaterial({
    color: 0x880000,
    transparent: true,
    opacity: 0.7,
    roughness: 0.1, // Adjust the roughness for reflections
    metalness: 0.9, // Adjust the metalness for reflections
    envMapIntensity: 3, // Adjust environment map intensity
  });


  const newLeatherMaterial = new THREE.MeshStandardMaterial();
  useLayoutEffect(() => {
    // console.log(materials.Bodycolor.color)
  }, [nodes, materials]);
  applyProps(materials.Bodycolor, { color: carColor });

  Object.assign(newLeatherMaterial, materials.Leather_Black_Porshe);
  newLeatherMaterial.roughness = 0.75

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.452, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={1.546}
      >
        <mesh
          geometry={nodes["911_Body_101_Taillight"].geometry}
          material={materials.Bodycolor}
          scale={0.647}
        />
        <mesh
          geometry={nodes["911_Taillight_Side"].geometry}
          material={materials.Chrome}
          position={[-0.515, 0.069, -0.14]}
          rotation={[-1.399, 0.302, 1.095]}
          scale={[0.029, 0.012, 0.012]}
        />
        <mesh
          geometry={nodes["911_Taillight_Side002"].geometry}
          material={materials.Chrome}
          position={[0.496, 0.069, -0.14]}
          rotation={[1.743, 0.302, 1.095]}
          scale={[-0.029, -0.012, -0.012]}
        />
        <mesh
          geometry={nodes.bonnet_porsche.geometry}
          material={materials.Carbon_Glossy}
          position={[-0.01, 0.191, -0.18]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Bonnet_Blackbody.geometry}
          material={materials.Flat_Black}
          position={[-0.01, 0.273, -0.172]}
          scale={0.065}
        />
        <group position={[-0.01, -0.292, 0.98]} scale={0.647}>
          <mesh
            geometry={nodes.Plane021.geometry}
            material={materials.Carbon_Glossy}
          />
          <mesh
            geometry={nodes.Plane021_1.geometry}
            material={materials.Bodycolor}
          />
        </group>
        <mesh
          geometry={nodes.Grille_M_Blackbody.geometry}
          material={materials.Flat_Black}
          position={[-0.01, 0.098, -0.384]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Kanapa_podstawa.geometry}
          material={materials.Body_dark}
          position={[-0.01, 0.082, 0.979]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE008.geometry}
          material={materials.Chrome}
          position={[-0.304, 0.09, -0.31]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE009.geometry}
          material={materials.Chrome}
          position={[-0.314, 0.089, -0.306]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE010.geometry}
          material={materials.Chrome}
          position={[-0.324, 0.089, -0.303]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE011.geometry}
          material={materials.Chrome}
          position={[-0.334, 0.088, -0.299]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE012.geometry}
          material={materials.Chrome}
          position={[-0.344, 0.088, -0.295]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE013.geometry}
          material={materials.Chrome}
          position={[-0.354, 0.087, -0.29]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE014.geometry}
          material={materials.Chrome}
          position={[-0.364, 0.087, -0.285]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE015.geometry}
          material={materials.Chrome}
          position={[-0.374, 0.086, -0.279]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE016.geometry}
          material={materials.Chrome}
          position={[-0.384, 0.085, -0.274]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE017.geometry}
          material={materials.Chrome}
          position={[-0.394, 0.085, -0.267]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE018.geometry}
          material={materials.Chrome}
          position={[-0.404, 0.084, -0.261]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE019.geometry}
          material={materials.Chrome}
          position={[-0.413, 0.083, -0.253]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE020.geometry}
          material={materials.Chrome}
          position={[-0.423, 0.082, -0.245]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE021.geometry}
          material={materials.Chrome}
          position={[-0.433, 0.081, -0.235]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE022.geometry}
          material={materials.Chrome}
          position={[-0.442, 0.08, -0.225]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE023.geometry}
          material={materials.Chrome}
          position={[-0.452, 0.079, -0.213]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE024.geometry}
          material={materials.Chrome}
          position={[-0.461, 0.078, -0.2]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE025.geometry}
          material={materials.Chrome}
          position={[-0.47, 0.077, -0.184]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE026.geometry}
          material={materials.Chrome}
          position={[-0.479, 0.075, -0.167]}
          rotation={[0.082, 0.076, 0.015]}
          scale={[0.517, 0.517, 0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE027.geometry}
          material={materials.Chrome}
          position={[0.284, 0.09, -0.31]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE028.geometry}
          material={materials.Chrome}
          position={[0.295, 0.089, -0.306]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE029.geometry}
          material={materials.Chrome}
          position={[0.305, 0.089, -0.303]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE030.geometry}
          material={materials.Chrome}
          position={[0.315, 0.088, -0.299]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE031.geometry}
          material={materials.Chrome}
          position={[0.325, 0.088, -0.295]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE032.geometry}
          material={materials.Chrome}
          position={[0.335, 0.087, -0.29]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE033.geometry}
          material={materials.Chrome}
          position={[0.345, 0.087, -0.285]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE034.geometry}
          material={materials.Chrome}
          position={[0.355, 0.086, -0.279]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE035.geometry}
          material={materials.Chrome}
          position={[0.365, 0.085, -0.274]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE036.geometry}
          material={materials.Chrome}
          position={[0.375, 0.085, -0.267]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE037.geometry}
          material={materials.Chrome}
          position={[0.384, 0.084, -0.261]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE038.geometry}
          material={materials.Chrome}
          position={[0.394, 0.083, -0.253]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE039.geometry}
          material={materials.Chrome}
          position={[0.404, 0.082, -0.245]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE040.geometry}
          material={materials.Chrome}
          position={[0.414, 0.081, -0.235]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE041.geometry}
          material={materials.Chrome}
          position={[0.423, 0.08, -0.225]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE042.geometry}
          material={materials.Chrome}
          position={[0.433, 0.079, -0.213]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE043.geometry}
          material={materials.Chrome}
          position={[0.442, 0.078, -0.2]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE044.geometry}
          material={materials.Chrome}
          position={[0.451, 0.077, -0.184]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_BRAKE045.geometry}
          material={materials.Chrome}
          position={[0.46, 0.075, -0.167]}
          rotation={[-3.059, 0.076, 0.015]}
          scale={[-0.517, -0.517, -0.545]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE004.geometry}
          material={materials.Chrome}
          position={[-0.299, 0.062, -0.317]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE005.geometry}
          material={materials.Chrome}
          position={[-0.31, 0.063, -0.314]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE006.geometry}
          material={materials.Chrome}
          position={[-0.32, 0.063, -0.31]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE007.geometry}
          material={materials.Chrome}
          position={[-0.33, 0.063, -0.307]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE008.geometry}
          material={materials.Chrome}
          position={[-0.341, 0.063, -0.304]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE009.geometry}
          material={materials.Chrome}
          position={[-0.351, 0.063, -0.3]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE010.geometry}
          material={materials.Chrome}
          position={[-0.361, 0.063, -0.295]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE011.geometry}
          material={materials.Chrome}
          position={[-0.372, 0.063, -0.289]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE012.geometry}
          material={materials.Chrome}
          position={[-0.382, 0.063, -0.284]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE013.geometry}
          material={materials.Chrome}
          position={[-0.392, 0.064, -0.278]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE014.geometry}
          material={materials.Chrome}
          position={[-0.403, 0.064, -0.272]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE015.geometry}
          material={materials.Chrome}
          position={[-0.413, 0.064, -0.264]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE016.geometry}
          material={materials.Chrome}
          position={[-0.423, 0.064, -0.256]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE017.geometry}
          material={materials.Chrome}
          position={[-0.434, 0.064, -0.246]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE018.geometry}
          material={materials.Chrome}
          position={[-0.444, 0.064, -0.236]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE019.geometry}
          material={materials.Chrome}
          position={[-0.454, 0.064, -0.224]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE020.geometry}
          material={materials.Chrome}
          position={[-0.465, 0.063, -0.21]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE021.geometry}
          material={materials.Chrome}
          position={[-0.475, 0.063, -0.194]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE022.geometry}
          material={materials.Chrome}
          position={[-0.486, 0.063, -0.176]}
          rotation={[0.028, 0, -0.025]}
          scale={[0.517, 0.604, 0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE023.geometry}
          material={materials.Chrome}
          position={[0.28, 0.062, -0.317]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE024.geometry}
          material={materials.Chrome}
          position={[0.29, 0.063, -0.314]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE025.geometry}
          material={materials.Chrome}
          position={[0.301, 0.063, -0.31]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE026.geometry}
          material={materials.Chrome}
          position={[0.311, 0.063, -0.307]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE027.geometry}
          material={materials.Chrome}
          position={[0.322, 0.063, -0.304]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE028.geometry}
          material={materials.Chrome}
          position={[0.332, 0.063, -0.3]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE029.geometry}
          material={materials.Chrome}
          position={[0.342, 0.063, -0.295]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE030.geometry}
          material={materials.Chrome}
          position={[0.353, 0.063, -0.289]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE031.geometry}
          material={materials.Chrome}
          position={[0.363, 0.063, -0.284]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE032.geometry}
          material={materials.Chrome}
          position={[0.373, 0.064, -0.278]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE033.geometry}
          material={materials.Chrome}
          position={[0.384, 0.064, -0.272]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE034.geometry}
          material={materials.Chrome}
          position={[0.394, 0.064, -0.264]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE035.geometry}
          material={materials.Chrome}
          position={[0.404, 0.064, -0.256]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE036.geometry}
          material={materials.Chrome}
          position={[0.415, 0.064, -0.246]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE037.geometry}
          material={materials.Chrome}
          position={[0.425, 0.064, -0.236]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE038.geometry}
          material={materials.Chrome}
          position={[0.435, 0.064, -0.224]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE039.geometry}
          material={materials.Chrome}
          position={[0.446, 0.063, -0.21]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE040.geometry}
          material={materials.Chrome}
          position={[0.456, 0.063, -0.194]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Light_Lens_REVERSE041.geometry}
          material={materials.Chrome}
          position={[0.466, 0.063, -0.176]}
          rotation={[-3.113, 0, -0.025]}
          scale={[-0.517, -0.604, -0.589]}
        />
        <mesh
          geometry={nodes.Listwa_p.geometry}
          material={materials.Body_dark}
          position={[-0.01, 0.082, 0.979]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Listwa_p_chrom.geometry}
          material={materials.Body_dark}
          position={[-0.01, 0.082, 0.979]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.Logo}
          position={[-0.01, -0.126, 0.533]}
          rotation={[1.708, -Math.PI / 2, 0]}
          scale={0.027}
        />
        <mesh
          geometry={nodes.Plane006.geometry}
          material={materials.Chrome}
          position={[-0.373, 0.076, -0.362]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Plane008.geometry}
          material={materials.Chrome}
          position={[-0.547, 0.071, -0.147]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Plane044.geometry}
          material={materials.Chrome}
          position={[0.528, 0.071, -0.147]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Plane010.geometry}
          material={materials.Chrome}
          position={[-0.373, 0.076, -0.362]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Plane045.geometry}
          material={materials.Chrome}
          position={[0.354, 0.076, -0.362]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Plane011.geometry}
          material={materials.Chrome}
          position={[-0.373, 0.076, -0.362]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Plane046.geometry}
          material={materials.Chrome}
          position={[0.354, 0.076, -0.362]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Plane043.geometry}
          material={materials.Chrome}
          position={[0.354, 0.076, -0.362]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.PORSCHE_Badge.geometry}
          material={materials.Body_dark}
          position={[-0.01, 0.071, -0.398]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Seat_Center_Deep.geometry}
          material={materials.Alcantara}
          position={[-0.01, -0.292, 0.977]}
          scale={[0.65, 0.647, 0.649]}
        />
        <mesh
          geometry={nodes.Seat_Center_Deep002.geometry}
          material={materials.Alcantara}
          position={[-0.01, -0.292, 0.978]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Seat_Headrest.geometry}
          material={newLeatherMaterial}
          position={[-0.01, -0.292, 0.98]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Seat_Leather_EXT004.geometry}
          material={newLeatherMaterial}
          position={[-0.01, -0.292, 0.98]}
          scale={0.647}
        />
        {/* <mesh */}
        {/*   geometry={nodes.Seat_Headrest.geometry} */}
        {/*   material={materials.Leather_Black_Porshe} */}
        {/*   position={[-0.01, -0.292, 0.98]} */}
        {/*   scale={0.647} */}
        {/* /> */}
        {/* <mesh */}
        {/*   geometry={nodes.Seat_Leather_EXT004.geometry} */}
        {/*   material={materials.Leather_Black_Porshe} */}
        {/*   position={[-0.01, -0.292, 0.98]} */}
        {/*   scale={0.647} */}
        {/* /> */}
        <mesh
          geometry={nodes.Stitching001.geometry}
          material={materials.Stitch}
          position={[0.354, -0.034, 0.464]}
          scale={0.196}
        />
        <mesh
          geometry={nodes.Stitching002.geometry}
          material={materials.Stitch}
          position={[0.354, -0.028, 0.461]}
          scale={0.196}
        />
        <mesh
          geometry={nodes.Taillight_Blackbody.geometry}
          material={materials.Flat_Black}
          position={[-0.01, -0.292, 0.98]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Blackbody004.geometry}
          material={materials.Flat_Black}
          position={[-0.01, -0.292, 0.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Taillight_Blackbody_Wall.geometry}
          material={materials.Flat_Black}
          position={[-0.01, 0.082, 0.98]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Blackbody_Wall004.geometry}
          material={materials.Flat_Black}
          position={[-0.01, 0.082, 0.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Taillight_Glass_3D_1002.geometry}
          material={materials["Glass white"]}
          position={[-0.01, 0.082, 0.979]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Glass_3D_1008.geometry}
          material={redGlass}
          position={[-0.01, 0.082, 0.979]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Taillight_Glass_3D_11.geometry}
          material={redGlass}
          position={[-0.01, 0.082, 0.979]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Pattern.geometry}
          material={materials.Chrome}
          position={[-0.505, 0.05, -0.193]}
          rotation={[0.872, 0.579, 0.203]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Pattern001.geometry}
          material={materials.Chrome}
          position={[-0.517, 0.053, -0.162]}
          rotation={[0.827, 0.617, 0.2]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Pattern002.geometry}
          material={materials.Chrome}
          position={[-0.526, 0.042, -0.152]}
          rotation={[0.807, 0.748, 0.174]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.Taillight_Pattern012.geometry}
          material={materials.Chrome}
          position={[0.486, 0.05, -0.193]}
          rotation={[-2.27, 0.579, 0.203]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Taillight_Pattern013.geometry}
          material={materials.Chrome}
          position={[0.498, 0.053, -0.162]}
          rotation={[-2.315, 0.617, 0.2]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Taillight_Pattern014.geometry}
          material={materials.Chrome}
          position={[0.506, 0.042, -0.152]}
          rotation={[-2.334, 0.748, 0.174]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.TL_Pattern_Stripe_B.geometry}
          material={materials["Glass white"]}
          position={[-0.01, -0.292, 0.98]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.TL_Pattern_Stripe_B004.geometry}
          material={materials["Glass white"]}
          position={[-0.01, -0.292, 0.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.TL_Pattern_Stripe_M.geometry}
          material={materials["Glass white"]}
          position={[-0.01, -0.292, 0.98]}
          scale={0.647}
        />
        <mesh
          geometry={nodes.TL_Pattern_Stripe_M004.geometry}
          material={materials["Glass white"]}
          position={[-0.01, -0.292, 0.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-0.647}
        />
        <mesh
          geometry={nodes.Wlot_p_wn.geometry}
          material={materials.Flat_Black}
          position={[-0.01, 0.082, 0.979]}
          scale={0.647}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/PorscheSeats.gltf");
