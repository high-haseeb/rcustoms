import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'

export function TableCobra({ currColor, colors, ...props }) {
  const { nodes, materials } = useGLTF('TableCobra/TableCobra.gltf')

  useEffect(() => {
    if (!colors.hasOwnProperty(currColor)) {
      currColor = Object.values(colors)[0];
    }
    applyProps(materials.Stripes, {color: currColor});
  }, [currColor])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Blat001.geometry} material={materials.Stripes} position={[0, 0.412, -0.038]} scale={0.01} />
      <mesh geometry={nodes.Blat_obwod.geometry} material={materials['Paint_Main_Black.002']} position={[0, 0.412, -0.038]} scale={0.01} />
      <mesh geometry={nodes.Stolik_laczniki.geometry} material={materials.Chrome} position={[0.244, -0.043, -0.038]} scale={0.01} />
      <mesh geometry={nodes.Stolik_nogi002.geometry} material={materials.Chrome} position={[0.244, 0.002, -0.038]} scale={[0.01, 0.011, 0.01]} />
    </group>
  )
}

useGLTF.preload('TableCobra/TableCobra.gltf')
