import PlatformIcon from '../../../assets/Icons/platform_icon.svg'
import PlayersIcon from '../../../assets/Icons/players_icon.svg'
import GenreIcon from '../../../assets/Icons/genre_icon.svg'
import ClockIcon from '../../../assets/Icons/hover_clock_icon.svg'
import DeveloperIcon from '../../../assets/Icons/developer_icon.svg'

const ProjectDataSheet = ({info}) =>{
    const {platform, players, gender, duration, developer} = info
    return(
        <section className='flex flex-col gap-1.5 my-2 text-color_bold font-bold'>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={PlatformIcon} alt="Platform Icon" />
                <span>Plataformas: <span className='text-color_semibold font-semibold'>{platform}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={PlayersIcon} alt="Players Icon" />
                <span>Jugadores: <span className='text-color_semibold font-semibold'>{players}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={GenreIcon} alt="Genre Icon" />
                <span>Género: <span className='text-color_semibold font-semibold'>{gender}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={ClockIcon} alt="Clock Icon" />
                <span>Duración: <span className='text-color_semibold font-semibold'>{duration}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={DeveloperIcon} alt="Date Icon" />
                <span>Desarrollador: <span className='text-color_semibold font-semibold'>{developer}</span></span>
            </div>
        </section>
    )
}

export default ProjectDataSheet