import React, { useEffect, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import * as THREE from "three";

export function SofaCobra({ carColor, leatherColor, ...props }) {
  const { nodes, materials } = useGLTF("SofaCobra/SofaCobra.gltf");

  const lampGlass = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
    roughness: 0.1, // Adjust the roughness for reflections
    metalness: 0.9, // Adjust the metalness for reflections
    envMapIntensity: 3, // Adjust environment map intensity
  });
  const redGlass = new THREE.MeshStandardMaterial({
    color: 0x880000,
    transparent: true,
    opacity: 0.8,
    roughness: 0.1, // Adjust the roughness for reflections
    metalness: 0.9, // Adjust the metalness for reflections
    envMapIntensity: 3, // Adjust environment map intensity
  });
  applyProps(materials.Paint_Main, { color: carColor });
  if (carColor == "#FFFFFF") {
    applyProps(materials.Stripes, { color: "#000000" });
  } else {
    applyProps(materials.Stripes, { color: "#ffffff" });
  }
  const [material, setMaterial] = useState(false);

    const aoMap = useTexture("/textures/Aluminium 5_ambientOcclusion.jpeg")
    const map = useTexture("/textures/Aluminium 5_baseColor.jpeg")
    // const gloss = useTexture("/textures/Aluminium 5_glossiness.jpeg")
    // const height = useTexture("Aluminium 5_height.jpeg")
    const metal = useTexture("/textures/Aluminium 5_metallic.jpeg")
    const nor   = useTexture("/textures/Aluminium 5_normal.jpeg")
  // nor.repeat.set(0.8,0.8)
  // nor.wrapS = nor.wrapT = THREE.RepeatWrapping;
nor.magFilter = THREE.NearestFilter;  // or THREE.LinearFilter
nor.minFilter = THREE.NearestFilter;  // or THREE.LinearFilter
  // nor.wrapT = 10;
    const rough = useTexture("/textures/Aluminium 5_roughness.jpeg")

  // const map = useTexture("/textures/ss.jpeg");
  // const aoMap = useTexture("/textures/Metal_ao.jpg")
  // const rough = useTexture("/textures/Metal_rough.jpg")
  // const metal = useTexture("/textures/Metal_metal.jpg")
  // const nor = useTexture("/textures/Aluminium_nor.jpeg")
  // const disp = useTexture("/textures/Aluminium_disp.jpeg")
  const newBodyColor = new THREE.MeshStandardMaterial({
    color: "#848789",
    // map: map,
    // aoMap:aoMap,
    // metalnessMap:metal,
    // roughnessMap:rough,
    normalMap:nor,
  });
newBodyColor.side = THREE.DoubleSide;  // or THREE.FrontSide or THREE.BackSide
  useEffect(() => {
    if (carColor == "#848789") {
      setMaterial(true);
    }else{
      setMaterial(false);
    }
  },[carColor]);

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
          material={material ? newBodyColor : materials.Paint_Main}
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
          material={lampGlass}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
        <mesh
          geometry={nodes.Lampa_klosz002.geometry}
          material={lampGlass}
          position={[-0.365, 0.214, -0.242]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
      </group>
      <group scale={2.228}>
        {/* <mesh geometry={nodes.Migacz_klosz001.geometry} material={materials['Glass Orange.003']} position={[-0.365, 0.133, -0.213]} rotation={[Math.PI, -0.001, Math.PI]} scale={0.449} /> */}
        <mesh
          geometry={nodes.Migacz_klosz001.geometry}
          material={redGlass}
          position={[-0.365, 0.133, -0.213]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={0.449}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/SofaCobra/SofaCobra.gltf");
