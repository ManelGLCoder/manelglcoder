import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/Ordenador.svg'
import HoverIcon from '../../../assets/Icons/Ordenador_mouse_over.svg'

const ContactButton = () =>{
    return(
        <div className="row-start-4 col-start-1 flex justify-center items-center">
            <DesktopButton name={'Contactar'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default ContactButton