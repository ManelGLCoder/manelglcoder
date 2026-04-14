import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/Papelera.svg'
import HoverIcon from '../../../assets/Icons/Papelera_mouse_over.svg'

const OldestProjectButton = () =>{
    return(
        <div className="row-start-8 col-start-1 flex justify-center items-center">
            <DesktopButton name={'Proyectos Antiguos'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default OldestProjectButton