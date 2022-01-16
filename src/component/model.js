import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes } = useGLTF('/character.gltf')

  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.getElapsedTime())
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chorao_lowpoly.geometry}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0,1,0]}
      >
          <meshStandardMaterial attach='material' color='white' roughness={0.2}  envMapIntensity={0.2}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/character.gltf')