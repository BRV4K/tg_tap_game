//@ts-nocheck

import './ChoulBoss.scss'

import React, {useEffect} from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useMonsterStatus } from '../../../contexts/MonsterStatus'


export default function ChoulBoss(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('models/Choul-Boss/Choul-Boss.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions, names } = useAnimations(animations, group)
  const {setAnimations, animationIndex} = useMonsterStatus();

  useEffect(() => {
    setAnimations(names)
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return () => {
      if (animationIndex !== 3) {
        try{
          actions[names[animationIndex]].fadeOut(0.5);
        }
        catch (er) {}
      }
    }
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Choul-Boss">
        <group name="ghoul_boss_allinone">
          <group name="root">
            <primitive object={nodes.pelvis} />
          </group>
          <skinnedMesh name="ghoul_boss" geometry={nodes.ghoul_boss.geometry} material={materials.ghoul_boss_mat} skeleton={nodes.ghoul_boss.skeleton} castShadow receiveShadow/>
        </group>
        <PerspectiveCamera name="Main_Camera" makeDefault={false} far={1000.134} near={0.3} fov={60} position={[0, 1, -10]} rotation={[-Math.PI, 0, -Math.PI]} />
        <directionalLight intensity={3.142} decay={2} color="#fff4d6" position={[0, 3, 0]} rotation={[-2.199, -0.327, -2.725]} target={nodes.Directional_Light.target} >
          <primitive object={nodes.Directional_Light.target} position={[0, 0, -1]} />
        </directionalLight>
      </group>
    </group>
  )
}

