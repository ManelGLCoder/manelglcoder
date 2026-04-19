import ProfessionalButton from "../sections/professional/ProfesionalButton"
import LatestProjectsButton from "../sections/latest-projects/LatestProjectsButton"
import AboutMeButton from "../sections/about-me/AboutMeButton"
import ContactButton from "../sections/contact-me/ContactButton"
import OldestProjectButton from "../sections/old-projects/OldestProjectButton"

import GalleryWindow from "../windows/GalleryWindow"
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
            <GalleryWindow title={'Galería'} content={TMP_GALLERY_CONTENT}/>
        </div>
    )
}

export default Desktop

//TODO: Eliminar tras acabar de diseñar la galería
import cbfw_galley_1 from '../../assets/code-bcn-first-warrior/gallery_1.avif'
import cbfw_galley_2 from '../../assets/code-bcn-first-warrior/gallery_2.avif'
import cbfw_galley_3 from '../../assets/code-bcn-first-warrior/gallery_3.avif'
import cbfw_galley_4 from '../../assets/code-bcn-first-warrior/gallery_4.avif'
import cbfw_galley_5 from '../../assets/code-bcn-first-warrior/gallery_4.avif'
const TMP_GALLERY_CONTENT = [
        {img:cbfw_galley_1, alt:'CODE BCN img 1'},
        {img:cbfw_galley_2, alt:'CODE BCN img 2'},
        {img:cbfw_galley_3, alt:'CODE BCN img 3'},
        {img:cbfw_galley_4, alt:'CODE BCN img 4'},
        {img:cbfw_galley_5, alt:'CODE BCN img 5'},
    ]