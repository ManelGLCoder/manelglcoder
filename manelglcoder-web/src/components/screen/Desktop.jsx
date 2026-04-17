import ProfessionalButton from "../sections/professional/ProfesionalButton"
import LatestProjectsButton from "../sections/latest-projects/LatestProjectsButton"
import AboutMeButton from "../sections/about-me/AboutMeButton"
import ContactButton from "../sections/contact-me/ContactButton"
import OldestProjectButton from "../sections/old-projects/OldestProjectButton"

import FolderWindow from "../windows/FolderWindow"
import PROFESSIONAL_DATA from "../../dto/professional_dto"
import PROJECTS_DATA from "../../dto/projects_dto"

const Desktop = () =>{
    return(
        <div className={`flex-1 grid grid-cols-12 grid-rows-8 `}>
            <ProfessionalButton/>
            <LatestProjectsButton/>
            <AboutMeButton/>
            <ContactButton/>
            <OldestProjectButton name={'Proyectos Antiguos'}/>

            {/* //TODO: cambiar nombre a desktopWindow o por el estilo */}
            <FolderWindow title={'Profesional'} content={PROFESSIONAL_DATA} category={'professional'}/>
            <FolderWindow title={'Proyectos'} content={PROJECTS_DATA} category={'project'}/>
        </div>
    )
}

export default Desktop