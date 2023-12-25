import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLayoutEffect } from 'react'
import * as THREE from 'three'

export function ArmChairCobra(props) {
  const { nodes, materials } = useGLTF('ArmchairCobra/armChairCobra.gltf')
const redTintedGlassMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color(1, 0, 0), // Red color
  transparent: true,
  opacity: 0.7, // Adjust opacity based on your preference
  roughness: 0.2, // Adjust roughness for a glass-like appearance
  metalness: 0.5, // Adjust metalness for reflections
  envMapIntensity: 1, // Adjust environment map intensity
});
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
  }, [nodes, materials])
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Body_Cut001.geometry} material={materials.Paint_Main} position={[0, 0.331, -0.012]} />
        <mesh geometry={nodes.Body_pasy004.geometry} material={materials.Stripes} position={[0, 0.331, -0.012]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials.Chrome_dark} position={[0.552, 0.338, 0.539]} />
        <mesh geometry={nodes.Cylinder001003.geometry} material={materials.Chrome_dark} position={[0.383, 0, 0.327]} />
        <mesh geometry={nodes.Cylinder002003.geometry} material={materials.Chrome_dark} position={[0.383, 0, 0.327]} />
        <mesh geometry={nodes.Cylinder003003.geometry} material={materials.Chrome_dark} position={[0.383, 0, 0.327]} />
        <mesh geometry={nodes.Cylinder008001.geometry} material={materials.Chrome_dark} position={[-0.383, 0, 0.327]} />
        <mesh geometry={nodes.Cylinder009001.geometry} material={materials.Chrome_dark} position={[-0.383, 0, 0.327]} />
        <mesh geometry={nodes.Cylinder010001.geometry} material={materials.Chrome_dark} position={[-0.383, 0, 0.327]} />
        <mesh geometry={nodes.Cylinder011003.geometry} material={materials.Chrome_dark} position={[0.453, 0, -0.384]} />
        <mesh geometry={nodes.Cylinder012003.geometry} material={materials.Chrome_dark} position={[0.453, 0, -0.384]} />
        <mesh geometry={nodes.Cylinder013001.geometry} material={materials.Chrome_dark} position={[-0.453, 0, -0.384]} />
        <mesh geometry={nodes.Cylinder014001.geometry} material={materials.Chrome_dark} position={[-0.453, 0, -0.384]} />
        <mesh geometry={nodes.Cylinder015001.geometry} material={materials.Chrome_dark} position={[-0.453, 0, -0.384]} />
        <mesh geometry={nodes.Cylinder016003.geometry} material={materials.Chrome_dark} position={[0.453, 0, -0.384]} />
        <mesh geometry={nodes.Floor002.geometry} material={materials.Flat_Black} position={[0, 0.005, 0.012]} />
        <mesh geometry={nodes.Migacz_obudowa003.geometry} material={materials.Chrome} position={[0.552, 0.344, 0.54]} />
        <mesh geometry={nodes.Migacz_obudowa001001.geometry} material={materials.Chrome} position={[-0.552, 0.344, 0.54]} />
        <mesh geometry={nodes.Migacz_uszczelka003.geometry} material={materials.Rubber} position={[0.552, 0.344, 0.54]} />
        <mesh geometry={nodes.Migacz_uszczelka001001.geometry} material={materials.Rubber} position={[-0.552, 0.344, 0.54]} />
        <mesh geometry={nodes.Siedzisko009.geometry} material={materials.Leather_Armchair} position={[0, 0.239, 0.105]} />
        <mesh geometry={nodes.Siedzisko010.geometry} material={materials.Leather_Armchair} position={[0, 0.239, 0.105]} />
        <mesh geometry={nodes.Siedzisko011.geometry} material={materials.Leather_Armchair} position={[0, 0.239, 0.105]} />
        <mesh geometry={nodes.Siedzisko_bok005.geometry} material={materials.Leather_Armchair} position={[0, 0.239, 0.105]} />
        <mesh geometry={nodes.Szew391001.geometry} material={materials.Stitch} position={[0.175, 0.62, -0.253]} />
        {/* <mesh geometry={nodes.Taillamp004.geometry} material={materials.Taillamp} /> */}
        {/* <mesh geometry={nodes.Taillamp005.geometry} material={materials.Taillamp} /> */}
        <mesh geometry={nodes.Taillamp004.geometry} material={redTintedGlassMaterial} />
        <mesh geometry={nodes.Taillamp005.geometry} material={redTintedGlassMaterial} />
        <mesh geometry={nodes.Taillight_Housing001.geometry} material={materials.Chrome} position={[0.552, 0.344, 0.54]} />
        <mesh geometry={nodes.Wlew_czapka001.geometry} material={materials.Chrome_Fuel_Cap} position={[0.663, 0.625, 0.113]} />
        <mesh geometry={nodes.Wlew_dol001.geometry} material={materials.Chrome_Fuel_Cap} position={[0.599, 0.625, 0.113]} />
        <mesh geometry={nodes.Wlew_jezyk001.geometry} material={materials.Chrome_Fuel_Cap} position={[0.536, 0.61, 0.111]} />
        <mesh geometry={nodes.Wlew_sprezynka001.geometry} material={materials.Metal} position={[0.536, 0.61, 0.111]} />
        <mesh geometry={nodes.Wlew_zawias_A001.geometry} material={materials.Metal_Rough} position={[0.536, 0.61, 0.111]} />
        <mesh geometry={nodes.Wlew_zawias_B001.geometry} material={materials.Chrome_dark} position={[0.663, 0.625, 0.113]} />
        <mesh geometry={nodes.Zderzak_lezka003.geometry} material={materials.Chrome} position={[0.425, 0.283, 0.544]} />
        <mesh geometry={nodes.Zderzak_lezka001001.geometry} material={materials.Chrome} position={[-0.425, 0.283, 0.544]} />
        <mesh geometry={nodes.Zderzak_lezka_lacznik001.geometry} material={materials.Metal} position={[0.425, 0.222, 0.579]} />
        <mesh geometry={nodes.Zderzak_lezka_lacznik001001.geometry} material={materials.Metal} position={[-0.425, 0.222, 0.579]} />
      </group>
    </group>
  )
}

useGLTF.preload('/armChairCobra.gltf')
