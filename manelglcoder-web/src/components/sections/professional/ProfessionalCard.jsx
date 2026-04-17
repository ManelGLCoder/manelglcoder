import LinkIcon from '../../../assets/Icons/link_icon.svg'
import GalleryIcon from '../../../assets/Icons/gallery_icon.svg'

const ProfessionalCard = ({info}) =>{
    const {title, logo, period, companyDes, rol, tasks, links, tools, gallery} = info
    return(
        <div className="flex flex-col mx-2 gap-1 bg-amber-500">
            <span className="text-center bg-topbar font-bold">{title}</span>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-2">
                    <span className='font-bold'>{period}</span>
                    <p>{companyDes}</p>
                    <div className="relative mx-2 py-4">
                        <div className="w-full border-b border-red-light-logo"></div>
                    </div>
                    <section className="flex flex-col">
                        <div className="flex flex-1 flex-col bg-amber-800">
                            <span className='font-bold'>ROL <span className='font-normal'>{rol}</span></span>
                            <span className='font-bold'>TAREAS</span>
                            {
                                tasks.map((task, i)=>{
                                    return(<span key={i}>{task}</span>)
                                })
                            }
                            <div className='flex gap-1 justify-center items-center'>
                                {
                                    links.map((link, i)=>{
                                        return(
                                        <button key={i} className='flex justify-center items-center max-w-fit p-1 gap-1 bg-violet-600 hover:bg-violet-400'
                                        onClick={()=> window.open(link.url, "_blank")}>
                                            <img className='size-7' src={LinkIcon} alt="Link Icon" />
                                            <span className='text-center'>{link.text}</span>
                                        </button>
                                    )
                                    })
                                }
                                <button className='flex justify-center items-center max-w-fit p-1 gap-1 bg-red-500 hover:bg-red-300'>
                                    <img className='size-7' src={GalleryIcon} alt="Gallery Icon" />
                                    <span>GALERIA</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='flex flex-col items-center max-w-50 m-2 '>
                    <img className='p-1 object-cover' src={logo} alt="Logo Empresa"/>
                    <div className='flex flex-wrap justify-around gap-1 m-2'>
                        {
                            tools.map((tool, i)=>{
                                return(<img key={i} className='size-15' src={tool.img} alt={tool.alt}/>)
                            })
                        }
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default ProfessionalCard