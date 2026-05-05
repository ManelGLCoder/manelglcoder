import ToolsIcon from '../../../assets/Icons/tools_icon.svg'
import { TEXT_SUB_TITLE, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from '../../../utilities/classname_utilities'

const ProjectTools = ({tools}) =>{
    return(
        <div className="flex flex-col gap-1 my-2">
            <div className='flex gap-2 items-center'>
                <img className={ICON_SIZE} src={ToolsIcon} alt="Tools Icon" />
                <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>Tools</span>
            </div>
            <div className='flex flex-wrap justify-between gap-1 m-2'>
                {
                    tools.map((tool, i)=>{
                        return(<img key={i} className='size-10' src={tool.src} alt={tool.alt}/>)
                    })
                }
            </div>
        </div>
    )
}

export default ProjectTools