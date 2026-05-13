import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/contact_app_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const ContactButton = ({position}) =>{
    const title = 'Contacta Conmigo'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} icon={IconMobile}/>
        </div>
    )
}

export default ContactButton