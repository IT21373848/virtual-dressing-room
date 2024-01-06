import {Canvas} from "@react-three/fiber"
import Experience from '../../components/DressRoom/Experience'
import './AppMale.css'
import Configurator from "../../components/DressRoom/Configurator"
import Sound from "../../components/DressRoom/Sounds"
import { CustomizationProvider } from "../../context/Customization"
import ClothConfigurator from "../../components/DressRoom/ClothConfigurator"

function AppMale() {
  

  return (
    <CustomizationProvider>
    <div className='App'>
      <Canvas>
        <color attach="background" args={["#21354"]}/>
        {/* <fog attach="fog" args={['#21354',10,20]}/> */}
        <Experience/>  
      </Canvas>
      <Sound/>
      <h1 className="title1">Dressing Room</h1>
      <Configurator/> 
      <ClothConfigurator/>
    </div>
    </CustomizationProvider>
  )
}

export default AppMale;
