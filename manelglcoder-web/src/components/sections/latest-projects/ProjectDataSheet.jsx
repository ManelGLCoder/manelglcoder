import PlatformIcon from '../../../assets/Icons/platform_icon.svg'
import PlayersIcon from '../../../assets/Icons/players_icon.svg'
import GenreIcon from '../../../assets/Icons/genre_icon.svg'
import ClockIcon from '../../../assets/Icons/hover_clock_icon.svg'
import DeveloperIcon from '../../../assets/Icons/developer_icon.svg'
import { TEXT_SUB_TITLE, TEXT_NORMAL, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from '../../../utilities/classname_utilities'

const ProjectDataSheet = ({info}) =>{
    const {platform, players, gender, duration, developer} = info
    return(
        <section className='flex flex-col gap-1 my-2'>
            <div className="flex gap-1 items-center">
                <img className={ICON_SIZE} src={PlatformIcon} alt="Platform Icon" />
                <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>Plataformas: <span className={`${TEXT_NORMAL} ${TEXT_CENTERED_WITH_ICON}`}>{platform}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className={ICON_SIZE} src={PlayersIcon} alt="Players Icon" />
                <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>Jugadores: <span className={`${TEXT_NORMAL} ${TEXT_CENTERED_WITH_ICON}`}>{players}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className={ICON_SIZE} src={GenreIcon} alt="Genre Icon" />
                <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>Género: <span className={`${TEXT_NORMAL} ${TEXT_CENTERED_WITH_ICON}`}>{gender}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className={ICON_SIZE} src={ClockIcon} alt="Clock Icon" />
                <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>Duración: <span className={`${TEXT_NORMAL} ${TEXT_CENTERED_WITH_ICON}`}>{duration}</span></span>
            </div>
            <div className="flex gap-1 items-center">
                <img className={ICON_SIZE} src={DeveloperIcon} alt="Date Icon" />
                <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>Desarrollador: <span className={`${TEXT_NORMAL} ${TEXT_CENTERED_WITH_ICON}`}>{developer}</span></span>
            </div>
        </section>
    )
}

export default ProjectDataSheet