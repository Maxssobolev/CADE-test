import React, { createContext } from 'react';
import * as THREE from 'three';

interface SceneContextProps {
  sceneRef: React.MutableRefObject<THREE.Scene | null>;
}

export const SceneContext = createContext<SceneContextProps | undefined>(undefined);
