const ProjectTools = ({tools}) =>{
    return(
        <div className='flex flex-wrap justify-around gap-1 m-2'>
            {
                tools.map((tool, i)=>{
                    return(<img key={i} className='size-15' src={tool.img} alt={tool.alt}/>)
                })
            }
        </div>
    )
}

export default ProjectTools