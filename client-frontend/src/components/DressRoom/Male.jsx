import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomization } from "../../context/Customization";

const Male = (props) => {
  const { skinColor, hairColor, material, legs,materialB } = useCustomization();
  const { nodes, materials } = useGLTF("../../../public/models/Male/model.gltf");

  const clothBTextureProps = useTexture({
    map: "../../../public/textures/cloth/01/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "../../../public/textures/cloth/01/Fabric_Knitted_006_Normal.jpg",
    roughnessMap: "../../../public/textures/cloth/01/Fabric_Knitted_006_Roughness.jpg",
    aoMap: "../../../public/textures/cloth/01/Fabric_Knitted_006_AmbientOcclusion.jpg",
  });

  const clothRTextureProps = useTexture({
    map: "../../../public/textures/cloth/02/Fabric_Lace_019_basecolor.jpg",
    normalMap: "../../../public/textures/cloth/02/Fabric_Lace_019_normal.jpg",
    roughnessMap: "../../../public/textures/cloth/02/Fabric_Lace_019_roughness.jpg",
    aoMap: "../../../public/textures/cloth/02/Fabric_Lace_019_ambientOcclusion.jpg",
  });

  const sharAmaterial = new THREE.MeshStandardMaterial({
    ...(material === "Frabric 01" ? clothBTextureProps : clothRTextureProps),
  });

  const sharBAmaterial = new THREE.MeshStandardMaterial({
    ...(materialB === "Frabric 01" ? clothBTextureProps : clothRTextureProps),
  });

  const bodymaterial = new THREE.MeshStandardMaterial({
    color: skinColor,
  });
  const hairmaterial = new THREE.MeshStandardMaterial({
    color: hairColor,
  });
  const shortmaterial = new THREE.MeshStandardMaterial({
    color: "#000000",
  });

  return (
    <group {...props} dispose={null}>
      <skinnedMesh
        geometry={nodes.body.geometry}
        material={bodymaterial}
        skeleton={nodes.body.skeleton}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hairStyle_boy000_geo.geometry}
          material={hairmaterial}
        />
      </skinnedMesh>
      <primitive object={nodes.Bone} />
      <primitive object={nodes.pcl} />
      <primitive object={nodes.pcr} />
      <skinnedMesh
        geometry={nodes.shirtsA.geometry}
        material={sharAmaterial}
        skeleton={nodes.shirtsA.skeleton}
        visible={legs===1}
      />
      <primitive object={nodes.Bone_1} />
      <skinnedMesh
        geometry={nodes.shirtsB.geometry}
        material={sharBAmaterial}
        skeleton={nodes.shirtsB.skeleton}
        visible={legs===2}
      />
      <primitive object={nodes.Bone_2} />
      <skinnedMesh
        geometry={nodes.ShortA.geometry}
        material={shortmaterial}
        skeleton={nodes.ShortA.skeleton}
      />
      <primitive object={nodes.pcl_1} />
      <primitive object={nodes.pcr_1} />
      <primitive object={nodes.neutral_bone} />
    </group>
  );
};

useGLTF.preload("../../../public/models/Male/model.gltf");
export default Male;
