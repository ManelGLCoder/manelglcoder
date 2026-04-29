import ToolsIcon from '../../../assets/Icons/tools_icon.svg'

const ProjectTools = ({tools}) =>{
    return(
        <div className="flex flex-col gap-1 my-2">
            <div className='flex gap-2 items-center'>
                <img className='size-7' src={ToolsIcon} alt="Tools Icon" />
                <span className='text-color_bold font-bold'>Tools</span>
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