import MobileButton from "./MobileButton"
import IconMobile from '../../../assets/Icons/project_icon.svg'
import { DESKTOP_BUTTON_CLASS } from "../../../utilities/classname_utilities"
import { LAST_PROJECTS_KEY } from "../../../dto/window_keys_dto"

const LatestProjectsButton = ({position}) =>{
    const title = 'Proyectos'
    return(
        <div className={`${position} ${DESKTOP_BUTTON_CLASS}`}>
            <MobileButton name={title} keyClick={LAST_PROJECTS_KEY} icon={IconMobile}/>
        </div>
    )
}

export default LatestProjectsButton