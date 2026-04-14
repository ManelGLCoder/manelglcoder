import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/Carpeta.svg'
import HoverIcon from '../../../assets/Icons/Carpeta_mouse_over.svg'

const ProfessionalButton = () =>{
    return(
        <div className="row-start-1 col-start-1 flex justify-center items-center">
            <DesktopButton name={'Profesional'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default ProfessionalButton