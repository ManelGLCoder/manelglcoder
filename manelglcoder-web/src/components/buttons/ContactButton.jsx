import DesktopButton from "./DesktopButton"
import IconDesk from '../../assets/Icons/mail_icon.svg'
import HoverIconDesk from '../../assets/Icons/hover_mail_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../utilities/classname_utilities"
import { CONCTACT_ME_KEY } from "../../dto/window_keys_dto"

const ContactButton = ({position}) =>{
    const title = 'Contacta Conmigo'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <DesktopButton name={title} keyClick={CONCTACT_ME_KEY} icon={IconDesk} hoverIcon={HoverIconDesk}/>
        </div>
    )
}

export default ContactButton