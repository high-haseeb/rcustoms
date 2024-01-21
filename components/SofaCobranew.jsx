import React, { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { applyProps } from "@react-three/fiber";

export function SofaNew({ carColor, leatherColor, ...props }) {
  const { nodes, materials } = useGLTF("SofaCobraNew/SofaCobra.gltf");

  applyProps(materials.Paint_Main, { color: carColor });

  if (carColor == "#FFFFFF") {
    applyProps(materials.Stripes, { color: "#000000" });
  } else {
    applyProps(materials.Stripes, { color: "#ffffff" });
  }
  // let map;
 const map = useMemo(() => materials.Paint_Main.map, []);
  // useEffect(()=>{
  //   map = materials.Paint_Main.map;
  //   console.log(map)
  // },[])
  if (carColor != "lightgray") {
    materials.Paint_Main.map = 0;
  } else {
    console.log(map)
    materials.Paint_Main.map = map;
  }

  const newLeatherMaterial = new THREE.MeshStandardMaterial();
  Object.assign(newLeatherMaterial, materials.Leather_Sofa);
  newLeatherMaterial.roughness = 0.75;
  Object.assign(materials.Leather_Sofa, newLeatherMaterial);
  newLeatherMaterial.color.set(leatherColor);
  return (
    <group {...props} dispose={null}>
      <group scale={2.228}>
        <mesh
          geometry={nodes.Blackbody001.geometry}
          material={materials.Flat_Black}
          position={[0, 0.12, -0.141]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Body001.geometry}
          material={materials.Paint_Main}
          position={[0, 0.214, -0.235]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Body_pasy003.geometry}
          material={materials.Stripes}
          position={[0, 0.214, -0.235]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder001002.geometry}
          material={materials.Chrome_dark}
          position={[-0.353, 0, -0.141]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder002002.geometry}
          material={materials.Chrome_dark}
          position={[-0.353, 0, -0.141]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder003002.geometry}
          material={materials.Chrome_dark}
          position={[-0.353, 0, -0.141]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder011002.geometry}
          material={materials.Chrome_dark}
          position={[-0.288, 0, 0.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder012002.geometry}
          material={materials.Chrome_dark}
          position={[-0.288, 0, 0.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder016002.geometry}
          material={materials.Chrome_dark}
          position={[-0.288, 0, 0.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder017001.geometry}
          material={materials.Chrome_dark}
          position={[0.353, 0, -0.142]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder018001.geometry}
          material={materials.Chrome_dark}
          position={[0.353, 0, -0.142]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder019001.geometry}
          material={materials.Chrome_dark}
          position={[0.353, 0, -0.142]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder020001.geometry}
          material={materials.Chrome_dark}
          position={[0.288, 0, 0.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder021001.geometry}
          material={materials.Chrome_dark}
          position={[0.288, 0, 0.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder022001.geometry}
          material={materials.Chrome_dark}
          position={[0.288, 0, 0.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Cylinder023001.geometry}
          material={materials.Chrome}
          position={[-0.302, 0.12, -0.261]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_obwodka_A001.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.214, -0.234]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_obwodka_B001.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.214, -0.234]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_p_cylinder001.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_p_logo002.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.213, -0.251]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_p_logo003.geometry}
          material={materials.Chrome}
          position={[0.364, 0.213, -0.251]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_p_uszczelka001.geometry}
          material={materials.Rubber}
          position={[-0.365, 0.214, -0.234]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_rusztowanie001.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_rusztowanie002001.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_wn001.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Migacz_obudowa002.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.133, -0.213]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Migacz_uszczelka002.geometry}
          material={materials.Chrome}
          position={[-0.365, 0.133, -0.213]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <group
          position={[-0.365, 0.214, -0.252]}
          rotation={[Math.PI / 2, 0, 3.141]}
          scale={[0.001, 0.012, 0.012]}
        >
          <mesh
            geometry={nodes.Plane002_1.geometry}
            material={materials.Chrome}
          />
          <mesh
            geometry={nodes.Plane002_2.geometry}
            material={materials.Body_dark}
          />
        </group>
        <group
          position={[0.365, 0.214, -0.252]}
          rotation={[Math.PI / 2, 0, 3.141]}
          scale={[0.001, 0.012, 0.012]}
        >
          <mesh
            geometry={nodes.Plane003_1.geometry}
            material={materials.Chrome}
          />
          <mesh
            geometry={nodes.Plane003_2.geometry}
            material={materials.Body_dark}
          />
        </group>
        <mesh
          geometry={nodes.Siatka_bok001.geometry}
          material={materials.Chrome}
          position={[0, 0.079, -0.212]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siatka_dol001.geometry}
          material={materials.Chrome}
          position={[0, 0.079, -0.223]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siatka_gora001.geometry}
          material={materials.Chrome}
          position={[0, 0.132, -0.229]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siatka_plane001.geometry}
          material={materials.Flat_Black}
          position={[0, 0.079, -0.226]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siedzisko001.geometry}
          material={materials.Leather_Sofa}
          position={[0, 0.132, -0.016]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siedzisko007.geometry}
          material={materials.Leather_Sofa}
          position={[0, 0.132, -0.016]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siedzisko008.geometry}
          material={materials.Leather_Sofa}
          position={[0, 0.132, -0.016]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siedzisko_bok003.geometry}
          material={materials.Leather_Sofa}
          position={[0, 0.131, -0.016]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Siedzisko_bok004.geometry}
          material={materials.Leather_Sofa}
          position={[0, 0.131, -0.016]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Sphere001001.geometry}
          material={materials["Glass white"]}
          position={[-0.365, 0.214, -0.235]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Spod001.geometry}
          material={materials.Flat_Black}
          position={[0, 0.12, -0.141]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Szew2019002.geometry}
          material={materials.Stitch}
          position={[-0.289, 0.169, 0.011]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Szew2019003.geometry}
          material={materials.Stitch}
          position={[-0.289, 0.168, 0.011]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Zderzak_lezka002.geometry}
          material={materials.Chrome}
          position={[-0.302, 0.107, -0.245]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
      </group>
      <group scale={2.228}>
        <mesh
          geometry={nodes.Lampa_klosz001.geometry}
          material={materials["Glass Sofa HEadlights.001"]}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_klosz002.geometry}
          material={materials["Glass Sofa HEadlights.006"]}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
      </group>
      <group scale={2.228}>
        <mesh
          geometry={nodes.Migacz_klosz001.geometry}
          material={materials["Glass Orange.003"]}
          position={[-0.365, 0.133, -0.213]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
      </group>
    </group>
  );
}

useGLTF.preload("SofaCobraNew/SofaCobra.gltf");
