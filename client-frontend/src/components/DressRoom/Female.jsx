import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomizationFemale } from "../../context/CustomizationFemale";

const Female = (props) => {
    const { skinColor, hairColor,hairType,Up,Down,Shartcolor,NightDresscolor,Shortcolor,YukatacolorA,YukatacolorB,YukatacolorC } = useCustomizationFemale();
    const { nodes, materials } = useGLTF("../../../public/models/Female/modelA.gltf");
    
    const bodymaterial = new THREE.MeshStandardMaterial({
        color: skinColor,
        roughness : 1,
      });
    const hairmaterial = new THREE.MeshStandardMaterial({
        color: hairColor,
        roughness : 1,
      });

      const Shartmaterial = new THREE.MeshStandardMaterial({
        color: Shartcolor,
        roughness : 1,
      });
      const NightDressmaterial = new THREE.MeshStandardMaterial({
        color: NightDresscolor,
        roughness : 1,
      });
      const Shortmaterial = new THREE.MeshStandardMaterial({
        color: Shortcolor,
        roughness : 1,
      });
      const YukatamaterialA = new THREE.MeshStandardMaterial({
        color: YukatacolorA,
        roughness : 1,
      });
      const YukatamaterialB = new THREE.MeshStandardMaterial({
        color: YukatacolorB,
        roughness : 1,
      });
      const YukatamaterialC = new THREE.MeshStandardMaterial({
        color: YukatacolorC,
        roughness : 1,
      });

    return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.night_dress.geometry}
        material={NightDressmaterial}
        visible = {Up === 3 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.femaleshart.geometry}
        material={Shartmaterial}
        visible = {Up === 4 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.short.geometry}
        material={Shortmaterial}
        visible = {Down === 2 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand01.geometry}
        material={hairmaterial}
        position={[-1.281, 76.248, 1.747]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand02.geometry}
        material={hairmaterial}
        position={[-1.298, 76.819, 0.321]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand03.geometry}
        material={hairmaterial}
        position={[-1.086, 77.559, 2.908]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand04.geometry}
        material={hairmaterial}
        position={[2.88, 74.193, 0.923]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand05.geometry}
        material={hairmaterial}
        position={[-1.521, 77.118, -1.608]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand06.geometry}
        material={hairmaterial}
        position={[3.127, 74.95, -0.613]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand07.geometry}
        material={hairmaterial}
        position={[2.931, 75.391, -2.388]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand08.geometry}
        material={hairmaterial}
        position={[1.8, 75.401, -3.634]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand09.geometry}
        material={hairmaterial}
        position={[-0.199, 75.972, -3.959]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand10.geometry}
        material={hairmaterial}
        position={[-2.204, 75.667, -3.621]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KW_HairBand11.geometry}
        material={hairmaterial}
        position={[-3.107, 74.984, -2.8]}
        visible ={hairType===1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand01.geometry}
        material={hairmaterial}
        position={[-1.928, 76.607, 1.567]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand02.geometry}
        material={hairmaterial}
        position={[-1.865, 77.191, -0.715]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand03.geometry}
        material={hairmaterial}
        position={[3.252, 76.034, -0.777]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand04.geometry}
        material={hairmaterial}
        position={[2.649, 76.2, -2.773]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand05.geometry}
        material={hairmaterial}
        position={[-3.215, 71.904, 2.204]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand06.geometry}
        material={hairmaterial}
        position={[-1.415, 77.099, -2.827]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand07.geometry}
        material={hairmaterial}
        position={[-0.173, 76.119, -4.233]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand08.geometry}
        material={hairmaterial}
        position={[1.201, 75.678, -3.968]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2_HairBand09.geometry}
        material={hairmaterial}
        position={[3.141, 75.724, 1.372]}
        visible ={hairType===2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand000.geometry}
        material={hairmaterial}
        position={[1.98, 77.969, 2.691]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand001.geometry}
        material={hairmaterial}
        position={[-3.29, 74.293, 1.444]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand002.geometry}
        material={hairmaterial}
        position={[-2.189, 76.649, 1.978]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand003.geometry}
        material={hairmaterial}
        position={[-3.309, 75.21, -0.981]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand004.geometry}
        material={hairmaterial}
        position={[2.064, 77.561, 1.551]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand005.geometry}
        material={hairmaterial}
        position={[2.53, 75.18, 1.551]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand006.geometry}
        material={hairmaterial}
        position={[2.792, 76.056, -0.046]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand007.geometry}
        material={hairmaterial}
        position={[3.042, 75.905, -1.468]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand008.geometry}
        material={hairmaterial}
        position={[2.737, 74.644, -3.006]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand009.geometry}
        material={hairmaterial}
        position={[0.588, 74.321, -4.248]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand010.geometry}
        material={hairmaterial}
        position={[-1.611, 74.987, -3.848]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand011.geometry}
        material={hairmaterial}
        position={[-3.189, 74.565, -2.761]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand012.geometry}
        material={hairmaterial}
        position={[-1.576, 77.658, 2.606]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand013.geometry}
        material={hairmaterial}
        position={[3.795, 70.918, 1.606]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand014.geometry}
        material={hairmaterial}
        position={[4, 72.904, -1.071]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand015.geometry}
        material={hairmaterial}
        position={[4.183, 72.516, -2.654]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand016.geometry}
        material={hairmaterial}
        position={[1.996, 74.23, -3.981]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand017.geometry}
        material={hairmaterial}
        position={[-0.583, 73.412, -4.438]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand018.geometry}
        material={hairmaterial}
        position={[-2.201, 74.872, -3.253]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand019.geometry}
        material={hairmaterial}
        position={[-3.779, 72.835, -2.067]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand020.geometry}
        material={hairmaterial}
        position={[-2.839, 76.215, 0.235]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head1_HairStrand021.geometry}
        material={hairmaterial}
        position={[1.851, 72.761, 0.1]}
        visible ={hairType===3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Gabriela_Ekaireb_Hair.geometry}
        material={hairmaterial}
        position={[-0.084, 76.972, -2.472]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairBand01.geometry}
        material={hairmaterial}
        position={[-0.084, 81.155, -4.435]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairBand02.geometry}
        material={hairmaterial}
        position={[-0.466, 75.364, -5.99]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairBand03.geometry}
        material={hairmaterial}
        position={[-1.659, 71.518, -4.928]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairBand04.geometry}
        material={hairmaterial}
        position={[-4.167, 65.967, -0.446]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairBand05.geometry}
        material={hairmaterial}
        position={[-2.398, 70.003, -1.814]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairBand06.geometry}
        material={hairmaterial}
        position={[-4.949, 66.185, -2.016]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_HairRubber.geometry}
        material={materials.Rubber}
        position={[-0.084, 80.859, -4.202]}
        visible ={hairType===4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kebaya_inner.geometry}
        material={materials["3pant"]}
        visible = {Down === 1 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kebaya_inner_1.geometry}
        material={materials["5beltsurface"]}
        visible = {Down === 1 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kebaya_inner_2.geometry}
        material={materials["1upper"]}
        visible = {Down === 1 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kebaya_inner_3.geometry}
        material={materials["4beltedge"]}
        visible = {Down === 1 }
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kebaya_inner_4.geometry}
        material={materials["2lower"]}
        visible = {Down === 1 }
      />
      <primitive object={nodes.Bone} />
      <skinnedMesh
        geometry={nodes.kebaya_outer_1.geometry}
        material={materials["1cloth"]}
        skeleton={nodes.kebaya_outer_1.skeleton}
        visible = {Up === 1 }
      />
      <skinnedMesh
        geometry={nodes.kebaya_outer_2.geometry}
        material={materials["3lace"]}
        skeleton={nodes.kebaya_outer_2.skeleton}
        visible = {Up === 1 }
      />
      <skinnedMesh
        geometry={nodes.kebaya_outer_3.geometry}
        material={materials["2mid"]}
        skeleton={nodes.kebaya_outer_3.skeleton}
        visible = {Up === 1 }
      />
      <primitive object={nodes.Bone_1} />
      <primitive object={nodes.Bone006} />
      <primitive object={nodes.neutral_bone} />
      <skinnedMesh
        geometry={nodes["Thin-Unweld"].geometry}
        material={YukatamaterialA}
        skeleton={nodes["Thin-Unweld"].skeleton}
        visible = {Up === 2 }
      />
      <skinnedMesh
        geometry={nodes["Thin-Unweld_1"].geometry}
        material={YukatamaterialB}
        skeleton={nodes["Thin-Unweld_1"].skeleton}
        visible = {Up === 2 }
      />
      <skinnedMesh
        geometry={nodes["Thin-Unweld_2"].geometry}
        material={YukatamaterialC}
        skeleton={nodes["Thin-Unweld_2"].skeleton}
        visible = {Up === 2 }
      />
      <skinnedMesh
        geometry={nodes.body.geometry}
        material={bodymaterial}
        skeleton={nodes.body.skeleton}
      >
        <group position={[-0.104, 76.184, 3.219]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyebrow_1.geometry}
            material={hairmaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyebrow_2.geometry}
            material={hairmaterial}
          />
        </group>
        <group position={[-0.074, 75.43, 3.173]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyelash_1.geometry}
            material={hairmaterial}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.eyelash_2.geometry}
            material={hairmaterial}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyes.geometry}
          material={hairmaterial}
          position={[-0.065, 75.379, 2.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.shoes.geometry}
          material={materials.lambert2}
          position={[-0.065, 2.338, -0.496]}
        />
      </skinnedMesh>
      <primitive object={nodes.Bone_2} />
      <primitive object={nodes.pcl} />
      <primitive object={nodes.pcr} />
    </group>
  );
}

useGLTF.preload("../../../public/models/Female/modelA.gltf");
export default Female;
