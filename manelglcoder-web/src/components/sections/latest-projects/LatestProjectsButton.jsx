import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/folder_icon.svg'
import HoverIcon from '../../../assets/Icons/hover_folder_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const LatestProjectsButton = () => {
    return(
        <div className={`row-start-2 col-start-1 ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={'Proyectos'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default LatestProjectsButton