import { ICameraParams } from "shared/types/camera.interface";
import * as THREE from "three";

export const createCamera = ({zPosition = 5, fow = 75, aspect = window.innerWidth/ 2 / window.innerHeight, near = 0.1, far = 1000}: ICameraParams) => {
  const camera = new THREE.PerspectiveCamera(fow, aspect, near, far);
  camera.position.z = zPosition;
  return camera
}