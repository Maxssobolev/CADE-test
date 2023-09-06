import { IConeParams } from "shared/types/cone3d.interface";
import * as THREE from "three";

export const createCone = ({radius, height, segments}: IConeParams) => {
  const coneGeometry = new THREE.ConeGeometry(radius, height, segments);
  const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  return new THREE.Mesh(coneGeometry, coneMaterial);
}