import { TriangulationResponse } from "shared/types/triangulation.interface";
import * as THREE from "three";

export const createCone = (coneData: TriangulationResponse) => {
  
  const geometry = new THREE.BufferGeometry();
  
  
  const vertices = new Float32Array(coneData.vertices);

  const normals = new Float32Array(coneData.normals);

  const faces = new Uint32Array(coneData.triangles);


  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geometry.setIndex(new THREE.BufferAttribute(faces, 1));

  const material = new THREE.MeshToonMaterial({ color: 0xffff });
  material.side = THREE.DoubleSide;
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  

  return mesh
}