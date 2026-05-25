import LinkIcon from '../../assets/Icons/link_icon.svg'
import IconSized from '../generic/IconSized'
import TextCenteredWithIcon from '../generic/TextCenteredWidthIcon'
import { BUTTON_STYLE } from '../../utilities/classname_utilities'

const Links = ({links}) =>{
    return(
        <>
            {
                links.map((link, i)=>{
                    return(
                    <button key={i} className={BUTTON_STYLE}
                    onClick={()=> window.open(link.url, "_blank")}>
                        <IconSized src={LinkIcon} alt={'Link Icon'}/>
                        <TextCenteredWithIcon text={link.text}/>
                    </button>
                )
                })
            }
        </>
    )
}

export default Links