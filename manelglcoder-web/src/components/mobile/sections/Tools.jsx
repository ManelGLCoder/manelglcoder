import ToolsIcon from '../../../assets/Icons/tools_icon.svg'
import { TEXT_SUB_TITLE } from '../../../utilities/classname_utilities'
import IconWithTextCentered from '../../generic/IconWithTextCentered'

const Tools = ({tools}) =>{
    const toolsIcon ={src:ToolsIcon, alt:'Tools Icon'}
    const toolsText ={text:'Herramientas', classTextData:TEXT_SUB_TITLE}
    return(
        <div className="flex flex-col gap-1 m-2">
            <IconWithTextCentered iconData={toolsIcon} textData={toolsText}/>
            <div className='flex flex-wrap justify-between gap-5 m-2'>
                {
                    tools.map((tool, i)=>{
                        return(<img key={i} className='size-8' src={tool.src} alt={tool.alt}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Tools