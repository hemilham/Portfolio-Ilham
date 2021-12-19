import React, {useRef, Suspense } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { useGLTF } from 'drei/useGLTF';


function Lemonz(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF("lemonz.glb")
    return (
      <group ref={group} {...props} dispose={null}>
          <mesh geometry={nodes.Sphere003_1.geometry} material={materials.plasticine_3} />
          <mesh geometry={nodes.Sphere003_2.geometry} material={materials['Material_0.001']} />
          <mesh geometry={nodes.Sphere003_3.geometry} material={materials.plasticine_1} />
          <mesh geometry={nodes.Sphere003_4.geometry} material={materials['Material_0.002']} />
      </group>
    )
  }

export default function Project3() {
    return(
        <>
        <Canvas>
            <ambientLight intensity={0.5}/>
            <Suspense fallback={null}>
               <Lemonz/>
            </Suspense>
       </Canvas>
        </>

    )
 };