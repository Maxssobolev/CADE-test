import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Cone3dProps {
    className?: string;
    coneParameters: {
        radius: number,
        height: number,
        segments: number,
    }
}

export const Cone3d: FC<Cone3dProps> = ({className, coneParameters }) => {

  const sceneRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  
  const coneRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    // Создаю сцену
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xAAAAAA);

    // Создаю камеру
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Создаю рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Конус
    const coneGeometry = new THREE.ConeGeometry(coneParameters.radius, coneParameters.height, coneParameters.segments);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    scene.add(cone);

   
    sceneRef.current?.appendChild(renderer.domElement);
    cameraRef.current = camera;
    rendererRef.current = renderer;
    coneRef.current = cone;

   
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Очистка ресурсов при размонтировании компонента
      scene.remove(cone);
      renderer.dispose();
    };
  }, [coneParameters]);
  
  return (
    <div ref={sceneRef}> </div>
  );
}