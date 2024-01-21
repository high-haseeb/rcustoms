import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function TablePorsche(props) {
  const { nodes, materials } = useGLTF('TablePorsche/TablePorsche.gltf')
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
    roughness: 0.1, 
    metalness: 0.9, 
    envMapIntensity: 3,
  });
  return (
    <group {...props} dispose={null} >
      <group position={[0.111, 0.179, -0.008]} rotation={[-1.566, -0.326, 1.566]}>
        <mesh geometry={nodes.Mesh007.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Mesh007_1.geometry} material={materials['Chrome.002']} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={glassMaterial} position={[0, 0.338, -0.008]} rotation={[0, -0.001, -0.596]} scale={[0.546, 0.547, 0.488]} />
      <mesh geometry={nodes.Plane047.geometry} material={materials.Paint_Main_Black} position={[-0.876, 0.433, -0.009]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
      <mesh geometry={nodes.Plane049.geometry} material={materials['Material.003']} position={[-0.876, 0.433, -0.009]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
      <mesh geometry={nodes.stolik006.geometry} material={materials.Paint_Main} position={[-0.67, 0.001, 0.472]} rotation={[Math.PI / 2, 0, 0.001]} scale={0.038} />
    </group>
  )
}

useGLTF.preload('TablePorsche/TablePorsche.gltf')
