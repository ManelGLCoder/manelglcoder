import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/mail_icon.svg'
import HoverIcon from '../../../assets/Icons/hover_mail_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const ContactButton = () =>{
    return(
        <div className={`row-start-4 col-start-1 ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={'Contactar'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default ContactButton