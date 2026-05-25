import MobileButton from "./MobileButton"
import Icon from '../../../assets/Icons/lock_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"
import { OLD_PROJECTS_KEY } from "../../../dto/window_keys_dto"

const OldestProjectButton = ({position}) =>{
    const title = 'Proyectos Antiguos'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} keyClick={OLD_PROJECTS_KEY} icon={Icon}/>
        </div>
    )
}

export default OldestProjectButton