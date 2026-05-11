import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/user_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const AboutMeButton = ({position}) =>{
    const title = 'Sobre Mi'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} icon={IconMobile}/>
        </div>
    )
}

export default AboutMeButton