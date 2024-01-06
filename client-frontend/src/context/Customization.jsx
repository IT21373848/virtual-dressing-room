import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const SkinClors = [
  {
    color: "#D5B3A0",
  },
  {
    color: "#C69B7E",
  },
  {
    color: "#B8846C",
  },
  {
    color: "#6D4234",
  },
  {
    color: "#8A5343",
  },
];

export const hairClors = [
  {
    color: "#000000",
  },
  {
    color: "#150b01",
  },
  {
    color: "#1f1101",
  },
  {
    color: "#2a1602",
  },
  {
    color: "#2f1902",
  },
];

export const backgroundImg =[
  {
    name: "apartment",
  },
  {
    name: "city",
  },
  {
    name: "dawn",
  },
  {
    name: "forest",
  },
  {
    name: "lobby",
  },
  {
    name: "night",
  },
  {
    name: "park",
  },
  {
    name: "studio",
  },
  {
    name: "sunset",
  },
  {
    name: "warehouse",
  },
];

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("cloth");
  const [materialB, setMaterialB] = useState("cloth");
  const [legs, setLeges] = useState(1);
  const [skinColor, setskinColor] = useState(SkinClors[0].color);
  const [hairColor, sethairColor] = useState(hairClors[0].color);
  const [back, setBack] = useState(backgroundImg[0].name);
  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        legs,
        setLeges,
        skinColor,
        setskinColor,
        back,
        setBack,
        hairColor,
        sethairColor,
        materialB, 
        setMaterialB
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
