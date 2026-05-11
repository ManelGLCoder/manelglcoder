import MobileButton from "./MobileButton"
import Icon from '../../../assets/Icons/lock_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const OldestProjectButton = ({position}) =>{
    const title = 'Proyectos Antiguos'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} icon={Icon}/>
        </div>
    )
}

export default OldestProjectButton