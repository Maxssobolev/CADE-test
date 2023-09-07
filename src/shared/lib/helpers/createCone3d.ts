import { TriangulationResponse } from "shared/types/triangulation.interface";
import * as THREE from "three";

export const createCone = (coneData: TriangulationResponse) => {
  
  const geometry = new THREE.BufferGeometry();
  // Create buffers for vertices and faces
  const verticesArray = [];
  const facesArray = [];

  // Fill in vertices array based on coneData
  for (let i = 0; i < coneData.vertices.length; i++) {
    const vertexData = coneData.vertices[i];
    verticesArray.push(vertexData.x, vertexData.y, vertexData.z);
  }

  // Fill in faces array based on coneData
  for (let i = 0; i < coneData.triangles.length; i++) {
    const triangleData = coneData.triangles[i];
    facesArray.push(triangleData[0], triangleData[1], triangleData[2]);
  }

  const vertices = new Float32Array(verticesArray);
  const faces = new Uint32Array(facesArray)

  // Add attributes to the geometry
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(new THREE.BufferAttribute(faces, 1));

  // Create material and mesh as before
  const material = new THREE.MeshToonMaterial({ color: 0xffff });
  material.side = THREE.DoubleSide;
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  

  return mesh
}