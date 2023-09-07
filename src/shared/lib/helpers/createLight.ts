import * as THREE from "three";

export const createLight = () => {
  const spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 
    10 , 
    8 , 
    4  
  );

  spotLight.castShadow = true;
  spotLight.intensity = 50;
  spotLight.angle = Math.PI / 2;
  return spotLight
}