import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/profesional_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const ProfessionalButton = ({position}) =>{
    const title = 'Profesional'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} icon={IconMobile}/>
        </div>
    )
}

export default ProfessionalButton