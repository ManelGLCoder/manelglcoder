import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/user_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"
import { ABOUT_ME_KEY } from "../../../dto/window_keys_dto"

const AboutMeButton = ({position}) =>{
    const title = 'Sobre Mi'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} keyClick={ABOUT_ME_KEY} icon={IconMobile}/>
        </div>
    )
}

export default AboutMeButton