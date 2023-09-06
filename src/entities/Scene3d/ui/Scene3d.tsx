import React, { FC, useEffect, useRef } from 'react';
import { useScene } from 'shared/hooks/useScene';
import * as THREE from 'three';

interface SceneWithCameraProps {
  children: React.ReactNode;
  cameraParameters: {
    fov: number;
    near: number;
    far: number;
  };
}

export const Scene3d: FC<SceneWithCameraProps> = ({ children, cameraParameters }) => {
  
  const { sceneRef } = useScene(); // Получите ссылку на сцену из контекста

  useEffect(() => {

    //                                         поле зрения, deg      соотношение сторон                      отображать не ближе чем, не дальше чем
    const camera = new THREE.PerspectiveCamera(cameraParameters.fov, window.innerWidth / window.innerHeight, cameraParameters.near, cameraParameters.far);
    camera.position.z = 5;    

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(sceneRef.current, camera);
    };
    animate();
    

  }, [cameraParameters, children, sceneRef]);

  return null;
};