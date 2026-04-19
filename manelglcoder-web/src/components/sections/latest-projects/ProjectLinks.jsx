import LinkIcon from '../../../assets/Icons/link_icon.svg'

const ProjectLinks = ({links}) =>{
    return(
        <>
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
        </>
    )
}

export default ProjectLinks