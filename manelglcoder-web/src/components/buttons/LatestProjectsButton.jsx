import DesktopButton from "./DesktopButton"
import IconDesk from '../../assets/Icons/folder_icon.svg'
import HoverIconDesk from '../../assets/Icons/hover_folder_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../utilities/classname_utilities"

const LatestProjectsButton = ({position}) =>{
    const title = 'Proyectos'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={title} icon={IconDesk} hoverIcon={HoverIconDesk}/>
        </div>
    )
}

export default LatestProjectsButton