import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import useMediaQuery from '../hooks/useMediaQuery'; // Import the custom hook

interface ModelProps {
  [key: string]: any;
}

const Model: React.FC<ModelProps> = (props) => {
  const gltf = useGLTF("/eth.gltf") as unknown as GLTF & { [key: string]: any };
  const { theme } = useTheme();
  const groupRef = useRef<THREE.Group>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  let time = 0;

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (Math.PI / 20) * delta;
      time += delta;
      const verticalOffset = Math.sin(time) * 0.1;
      groupRef.current.position.y = verticalOffset;

      if (isSmallScreen) {
        groupRef.current.scale.set(0.7, 0.7, 0.7);
      } else if (isMediumScreen) {
        groupRef.current.scale.set(0.85, 0.85, 0.85);
      } else {
        groupRef.current.scale.set(1, 1, 1);
      }
    }
  });

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  // Function to traverse and find specific nodes by name
  const findNodeByName = (name: string): THREE.Mesh | undefined => {
    const scene = gltf.scene;
    let foundNode: THREE.Mesh | undefined;

    scene.traverse((node: THREE.Object3D) => {
      if (node instanceof THREE.Mesh && node.name === name) {
        foundNode = node;
      }
    });

    return foundNode;
  };

  const plane = findNodeByName("Plane") as THREE.Mesh;
  const plane001 = findNodeByName("Plane001") as THREE.Mesh;

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {plane && (
        <mesh
          castShadow
          receiveShadow
          geometry={plane.geometry as THREE.BufferGeometry}
          material={
            new THREE.MeshBasicMaterial({
              wireframe: true,
              color: isDarkMode ? "white" : "black",
            })
          }
          position={plane.position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
      )}

      {plane001 && (
        <mesh
          castShadow
          receiveShadow
          geometry={plane001.geometry as THREE.BufferGeometry}
          material={
            new THREE.MeshBasicMaterial({
              wireframe: true,
              color: isDarkMode ? "white" : "black",
            })
          }
          position={plane001.position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        />
      )}
    </group>
  );
};

useGLTF.preload("/eth.gltf");

export default Model;
