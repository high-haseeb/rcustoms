import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three'

export function TablePorsche(props) {
  const { nodes, materials } = useGLTF('TablePorsche/TablePorsche.gltf')
  console.log(materials)
  const test = new MeshPhysicalMaterial({color: '#555555', metalness: 0.7, roughness: 0.2})
materials.Glass  = new MeshPhysicalMaterial({
  transparent: true,
  opacity: 0.1,
  reflectivity: 0.9,
  roughness: 0.1,
  ior: 1.5,
  color: 0xffffff, // Set your desired color
});
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.338, 1.2]}>
        <group position={[0.111, -0.159, -1.208]} rotation={[-1.566, -0.326, 1.566]}>
          <mesh geometry={nodes.Mesh007.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Mesh007_1.geometry} material={materials['Chrome.002']} />
        </group>
        <mesh geometry={nodes.Plane001.geometry} material={materials.Glass} position={[0, 0, -1.208]} rotation={[0, -0.001, -0.596]} scale={[0.546, 0.547, 0.488]} />
        <mesh geometry={nodes.Plane047.geometry} material={materials.Paint_Main_Black} position={[-0.876, 0.095, -1.209]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
        <mesh geometry={nodes.Plane049.geometry} material={materials.TopNew} position={[-0.876, 0.095, -1.209]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
        <mesh geometry={nodes.Plane049.geometry} material={test} position={[-0.876, 0.095, -1.209]} rotation={[0, -0.001, -0.596]} scale={[0.549, 0.549, 0.489]} />
        <mesh geometry={nodes.stolik006.geometry} material={materials.Paint_Main} position={[-0.67, -0.336, -0.728]} rotation={[Math.PI / 2, 0, 0.001]} scale={0.038} />
      </group>
    </group>
  )
}

useGLTF.preload('TablePorsche/TablePorsche.gltf')
