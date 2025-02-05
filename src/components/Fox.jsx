import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Fox(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Fox.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(()=>{
    actions.Walk.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="root">
          <skinnedMesh
            name="fox"
            
            geometry={nodes.fox.geometry}
            material={materials.fox_material}
            skeleton={nodes.fox.skeleton}
          />
          <primitive object={nodes._rootJoint} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Fox.glb')