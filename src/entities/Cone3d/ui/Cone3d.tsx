import  { FC, MutableRefObject, useEffect, useRef } from 'react';
import { useScene } from 'shared/hooks/useScene';
import * as THREE from 'three';

interface ConeProps {
  coneParameters: {
    radius: number;
    height: number;
    segments: number;
    color: number;
  };
  coneRef: MutableRefObject<THREE.Mesh | null>; // Добавьте пропс для передачи ссылки на конус

}

export const Cone3d: FC<ConeProps> = ({ coneParameters, coneRef }) => {

  useEffect(() => {
    const coneGeometry = new THREE.ConeGeometry(coneParameters.radius, coneParameters.height, coneParameters.segments);
    const coneMaterial = new THREE.MeshBasicMaterial({ color:  coneParameters.color });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    
    coneRef.current = cone
    
  }, [coneParameters]);

  return null;
};