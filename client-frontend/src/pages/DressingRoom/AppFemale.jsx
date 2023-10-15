import {Canvas} from "@react-three/fiber"
import ExperienceFemale from '../../components/DressRoom/ExperienceFemale'
import Sound from "../../components/DressRoom/Sounds"
import ConfiguratorFemale from "../../components/DressRoom/ConfiguratorFemale"
import { CustomizationFremaleProvider } from "../../context/CustomizationFemale"
import ClothConfiguratorFemale from "../../components/DressRoom/ClothConfiguratorFemale"
import './AppMale.css'

function AppFemale(){
    return(
        <CustomizationFremaleProvider>
        <div className="App">
            <Canvas>
                <color attach="background" args={["#21354"]}/>
                <ExperienceFemale/>
            </Canvas>
            <Sound/>
            <h1 className="title1">Dressing Room</h1>
            <ConfiguratorFemale/>
            <ClothConfiguratorFemale/>
        </div>
        </CustomizationFremaleProvider>
    )
}
export default AppFemale;