import { useState } from 'react'
import LinkIcon from '../../../assets/Icons/link_icon.svg'
import GalleryIcon from '../../../assets/Icons/gallery_icon.svg'
import MoreIcon from '../../../assets/Icons/more_icon.svg'
import LessIcon from '../../../assets/Icons/less_icon.svg'

import MoreInfo from './MoreInfo'

const ProjectCard = ({info}) =>{
    const {title, category, img, period, platform, gender, developer, players, duration, rol, tasks, links, tools, gallery, extra} = info
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const altShowMoreInfo = () => setShowMoreInfo(!showMoreInfo)
    return(
        <div className="flex flex-col mx-2 gap-1 bg-amber-500">
            <span className="text-center bg-topbar font-bold">{title}</span>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-2">
                    <section className='flex gap-2 items-center'>
                        <span className='p-1 max-w-fit border-2 font-bold'>{category}</span>
                        <span className='font-bold'>{period}</span>
                    </section>
                    <section className='flex flex-col'>
                        <span className='col-span-2 font-bold'>Plataformas: <span className='font-normal'>{platform}</span></span>
                        <span className='font-bold'>Jugadores: <span className='font-normal'>{players}</span></span>
                        <span className='col-span-2 font-bold'>Género: <span className='font-normal'>{gender}</span></span>
                        <span className='font-bold'>Duración: <span className='font-normal'>{duration}</span></span>
                        <span className='col-span-3 font-bold'>Desarrollador: <span className='font-normal'>{developer}</span></span>
                    </section>
                    <div className="relative mx-2 py-4">
                        <div className="w-full border-b border-red-light-logo"></div>
                    </div>
                    <section className="flex flex-col">
                        <div className="flex flex-1 flex-col gap-1 bg-amber-800">
                            <span className='font-bold'>ROL <span className='font-normal'>{rol}</span></span>
                            <span className='font-bold'>TAREAS</span>
                            {
                                tasks.map((task, i)=>{
                                    return(<span key={i}>{task}</span>)
                                })
                            }
                        </div>
                    </section>
                </div>
                <div className='flex flex-col items-center max-w-60 m-2 '>
                    <img className='p-1 object-cover' src={img} alt="Imagen sobre el trabajo"/>
                    <div className='flex flex-wrap justify-around gap-1 m-2'>
                        {
                            tools.map((tool, i)=>{
                                return(<img key={i} className='size-15' src={tool.img} alt={tool.alt}/>)
                            })
                        }
                    </div>
                </div>
            </section>
            <div className='flex gap-1 items-center mx-2'>
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
            <button 
            className='self-center flex max-w-fit my-1 p-1 justify-center items-center bg-blue-500 hover:bg-blue-300'
            onClick={altShowMoreInfo}>
                <span>{showMoreInfo? 'Menos Info' : 'Más Info'}</span>
                <img className='size-7' src={showMoreInfo ? LessIcon : MoreIcon} alt="Expand Icon" />
            </button>
            {
                showMoreInfo ? 
                <section className="relative mx-2">
                    <div className="relative mx-2 py-4">
                        <div className="w-full border-b border-red-light-logo"></div>
                    </div>
                    <MoreInfo extraInfo={extra}/>
                </section>
                : null
            }
        </div>
    )
}

export default ProjectCard