import { ISceneParams } from "shared/types/scene3d.interface";
import * as THREE from "three";

export const createScene = ({color}: ISceneParams) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(color);
  return scene
}