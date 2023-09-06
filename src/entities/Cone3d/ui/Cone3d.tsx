import  { FC, useEffect, useRef } from 'react';
import { useScene } from 'shared/hooks/useScene';
import * as THREE from 'three';

interface ConeProps {
  coneParameters: {
    radius: number;
    height: number;
    segments: number;
    color: number;
  };
}

export const Cone3d: FC<ConeProps> = ({ coneParameters }) => {
  const { sceneRef } = useScene();

  useEffect(() => {
    const coneGeometry = new THREE.ConeGeometry(coneParameters.radius, coneParameters.height, coneParameters.segments);
    const coneMaterial = new THREE.MeshBasicMaterial({ color:  coneParameters.color });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);

    if (sceneRef.current) {
      sceneRef.current.add(cone);
    }
  }, [coneParameters, sceneRef]);

  return null;
};