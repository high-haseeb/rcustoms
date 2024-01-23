import React, { useRef, useLayoutEffect, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import * as THREE from "three";

export function ArmChairCobra({ carColor, colors, leatherColor, ...props }) {

  useEffect(() => {
 if (!Object.values(colors).includes(carColor)) {
      carColor = Object.values(colors)[0];
    }
  }, [carColor])

  const { nodes, materials } = useGLTF("ArmchairCobra/ArmChairCobra.gltf");
  const redGlass = new THREE.MeshStandardMaterial({
    color: 0x880000,
    // emissive: "#ff0000", // Emissive color for the backlight glow
    // emissiveIntensity: 0.5, // Intensity of the emissive glow
    transparent: true,
    opacity: 0.8,
    roughness: 0.1, // Adjust the roughness for reflections
    metalness: 0.9, // Adjust the metalness for reflections
    clearcoat: 1.0, // Clearcoat intensity
    clearcoatRoughness: 0.1, // Clearcoat roughness
    transmission: 0.9, // Light transmission through the material
    envMapIntensity: 3, // Adjust environment map intensity
    refractionRatio: 0.98,
  });
  useLayoutEffect(() => {
    // Object.values(nodes).forEach(
    //   (node) => node.isMesh && (node.receiveShadow = node.castShadow = true),
    // );
    // applyProps(materials.Paint_Main, { color: '#002855'})
  }, [nodes, materials]);

  const newLeatherMaterial = new THREE.MeshStandardMaterial();
  Object.assign( newLeatherMaterial,materials.Leather_Armchair);
  newLeatherMaterial.roughness = 0.95
  // newLeatherMaterial.color.set('#5f361b')
  newLeatherMaterial.color.set(leatherColor)
  // newLeatherMaterial.color.set('#2A1711')
  // Object.assign( materials.Leather_Armchair,newLeatherMaterial);


  applyProps(materials.Paint_Main,{color:carColor})
  if(carColor == "#FFFFFF"){
    applyProps(materials.Stripes, {color:"#000000"})
  }else{
    applyProps(materials.Stripes, {color:"#ffffff"})
  }
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh
          geometry={nodes.Body_Cut001.geometry}
          material={materials.Paint_Main}
          position={[0, 0.331, -0.012]}
        />
        <mesh
          geometry={nodes.Body_pasy004.geometry}
          material={materials.Stripes}
          position={[0, 0.331, -0.012]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.Chrome_dark}
          position={[0.552, 0.338, 0.539]}
        />
        <mesh
          geometry={nodes.Cylinder001003.geometry}
          material={materials.Chrome_dark}
          position={[0.383, 0, 0.327]}
        />
        <mesh
          geometry={nodes.Cylinder002003.geometry}
          material={materials.Chrome_dark}
          position={[0.383, 0, 0.327]}
        />
        <mesh
          geometry={nodes.Cylinder003003.geometry}
          material={materials.Chrome_dark}
          position={[0.383, 0, 0.327]}
        />
        <mesh
          geometry={nodes.Cylinder008001.geometry}
          material={materials.Chrome_dark}
          position={[-0.383, 0, 0.327]}
        />
        <mesh
          geometry={nodes.Cylinder009001.geometry}
          material={materials.Chrome_dark}
          position={[-0.383, 0, 0.327]}
        />
        <mesh
          geometry={nodes.Cylinder010001.geometry}
          material={materials.Chrome_dark}
          position={[-0.383, 0, 0.327]}
        />
        <mesh
          geometry={nodes.Cylinder011003.geometry}
          material={materials.Chrome_dark}
          position={[0.453, 0, -0.384]}
        />
        <mesh
          geometry={nodes.Cylinder012003.geometry}
          material={materials.Chrome_dark}
          position={[0.453, 0, -0.384]}
        />
        <mesh
          geometry={nodes.Cylinder013001.geometry}
          material={materials.Chrome_dark}
          position={[-0.453, 0, -0.384]}
        />
        <mesh
          geometry={nodes.Cylinder014001.geometry}
          material={materials.Chrome_dark}
          position={[-0.453, 0, -0.384]}
        />
        <mesh
          geometry={nodes.Cylinder015001.geometry}
          material={materials.Chrome_dark}
          position={[-0.453, 0, -0.384]}
        />
        <mesh
          geometry={nodes.Cylinder016003.geometry}
          material={materials.Chrome_dark}
          position={[0.453, 0, -0.384]}
        />
        <mesh
          geometry={nodes.Floor002.geometry}
          material={materials.Flat_Black}
          position={[0, 0.005, 0.012]}
        />
        <mesh
          geometry={nodes.Migacz_obudowa003.geometry}
          material={materials.Chrome}
          position={[0.552, 0.344, 0.54]}
        />
        <mesh
          geometry={nodes.Migacz_obudowa001001.geometry}
          material={materials.Chrome}
          position={[-0.552, 0.344, 0.54]}
        />
        <mesh
          geometry={nodes.Migacz_uszczelka003.geometry}
          material={materials.Rubber}
          position={[0.552, 0.344, 0.54]}
        />
        <mesh
          geometry={nodes.Migacz_uszczelka001001.geometry}
          material={materials.Rubber}
          position={[-0.552, 0.344, 0.54]}
        />
        <mesh
          geometry={nodes.Siedzisko009.geometry}
          material={newLeatherMaterial}
          position={[0, 0.239, 0.105]}
        />
        <mesh
          geometry={nodes.Siedzisko010.geometry}
          material={newLeatherMaterial}
          position={[0, 0.239, 0.105]}
        />
        <mesh
          geometry={nodes.Siedzisko011.geometry}
          material={newLeatherMaterial}
          position={[0, 0.239, 0.105]}
        />
        <mesh
          geometry={nodes.Siedzisko_bok005.geometry}
          material={newLeatherMaterial}
          position={[0, 0.239, 0.105]}
        />
        <mesh
          geometry={nodes.Szew391001.geometry}
          material={materials.Stitch}
          position={[0.175, 0.62, -0.253]}
        />
        {/* <mesh geometry={nodes.Taillamp004.geometry} material={materials.Taillamp} /> */}
        {/* <mesh geometry={nodes.Taillamp005.geometry} material={materials.Taillamp} /> */}
        <mesh geometry={nodes.Taillamp004.geometry} material={redGlass} />
        <mesh geometry={nodes.Taillamp005.geometry} material={redGlass} />
        <mesh
          geometry={nodes.Taillight_Housing001.geometry}
          material={materials.Chrome}
          position={[0.552, 0.344, 0.54]}
        />
        <mesh
          geometry={nodes.Wlew_czapka001.geometry}
          material={materials.Chrome_Fuel_Cap}
          position={[0.663, 0.625, 0.113]}
        />
        <mesh
          geometry={nodes.Wlew_dol001.geometry}
          material={materials.Chrome_Fuel_Cap}
          position={[0.599, 0.625, 0.113]}
        />
        <mesh
          geometry={nodes.Wlew_jezyk001.geometry}
          material={materials.Chrome_Fuel_Cap}
          position={[0.536, 0.61, 0.111]}
        />
        <mesh
          geometry={nodes.Wlew_sprezynka001.geometry}
          material={materials.Metal}
          position={[0.536, 0.61, 0.111]}
        />
        <mesh
          geometry={nodes.Wlew_zawias_A001.geometry}
          material={materials.Metal_Rough}
          position={[0.536, 0.61, 0.111]}
        />
        <mesh
          geometry={nodes.Wlew_zawias_B001.geometry}
          material={materials.Chrome_dark}
          position={[0.663, 0.625, 0.113]}
        />
        <mesh
          geometry={nodes.Zderzak_lezka003.geometry}
          material={materials.Chrome}
          position={[0.425, 0.283, 0.544]}
        />
        <mesh
          geometry={nodes.Zderzak_lezka001001.geometry}
          material={materials.Chrome}
          position={[-0.425, 0.283, 0.544]}
        />
        <mesh
          geometry={nodes.Zderzak_lezka_lacznik001.geometry}
          material={materials.Metal}
          position={[0.425, 0.222, 0.579]}
        />
        <mesh
          geometry={nodes.Zderzak_lezka_lacznik001001.geometry}
          material={materials.Metal}
          position={[-0.425, 0.222, 0.579]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("ArmChairCobra/ArmChairCobra.gltf");
