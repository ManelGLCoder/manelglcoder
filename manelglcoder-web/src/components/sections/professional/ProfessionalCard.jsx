import LinkIcon from '../../../assets/Icons/link_icon.svg'
import GalleryIcon from '../../../assets/Icons/gallery_icon.svg'

const ProfessionalCard = ({info}) =>{
    const {title, logo, period, companyDes, rol, tasks, links, tools, gallery} = info
    return(
        <div className="flex flex-col mx-2 bg-amber-500">
            <span className="text-center bg-topbar font-bold">{title}</span>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-2">
                    <span className='font-bold'>{period}</span>
                    <p>{companyDes}</p>
                </div>
                <img className='m-2 object-cover' src={logo} alt="Imagen sobre el trabajo"/>
            </section>
            <div className="relative mx-4 py-4">
                <div className="w-full border-b border-red-light-logo"></div>
            </div>
            <section className="flex flex-col">
                <div className='flex justify-around gap-1 m-2'>
                    {
                        tools.map((tool, i)=>{
                            return(<img key={i} className='size-15' src={tool.img} alt={tool.alt}/>)
                        })
                    }
                </div>
                <div className="flex flex-1 flex-col mx-2 bg-amber-800">
                    <span className='font-bold'>ROL <span className='font-normal'>{rol}</span></span>
                    <span className='font-bold'>TAREAS</span>
                    {
                        tasks.map((task, i)=>{
                            return(<span key={i}>{task}</span>)
                        })
                    }
                    <div className='flex gap-1'>
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
    )
}

export default ProfessionalCard