import React, { FC, MutableRefObject, useEffect, useRef } from 'react';
import { useScene } from 'shared/hooks/useScene';
import * as THREE from 'three';

interface SceneWithCameraProps {
  children?: React.ReactNode;
  cameraParameters: {
    fov: number;
    near: number;
    far: number;
  };
  coneRef: MutableRefObject<THREE.Mesh | null>; 
}

export const Scene3d: FC<SceneWithCameraProps> = ({ children, cameraParameters, coneRef }) => {
  const { sceneRef } = useScene(); // Получите ссылку на сцену из контекста
  console.log(sceneRef)
  useEffect(() => {

    //                                         поле зрения, deg      соотношение сторон                      отображать не ближе чем, не дальше чем
    const camera = new THREE.PerspectiveCamera(cameraParameters.fov, window.innerWidth / window.innerHeight, cameraParameters.near, cameraParameters.far);
    camera.position.z = 2;    

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    if (coneRef.current) {
      sceneRef.current?.add(coneRef.current);
    }
    
    const animate = () => {
      requestAnimationFrame(animate);
      if(sceneRef.current){
        renderer.render(sceneRef.current, camera);
      }
    };

    animate();
    

  }, [cameraParameters, children, sceneRef, coneRef]);

  return null;
};