import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function TablePorsche(props) {
  const { nodes, materials } = useGLTF('TablePorsche/TablePorsche.gltf')

  // Function to copy all properties from one material to another
  const copyMaterialProperties = (sourceMaterial, destinationMaterial) => {
    for (const prop in sourceMaterial) {
      if (sourceMaterial.hasOwnProperty(prop)) {
        destinationMaterial[prop] = sourceMaterial[prop];
      }
    }
  };

 // Convert materials to MeshPhysicalMaterial
  for (const materialName in materials) {
    if (materials.hasOwnProperty(materialName)) {
      const originalMaterial = materials[materialName];
      materials[materialName] = new THREE.MeshPhysicalMaterial();
      copyMaterialProperties(originalMaterial, materials[materialName]);
    }
  }
materials.Glass  = new THREE.MeshPhysicalMaterial({
  transparent: true,
  opacity: 0.3,
  // transmission: 1.0,
  reflectivity: 0.9,
  roughness: 0.1,
  ior: 1.5,
  color: 0xffffff, // Set your desired color
});


  // const glassMaterial = new THREE.MeshStandardMaterial({
  //   color: 0xffffff,
  //   transparent: true,
  //   opacity: 0.3,
  //   roughness: 0.1, 
  //   metalness: 0.9, 
  //   envMapIntensity: 3, // Adjust environment map intensity
  // });
  return (
    <group {...props} dispose={null} >
      <group position={[0.111, 0.179, -0.008]} rotation={[-1.566, -0.326, 1.566]}>
        <mesh geometry={nodes.Mesh007.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Mesh007_1.geometry} material={materials['Chrome.002']} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={materials.Glass} position={[0, 0.338, -0.008]} rotation={[0, -0.001, -0.596]} scale={[0.546, 0.547, 0.488]} />
      <mesh geometry={nodes.Plane047.geometry} material={materials.Paint_Main_Black} position={[-0.876, 0.433, -0.009]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
      <mesh geometry={nodes.Plane049.geometry} material={materials['Material.003']} position={[-0.876, 0.433, -0.009]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
      <mesh geometry={nodes.stolik006.geometry} material={materials.Paint_Main} position={[-0.67, 0.001, 0.472]} rotation={[Math.PI / 2, 0, 0.001]} scale={0.038} />
    </group>
  )
}

useGLTF.preload('TablePorsche/TablePorsche.gltf')
