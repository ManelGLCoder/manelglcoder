import DesktopButton from "./DesktopButton"
import IconDesk from '../../assets/Icons/folder_icon.svg'
import HoverIconDesk from '../../assets/Icons/hover_folder_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../utilities/classname_utilities"
import { WindowContext } from "../../contexts/WindowsContext"
import { PROFESSIONAL_KEY } from "../../dto/window_keys_dto"

const ProfessionalButton = ({position}) =>{
    const title = 'Profesional'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={title} keyClick={PROFESSIONAL_KEY} icon={IconDesk} hoverIcon={HoverIconDesk}/>
        </div>
    )
}

export default ProfessionalButton