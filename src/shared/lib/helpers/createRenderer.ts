import { IRendererParams } from "shared/types/renderer.interface";
import * as THREE from "three";

export const createRenderer = ({width = window.innerWidth / 2, height = window.innerHeight }: IRendererParams) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true} );
  renderer.setSize(width, height);
  return renderer;
}