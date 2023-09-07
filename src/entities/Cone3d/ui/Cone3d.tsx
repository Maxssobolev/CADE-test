import { FC, useEffect, useRef } from 'react';
import { createCamera } from 'shared/lib/helpers/createCamera';
import { createCone } from 'shared/lib/helpers/createCone3d';
import { createLight } from 'shared/lib/helpers/createLight';
import { createRenderer } from 'shared/lib/helpers/createRenderer';
import { createScene } from 'shared/lib/helpers/createScene';
import { TriangulationResponse } from 'shared/types/triangulation.interface';
import { Mesh, BufferGeometry, NormalBufferAttributes } from 'three';

interface Cone3dProps {
    className?: string;
    coneParameters: TriangulationResponse;
}

export const Cone3d: FC<Cone3dProps> = ({className, coneParameters}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const coneRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, any> | null>(null);
  const cameraRef = useRef<THREE.Camera | null>(null);

  useEffect(() => {

    const scene = createScene({color: 0xe6eaeb})
    const camera = createCamera({})
    
    const renderer = createRenderer({})

    sceneRef.current = scene
    cameraRef.current = camera

    divRef.current?.appendChild(renderer.domElement);
    
    const animate = () => {
      requestAnimationFrame(animate);
      if(coneRef.current){
        coneRef.current.rotation.z += 0.005;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if(coneRef.current){
        sceneRef.current?.remove(coneRef.current);
      }
      renderer.dispose();
    };

  }, []);

  useEffect(() => {
    const light = createLight()
    sceneRef.current?.add(light)
    
  }, [])

  useEffect(() => {
    if(coneRef.current){
      sceneRef.current?.remove(coneRef.current);
    }
    
    coneRef.current = createCone(coneParameters)
    sceneRef.current?.add(coneRef.current);
    cameraRef.current?.lookAt(coneRef.current.position)

  }, [coneParameters, sceneRef])
  
  return <div ref={divRef}></div>
}