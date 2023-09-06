import {  FC, createRef, useEffect, useRef } from 'react';
import { SceneContext } from 'shared/context/SceneContext';
import * as THREE from 'three';


export const SceneProvider: FC<{children: React.ReactNode}> = ({ children }) => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xff0000);
    sceneRef.current = scene;
    
  }, [sceneRef])

  return (
    <SceneContext.Provider value={{ sceneRef }}>
      
      {children}
      
    </SceneContext.Provider>
  );
};