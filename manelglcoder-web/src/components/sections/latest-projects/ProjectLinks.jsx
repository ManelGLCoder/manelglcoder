import LinkIcon from '../../../assets/Icons/link_icon.svg'
import { BUTTON_STYLE } from '../../../utilities/classname_utilities'

const ProjectLinks = ({links}) =>{
    return(
        <>
            {
                links.map((link, i)=>{
                    return(
                    <button key={i} className={BUTTON_STYLE}
                    onClick={()=> window.open(link.url, "_blank")}>
                        <img className='size-7' src={LinkIcon} alt="Link Icon" />
                        <span className='text-center'>{link.text}</span>
                    </button>
                )
                })
            }
        </>
    )
}

export default ProjectLinks