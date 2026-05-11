import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/project_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"

const LatestProjectsButton = ({position}) =>{
    const title = 'Proyectos'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} icon={IconMobile}/>
        </div>
    )
}

export default LatestProjectsButton