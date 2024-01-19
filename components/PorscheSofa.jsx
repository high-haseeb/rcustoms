'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { applyProps } from '@react-three/fiber';
import * as THREE from 'three'

export function PorscheSofa({carColor, ...props }) {
  const { nodes, materials } = useGLTF('PorscheSofa/PorscheSofa.gltf')

  const tempBodyColor = new THREE.MeshStandardMaterial({color:carColor, roughness:0.1, metallness:1})
  applyProps(materials.C112_Carpaint, { color: carColor});
  applyProps(materials['alcantara.001'] ,{ color: "#343434"});
  const newLeatherMaterial = new THREE.MeshStandardMaterial();
  Object.assign(newLeatherMaterial, materials['Leather_Black_Porshe.001']);
  newLeatherMaterial.roughness = 0.75

  const newLeatherMaterial1 = new THREE.MeshStandardMaterial();
  Object.assign(newLeatherMaterial1, materials.Leather);
  newLeatherMaterial1.roughness = 0.75
  const bottomMaterial = new THREE.MeshStandardMaterial()

  Object.assign(bottomMaterial, materials['Black Glossy']);
  bottomMaterial.roughness=1

  return (
    <group {...props} dispose={null}>
      <group position={[13.039, 0.937, 3.016]} rotation={[0, -0.422, 0]}>
        <mesh geometry={nodes.Seat_Headrest.geometry} material={newLeatherMaterial} position={[0, -0.58, 1.426]} />
        <mesh geometry={nodes.Seat_Leather_EXT004.geometry} material={newLeatherMaterial1} position={[0, -0.58, 1.426]} />
        <mesh geometry={nodes.Seat_Leather_EXT005.geometry} material={newLeatherMaterial1} position={[0, -0.58, 1.426]} />
        <mesh geometry={nodes.Seat_Leather_EXT006.geometry} material={newLeatherMaterial1} position={[0, -0.58, 1.426]} />
      </group>
      <group position={[13.039, 0.937, 3.016]} rotation={[0, -0.422, 0]}>
        <group position={[0, -0.58, 1.426]}>
          <mesh geometry={nodes.Cube143.geometry} material={materials.Glass} />
          <mesh geometry={nodes.Cube143_1.geometry} material={materials['911_Automotive_LED_Red']} />
        </group>
        <mesh geometry={nodes.Taillight_Glass_3D_11.geometry} material={materials['911_Glass_Tail']} position={[0, 0, 1.424]} />
        <mesh geometry={nodes.Taillight_Blackbody_Wall.geometry} material={materials['911_Matte_Black']} position={[0, 0, 1.426]} />
        <mesh geometry={nodes.Taillight_Blackbody.geometry} material={materials.Flat_Black} position={[0, -0.58, 1.426]} />
        <mesh geometry={nodes.Plane028.geometry} material={materials['911_Chrome']} position={[-0.562, -0.01, -0.65]} />
        <mesh geometry={nodes.Plane029.geometry} material={materials['911_Chrome']} position={[-0.562, -0.01, -0.65]} />
        <mesh geometry={nodes.Plane030.geometry} material={materials['911_Chrome.001']} position={[-0.831, -0.018, -0.317]} />
        <mesh geometry={nodes['911_Taillight_Side'].geometry} material={materials['911_TL_Emission_A']} position={[-0.781, -0.021, -0.307]} rotation={[-1.399, 0.302, 1.095]} scale={[0.045, 0.018, 0.018]} />
        <mesh geometry={nodes['911_Body_101_Taillight'].geometry} material={materials.C112_Carpaint} position={[0, 0, 1.424]} />
        <mesh geometry={nodes.bonnet_porsche.geometry} material={materials.Carbone} position={[-0.001, 0.167, -0.368]} />
        <mesh geometry={nodes.Bonnet_Blackbody.geometry} material={materials.Flat_Black} position={[0, 0.295, -0.356]} scale={0.1} />
        <group position={[0, -0.58, 1.426]}>
          <mesh geometry={nodes.Plane020.geometry} material={tempBodyColor} />
          {/* <mesh geometry={nodes.Plane020_1.geometry} material={materials['Black Glossy']} /> */}
        </group>
        <mesh geometry={nodes.Grille_M_Blackbody.geometry} material={materials.Flat_Black} position={[0, 0.024, -0.683]} />
        <mesh geometry={nodes.Kanapa_podstawa.geometry} material={bottomMaterial} position={[0, 0, 1.424]} />
        <mesh geometry={nodes.Listwa_p.geometry} material={materials['Black Glossy']} position={[0, 0, 1.424]} />
        <mesh geometry={nodes.Listwa_p_chrom.geometry} material={materials['Black Glossy']} position={[0, 0, 1.424]} />
        <group position={[0, -0.325, 0.72]}>
          <mesh geometry={nodes.Mesh008.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Mesh008_1.geometry} material={materials.Chrome} />
        </group>
        {/* <mesh geometry={nodes.Logo_Porsche001.geometry} material={materials.Glass} position={[0, -0.325, 0.722]} /> */}
        <group position={[-0.562, -0.01, -0.65]}>
          <mesh geometry={nodes.Plane032.geometry} material={materials['911_Chrome']} />
          <mesh geometry={nodes.Plane032_1.geometry} material={materials['911_Taillight_Silver']} />
        </group>
        <mesh geometry={nodes.Seat_Center_Deep.geometry} material={materials['alcantara.001']} position={[0, -0.58, 1.421]} scale={[1.005, 1, 1.004]} />
        <mesh geometry={nodes.Seat_Center_Deep002.geometry} material={materials['alcantara.001']} position={[0, -0.58, 1.423]} />
        <mesh geometry={nodes.Stitching001.geometry} material={materials.STITCH} position={[0.563, -0.179, 0.628]} scale={0.303} />
        <mesh geometry={nodes.Stitching002.geometry} material={materials.STITCH} position={[0.562, -0.171, 0.623]} scale={0.303} />
        <mesh geometry={nodes.Taillight_Glass_3D_1002.geometry} material={materials['Glass.001']} position={[0, 0, 1.424]} />
        <mesh geometry={nodes.Taillight_Pattern.geometry} material={materials.Glass} position={[-0.766, -0.051, -0.389]} rotation={[0.872, 0.579, 0.203]} />
        <mesh geometry={nodes.Taillight_Pattern001.geometry} material={materials.Glass} position={[-0.785, -0.046, -0.341]} rotation={[0.827, 0.617, 0.2]} />
        <mesh geometry={nodes.Taillight_Pattern002.geometry} material={materials.Glass} position={[-0.798, -0.063, -0.325]} rotation={[0.807, 0.748, 0.174]} />
        <mesh geometry={nodes.TL_Pattern_Stripe_M.geometry} material={materials.Glass} position={[0, -0.58, 1.426]} />
        <mesh geometry={nodes.Wlot_p_wn.geometry} material={materials['911_Plastic_Rough']} position={[0, 0, 1.424]} />
      </group>
      <mesh geometry={nodes.TL_Pattern_Stripe_M004.geometry} material={materials.Glass} position={[12.456, 0.358, 4.317]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <group position={[12.456, 0.358, 4.317]} rotation={[-Math.PI, 0.422, 0]} scale={-1}>
        <mesh geometry={nodes.Cube143.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Cube143_1.geometry} material={materials['911_Automotive_LED_Red']} />
      </group>
      <mesh geometry={nodes.Taillight_Pattern014.geometry} material={materials.Glass} position={[13.9, 0.875, 3.046]} rotation={[-1.905, 0.976, -0.382]} scale={-1} />
      <mesh geometry={nodes.Taillight_Pattern013.geometry} material={materials.Glass} position={[13.895, 0.891, 3.026]} rotation={[-1.989, 0.854, -0.276]} scale={-1} />
      <mesh geometry={nodes.Taillight_Pattern012.geometry} material={materials.Glass} position={[13.897, 0.886, 2.975]} rotation={[-1.966, 0.803, -0.265]} scale={-1} />
      <mesh geometry={nodes.Taillight_Glass_3D_1008.geometry} material={materials['911_Glass_Tail']} position={[12.457, 0.937, 4.315]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <mesh geometry={nodes.Taillight_Blackbody_Wall004.geometry} material={materials['911_Matte_Black']} position={[12.456, 0.937, 4.317]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <mesh geometry={nodes.Taillight_Blackbody004.geometry} material={materials.Flat_Black} position={[12.456, 0.358, 4.317]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <mesh geometry={nodes.Plane046.geometry} material={materials['911_Chrome']} position={[13.818, 0.928, 2.653]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <mesh geometry={nodes.Plane045.geometry} material={materials['911_Chrome']} position={[13.818, 0.928, 2.653]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <mesh geometry={nodes.Plane044.geometry} material={materials['911_Chrome.001']} position={[13.928, 0.919, 3.067]} rotation={[-Math.PI, 0.422, 0]} scale={-1} />
      <group position={[13.818, 0.928, 2.653]} rotation={[-Math.PI, 0.422, 0]} scale={-1}>
        <mesh geometry={nodes.Plane028_1.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Plane028_2.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <mesh geometry={nodes.path1001.geometry} material={materials['Black Glossy']} position={[13.329, 0.92, 2.37]} rotation={[-0.896, -0.273, -0.325]} scale={-1.407} />
      <group position={[13.859, 0.907, 2.987]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.856, 0.907, 2.954]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_2.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_3.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.851, 0.908, 2.926]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_4.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_5.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.846, 0.908, 2.899]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_6.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_7.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.839, 0.908, 2.876]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_8.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_9.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.831, 0.908, 2.855]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_10.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_11.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.822, 0.908, 2.835]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_12.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_13.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.813, 0.908, 2.816]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_14.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_15.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.803, 0.908, 2.8]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_16.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_17.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.792, 0.908, 2.784]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_18.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_19.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.782, 0.908, 2.769]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_20.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_21.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.77, 0.908, 2.755]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_22.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_23.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.759, 0.908, 2.741]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_24.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_25.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.748, 0.907, 2.727]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_26.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_27.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.736, 0.907, 2.715]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_28.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_29.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.723, 0.907, 2.704]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_30.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_31.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.711, 0.907, 2.693]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_32.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_33.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.698, 0.906, 2.682]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_34.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_35.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.685, 0.906, 2.671]} rotation={[-3.11, 0.422, -0.037]} scale={[-0.8, -0.934, -0.911]}>
        <mesh geometry={nodes.Sphere_36.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_37.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.516, 0.907, 2.384]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_38.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_39.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.542, 0.907, 2.365]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_40.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_41.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.567, 0.908, 2.349]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_42.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_43.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.591, 0.908, 2.336]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_44.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_45.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.613, 0.908, 2.326]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_46.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_47.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.634, 0.908, 2.318]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_48.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_49.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.654, 0.908, 2.311]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_50.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_51.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.674, 0.908, 2.306]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_52.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_53.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.693, 0.908, 2.302]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_54.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_55.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.712, 0.908, 2.299]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_56.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_57.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.731, 0.908, 2.297]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_58.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_59.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.748, 0.908, 2.297]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_60.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_61.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.766, 0.908, 2.296]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_62.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_63.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.784, 0.907, 2.295]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_64.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_65.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.801, 0.907, 2.296]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_66.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_67.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.818, 0.907, 2.298]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_68.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_69.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.835, 0.907, 2.3]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_70.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_71.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.851, 0.906, 2.302]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_72.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_73.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.868, 0.906, 2.304]} rotation={[0.031, -0.422, -0.012]} scale={[0.8, 0.934, 0.911]}>
        <mesh geometry={nodes.Sphere_74.geometry} material={materials['911_Chrome']} />
        <mesh geometry={nodes.Sphere_75.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.844, 0.926, 2.996]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.843, 0.928, 2.966]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.84, 0.93, 2.938]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.835, 0.932, 2.913]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.829, 0.934, 2.891]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.822, 0.936, 2.87]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.815, 0.937, 2.85]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.806, 0.938, 2.832]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.797, 0.94, 2.816]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.787, 0.941, 2.8]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.778, 0.942, 2.784]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.767, 0.943, 2.771]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.756, 0.944, 2.756]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.746, 0.945, 2.742]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.735, 0.945, 2.73]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.723, 0.946, 2.718]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.711, 0.947, 2.706]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.699, 0.948, 2.695]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[13.687, 0.948, 2.683]} rotation={[-3.048, 0.497, -0.023]} scale={[-0.8, -0.8, -0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.519, 0.926, 2.402]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.543, 0.928, 2.382]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.565, 0.93, 2.367]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.587, 0.932, 2.353]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.608, 0.934, 2.343]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.628, 0.936, 2.334]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.648, 0.937, 2.327]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.667, 0.938, 2.321]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.685, 0.94, 2.317]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.703, 0.941, 2.314]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.722, 0.942, 2.311]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.739, 0.943, 2.31]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.757, 0.944, 2.308]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.774, 0.945, 2.306]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.791, 0.945, 2.306]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.808, 0.946, 2.308]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.824, 0.947, 2.308]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.841, 0.948, 2.31]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <group position={[12.857, 0.948, 2.311]} rotation={[0.087, -0.344, 0.051]} scale={[0.8, 0.8, 0.843]}>
        <mesh geometry={nodes.Sphere002.geometry} material={materials['911_Taillight/Chrome']} />
        <mesh geometry={nodes.Sphere002_1.geometry} material={materials['911_Taillight_Silver']} />
      </group>
      <mesh geometry={nodes['911_Taillight_Side002'].geometry} material={materials['911_TL_Emission_A']} position={[13.878, 0.916, 3.056]} rotation={[1.6, 0.345, 1.538]} scale={[-0.045, -0.018, -0.018]} />
    </group>
  )
}

useGLTF.preload('/PorscheSofa/PorscheSofa.gltf')
