import DesktopButton from "./DesktopButton"
import IconDesk from '../../assets/Icons/file_icon.svg'
import HoverIconDesk from '../../assets/Icons/hover_file_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../utilities/classname_utilities"
import { ABOUT_ME_KEY } from "../../dto/window_keys_dto"

const AboutMeButton = ({position}) =>{
    const title = 'Sobre Mi'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={title} keyClick={ABOUT_ME_KEY} icon={IconDesk} hoverIcon={HoverIconDesk}/>
        </div>
    )
}

export default AboutMeButton