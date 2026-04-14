import DesktopButton from "../../buttons/DesktopButton"
import Icon from '../../../assets/Icons/Documento.svg'
import HoverIcon from '../../../assets/Icons/Documento_move_over.svg'

const AboutMeButton = () => {
    return(
        <div className="row-start-3 col-start-1 flex justify-center items-center">
            <DesktopButton name={'SobreMi'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default AboutMeButton