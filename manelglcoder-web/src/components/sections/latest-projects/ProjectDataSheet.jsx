import PlatformIcon from '../../../assets/Icons/platform_icon.svg'
import PlayersIcon from '../../../assets/Icons/players_icon.svg'
import GenreIcon from '../../../assets/Icons/genre_icon.svg'
import ClockIcon from '../../../assets/Icons/hover_clock_icon.svg'
import DeveloperIcon from '../../../assets/Icons/developer_icon.svg'
import { TEXT_SUB_TITLE, TEXT_NORMAL } from '../../../utilities/classname_utilities'

const ProjectDataSheet = ({info}) =>{
    const {platform, players, gender, duration, developer} = info
    return(
        <section className='flex flex-col gap-1.5 my-2'>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={PlatformIcon} alt="Platform Icon" />
                <span className={TEXT_SUB_TITLE}>Plataformas: <span className={TEXT_NORMAL}>{platform}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={PlayersIcon} alt="Players Icon" />
                <span className={TEXT_SUB_TITLE}>Jugadores: <span className={TEXT_NORMAL}>{players}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={GenreIcon} alt="Genre Icon" />
                <span className={TEXT_SUB_TITLE}>Género: <span className={TEXT_NORMAL}>{gender}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={ClockIcon} alt="Clock Icon" />
                <span className={TEXT_SUB_TITLE}>Duración: <span className={TEXT_NORMAL}>{duration}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className='size-5' src={DeveloperIcon} alt="Date Icon" />
                <span className={TEXT_SUB_TITLE}>Desarrollador: <span className={TEXT_NORMAL}>{developer}</span></span>
            </div>
        </section>
    )
}

export default ProjectDataSheet