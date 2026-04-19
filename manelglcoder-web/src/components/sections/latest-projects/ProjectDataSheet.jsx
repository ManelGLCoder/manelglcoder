
const ProjectDataSheet = ({info}) =>{
    const {platform, players, gender, duration, developer} = info
    return(
        <section className='flex flex-col'>
            <span className='col-span-2 font-bold'>Plataformas: <span className='font-normal'>{platform}</span></span>
            <span className='font-bold'>Jugadores: <span className='font-normal'>{players}</span></span>
            <span className='col-span-2 font-bold'>Género: <span className='font-normal'>{gender}</span></span>
            <span className='font-bold'>Duración: <span className='font-normal'>{duration}</span></span>
            <span className='col-span-3 font-bold'>Desarrollador: <span className='font-normal'>{developer}</span></span>
        </section>
    )
}

export default ProjectDataSheet