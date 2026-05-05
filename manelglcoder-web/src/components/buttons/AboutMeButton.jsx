import DesktopButton from "./DesktopButton"
import Icon from '../../assets/Icons/file_icon.svg'
import HoverIcon from '../../assets/Icons/hover_file_icon.svg'

const AboutMeButton = () => {
    return(
        <div className="row-start-3 col-start-1 flex justify-center items-center">
            <DesktopButton name={'SobreMi'} icon={Icon} hoverIcon={HoverIcon}/>
        </div>
    )
}

export default AboutMeButton