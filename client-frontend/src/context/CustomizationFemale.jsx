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

export const backgroundImg = [
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

export const CustomizationFremaleProvider = (props) => {
  const [skinColor, setskinColor] = useState(SkinClors[0].color);
  const [hairColor, sethairColor] = useState(hairClors[0].color);
  const[hairType,sethairType] = useState(1);
  const[Up,setUp] = useState(2);
  const[Down,setDown] = useState(0);
  const[Shartcolor,setShartcolor] = useState("#0000ff");
  const[NightDresscolor,setNightDress] = useState("#000000");
  const[Shortcolor,setShortcolor] = useState("#00ff00");
  const[YukatacolorA,setYukatacolorA] = useState("#ff0000");
  const[YukatacolorB,setYukatacolorB] = useState("#00ff00");
  const[YukatacolorC,setYukatacolorC] = useState("#0000ff");
  const [back, setBack] = useState(backgroundImg[0].name);
  return (
    <CustomizationContext.Provider
      value={{
        skinColor,
        setskinColor,
        back,
        setBack,
        hairColor,
        sethairColor,
        hairType,
        sethairType,
        Up,
        setUp,
        Down,
        setDown,
        Shartcolor,
        setShartcolor,
        NightDresscolor,
        setNightDress,
        Shortcolor,
        setShortcolor,
        YukatacolorA,
        setYukatacolorA,
        YukatacolorB,
        setYukatacolorB,
        YukatacolorC,
        setYukatacolorC,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomizationFemale = () => {
  const context = useContext(CustomizationContext);
  return context;
};
