import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/contact_app_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"
import { CONCTACT_ME_KEY } from "../../../dto/window_keys_dto"

const ContactButton = ({position}) =>{
    const title = 'Contacta Conmigo'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} keyClick={CONCTACT_ME_KEY} icon={IconMobile}/>
        </div>
    )
}

export default ContactButton