/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [126.45KB] > /Users/parksangyee/Desktop/project1/landing-page/public/models/butterfly/scene-transformed.glb [90.16KB] (29%)
Author: Artistic_side (https://sketchfab.com/leorehman333)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animated-butterfly-d4fbcbaab845402999f30c5aa75851e6
Title: Animated Butterfly
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export function Butterfly(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/butterfly/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Flying.timeScale = 0.18
    actions.Flying.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Wings} skeleton={nodes.Object_7.skeleton} />
        <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.Wings} skeleton={nodes.Object_9.skeleton} />
        <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials['Material.001']} skeleton={nodes.Object_11.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/butterfly/scene-transformed.glb')
