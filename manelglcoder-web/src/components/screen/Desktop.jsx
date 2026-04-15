import ProfessionalButton from "../sections/professional/ProfesionalButton"
import LatestProjectsButton from "../sections/latest-projects/LatestProjectsButton"
import AboutMeButton from "../sections/about-me/AboutMeButton"
import ContactButton from "../sections/contact-me/ContactButton"
import OldestProjectButton from "../sections/old-projects/OldestProjectButton"

import FolderWindow from "../windows/FolderWindow"

const Desktop = () =>{
    return(
        <div className={`flex-1 grid grid-cols-12 grid-rows-8 `}>
            <ProfessionalButton/>
            <LatestProjectsButton/>
            <AboutMeButton/>
            <ContactButton/>
            <OldestProjectButton name={'Proyectos Antiguos'}/>

            <FolderWindow title={'Profesional'}/>
        </div>
    )
}

export default Desktop