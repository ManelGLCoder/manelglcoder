import DesktopButton from "./DesktopButton"
import IconDesk from '../../assets/Icons/lock_icon.svg'
import HoverIconDesk from '../../assets/Icons/hover_lock_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../utilities/classname_utilities"
import { OLD_PROJECTS_KEY } from "../../dto/window_keys_dto"

const OldestProjectButton = ({position}) =>{
    const title = 'Proyectos Antiguos'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={title} keyClick={OLD_PROJECTS_KEY} icon={IconDesk} hoverIcon={HoverIconDesk}/>
        </div>
    )
}

export default OldestProjectButton