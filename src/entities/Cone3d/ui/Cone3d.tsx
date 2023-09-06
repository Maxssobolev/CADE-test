

import { FC, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ConeProps {
  coneParameters: {
    radius: number;
    height: number;
    segments: number;
  };
}

export const Cone3d: FC<ConeProps> = ({ coneParameters }) => {
  const coneRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const coneGeometry = new THREE.ConeGeometry(coneParameters.radius, coneParameters.height, coneParameters.segments);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    coneRef.current = cone;
  }, [coneParameters]);

  return null; // Компонент не отображает ничего, просто создает и хранит конус
};
