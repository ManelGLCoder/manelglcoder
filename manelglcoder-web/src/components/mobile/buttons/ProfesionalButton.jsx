import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/profesional_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"
import { PROFESSIONAL_KEY } from "../../../dto/window_keys_dto"

const ProfessionalButton = ({position}) =>{
    const title = 'Profesional'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} keyClick={PROFESSIONAL_KEY} icon={IconMobile}/>
        </div>
    )
}

export default ProfessionalButton