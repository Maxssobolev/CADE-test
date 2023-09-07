import { ICameraParams } from "shared/types/camera.interface";
import * as THREE from "three";

export const createCamera = ({ zPosition = 4, fow = 65, aspect = window.innerWidth /2 / window.innerHeight, near = 0.1, far = 1000}: ICameraParams) => {
  const camera = new THREE.PerspectiveCamera(fow, aspect, near, far);
  camera.position.set(10 / 2,3 + 5 / 2, zPosition / 2); 


  return camera
}