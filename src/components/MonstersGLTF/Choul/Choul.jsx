import './Choul.scss'

import React, {useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { setAnimations } from "../../../redux/userMonsterAnimation/userMonsterAnimation";
import {useSelector} from "react-redux";

export default function Choul(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('models/Choul/SampleScene.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  const animationIndex = useSelector(state => state.userMonsterAnimation.animationIndex);

  useEffect(() => {
    setAnimations(names)
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      if (animationIndex !== 3){
        try{
          actions[names[animationIndex]].fadeOut(0.5);
        }
        catch (er) {}
      }
    }
  }, [animationIndex]);



  return (
    <group ref={group} {...props} dispose={null} >
      <group name="SampleScene" >
        <group name="ghoul_allinone" >
          <group name="root">
            <primitive object={nodes.pelvis} />
          </group>
          <skinnedMesh name="ghoul" geometry={nodes.ghoul.geometry} material={materials.ghoul_mat} skeleton={nodes.ghoul.skeleton} castShadow receiveShadow/>
          <skinnedMesh name="ghoul_alpha" geometry={nodes.ghoul_alpha.geometry} material={materials.ghoul_mat} skeleton={nodes.ghoul_alpha.skeleton} castShadow receiveShadow/>
        </group>
        <PerspectiveCamera name="Main_Camera" makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
        <directionalLight intensity={3.142} decay={2} color="#fff4d6" position={[0, -3, -3]} rotation={[-2.199, -0.327, -2.725]} target={nodes.Directional_Light.target} castShadow>
          <primitive object={nodes.Directional_Light.target} position={[0, 0, -1]} />
        </directionalLight>
        <directionalLight position={[0,-2,2]} intensity={3} />
        <directionalLight position={[2,3,0.2]} intensity={1.5} />
        <directionalLight position={[0, 4, 0.5]} intensity={1.2}/>
        <directionalLight position={[0, 0.2, 0.1]} intensity={0.7} />
      </group>
    </group>
  )
}

