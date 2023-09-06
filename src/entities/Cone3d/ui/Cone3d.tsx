import { FC, useEffect, useRef } from 'react';
import { createCamera } from 'shared/lib/helpers/createCamera';
import { createCone } from 'shared/lib/helpers/createCone3d';
import { createRenderer } from 'shared/lib/helpers/createRenderer';
import { createScene } from 'shared/lib/helpers/createScene';
import { IConeParams } from 'shared/types/cone3d.interface';

interface Cone3dProps {
    className?: string;
    coneParameters: IConeParams;
}

export const Cone3d: FC<Cone3dProps> = ({className, coneParameters }) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {

    const scene = createScene({color: 0xAAAAAA})
    const camera = createCamera({})
    const renderer = createRenderer({})

    const cone = createCone(coneParameters)

    scene.add(cone);

    sceneRef.current?.appendChild(renderer.domElement);
    
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(cone);
      renderer.dispose();
    };

  }, [coneParameters]);
  
  return <div ref={sceneRef}></div>
}