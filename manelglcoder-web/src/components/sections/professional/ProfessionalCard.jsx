import LinkIcon from '../../../assets/Icons/link_icon.svg'
import GalleryIcon from '../../../assets/Icons/gallery_icon.svg'
import ToolsIcon from '../../../assets/Icons/tools_icon.svg'
import DateIcon from '../../../assets/Icons/hover_date_icon.svg'
import RoleIcon from '../../../assets/Icons/role_icon.svg'
import TasksIcon from '../../../assets/Icons/tasks_icon.svg'
import HorizontalLineSeparator from '../../HorizontalLineSeparator'

import { TITLE_CARD, BG_CARD, BUTTON_STYLE, TEXT_SUB_TITLE, TEXT_NORMAL, TEXT_TITLE } from '../../../utilities/classname_utilities'

const ProfessionalCard = ({info}) =>{
    const {title, logo, period, companyDes, rol, tasks, links, tools, gallery} = info
    return(
        <div className={`flex flex-col mx-4 my-5 gap-1 ${BG_CARD}`}>
            <span className={TITLE_CARD}>{title}</span>
                <div className="flex flex-1 flex-col mx-2 gap-2">
                    <div className='flex gap-2'>
                        <div className='w-70 m-2'>
                            <img className='p-1 object-cover' src={logo} alt="Logo Empresa"/>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <img className='size-5' src={DateIcon} alt="Date Icon" />
                                <span className={TEXT_SUB_TITLE}>{period}</span>
                            </div>
                            <p className={TEXT_NORMAL}>{companyDes}</p>
                        </div>
                    </div>
                    
                    <HorizontalLineSeparator/>
                    <div className='flex gap-5'>
                        <section className={`flex-1 flex flex-col gap-2 mx-2`}>
                            <div className='relative -top-2 flex gap-1 items-center'>
                                <img className='size-7' src={RoleIcon} alt="Role Icon" />
                                <span className={TEXT_SUB_TITLE}>{rol}</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img className='size-7' src={TasksIcon} alt="Tasks Icon" />
                                <span className={TEXT_SUB_TITLE}>TAREAS</span>
                            </div>
                            {
                                tasks.map((task, i)=>{
                                    return(<span className={`pl-6 ${TEXT_NORMAL}`} key={i}>{task}</span>)
                                })
                            }
                            <div className='flex gap-2 justify-start items-center'>
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
                                <button className={BUTTON_STYLE}>
                                    <img className='size-7' src={GalleryIcon} alt="Gallery Icon" />
                                    <span>GALERIA</span>
                                </button>
                            </div>
                        </section>
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2 items-center'>
                                <img className='size-7' src={ToolsIcon} alt="Tools Icon" />
                                <span className={TEXT_SUB_TITLE}>Tools</span>
                            </div>
                            <div className='flex flex-wrap justify-between w-50 gap-3 mx-2'>
                                {
                                    tools.map((tool, i)=>{
                                        return(<img key={i} className='size-8' src={tool.src} alt={tool.alt}/>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProfessionalCard