import { Canvas } from "@react-three/fiber";
import Monster from "../Monster/Monster";

function MonsterCanvas() {

    return (
        <div className='h-100'>
            <Canvas shadows camera={{position: [-0.3,2,5]}}>
                <directionalLight
                    position={[1, 15, 0]}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    color={'white'}
                />
                <Monster/>
                <mesh rotation-x={5.1} receiveShadow >
                    <planeGeometry args={[10, 10, 1, 1]} />
                    <shadowMaterial transparent opacity={0.7}/>
                </mesh>
            </Canvas>
        </div>
    )
}

export default MonsterCanvas;
