import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/lock_icon.svg'
import HoverIcon from '../../../assets/Icons/hover_lock_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const OldestProjectButton = () =>{
    return(
        <div className={`row-start-8 col-start-1 ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={'Proyectos Antiguos'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default OldestProjectButton