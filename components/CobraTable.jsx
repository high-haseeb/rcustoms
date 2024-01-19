import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CobraTable(props) {
  const { nodes, materials } = useGLTF('/CobraTable/untitled.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Blat001.geometry} material={materials.Stripes} position={[0, 0.412, -1.2]} scale={0.01} />
      <mesh geometry={nodes.Blat_obwod.geometry} material={materials['Paint_Main_Black.002']} position={[0, 0.412, -1.2]} scale={0.01} />
      <mesh geometry={nodes.Stolik_laczniki.geometry} material={materials.Chrome} position={[0.244, -0.043, -1.2]} scale={0.01} />
      <mesh geometry={nodes.Stolik_nogi002.geometry} material={materials.Chrome} position={[0.244, 0.002, -1.2]} scale={[0.01, 0.011, 0.01]} />
    </group>
  )
}

useGLTF.preload('/CobraTable/untitled.gltf')
