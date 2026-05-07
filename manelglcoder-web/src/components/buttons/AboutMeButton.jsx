import DesktopButton from "./DesktopButton"
import Icon from '../../assets/Icons/file_icon.svg'
import HoverIcon from '../../assets/Icons/hover_file_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../utilities/classname_utilities"

const AboutMeButton = () => {
    return(
        <div className={`row-start-3 col-start-1 ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={'SobreMi'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default AboutMeButton