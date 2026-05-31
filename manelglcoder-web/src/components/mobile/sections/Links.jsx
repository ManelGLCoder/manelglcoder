import { memo } from 'react'
import LinkIcon from '../../../assets/Icons/link_icon.svg'
import { IconSized, TextCenteredWithIcon } from '../../generic'
import { BUTTON_STYLE } from '../../../utilities'

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

export default memo(Links)