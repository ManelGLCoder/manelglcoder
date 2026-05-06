import LinkIcon from '../../assets/Icons/link_icon.svg'
import { BUTTON_STYLE, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from '../../utilities/classname_utilities'

const Links = ({links}) =>{
    return(
        <>
            {
                links.map((link, i)=>{
                    return(
                    <button key={i} className={BUTTON_STYLE}
                    onClick={()=> window.open(link.url, "_blank")}>
                        <img className={ICON_SIZE} src={LinkIcon} alt="Link Icon" />
                        <span className={TEXT_CENTERED_WITH_ICON}>{link.text}</span>
                    </button>
                )
                })
            }
        </>
    )
}

export default Links