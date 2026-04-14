import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/Carpeta.svg'
import HoverIcon from '../../../assets/Icons/Carpeta_mouse_over.svg'

const LatestProjectsButton = () => {
    return(
        <div className="row-start-2 col-start-1 flex justify-center items-center">
            <DesktopButton name={'Proyectos'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default LatestProjectsButton