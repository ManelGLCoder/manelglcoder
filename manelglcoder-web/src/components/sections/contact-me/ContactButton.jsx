import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/mail_icon.svg'
import HoverIcon from '../../../assets/Icons/hover_mail_icon.svg'

const ContactButton = () =>{
    return(
        <div className="row-start-4 col-start-1 flex justify-center items-center">
            <DesktopButton name={'Contactar'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default ContactButton