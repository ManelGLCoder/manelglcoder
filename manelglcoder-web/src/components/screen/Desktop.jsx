import ProfessionalButton from "../sections/professional/ProfesionalButton"
import LatestProjectsButton from "../sections/latest-projects/LatestProjectsButton"
import AboutMeButton from "../buttons/AboutMeButton"
import ContactButton from "../sections/contact-me/ContactButton"
import OldestProjectButton from "../sections/old-projects/OldestProjectButton"

import GalleryWindow from "../windows/GalleryWindow"
import FolderWindow from "../windows/FolderWindow"
import AboutMeWindow from "../windows/AboutMeWindow"
import ContactMeWindow from "../windows/ContactMeWindow"
import PROFESSIONAL_DATA from "../../dto/professional_dto"
import PROJECTS_DATA from "../../dto/projects_dto"


//TODO: Eliminar tras acabar de diseñar la galería
import test_gallery_1 from '../../assets/code-bcn-first-warrior/gallery_1.avif'
import cbfw_gallery_2 from '../../assets/code-bcn-first-warrior/gallery_2.avif'
import cbfw_gallery_3 from '../../assets/code-bcn-first-warrior/gallery_3.avif'
import cbfw_gallery_4 from '../../assets/code-bcn-first-warrior/gallery_4.avif'
const TMP_GALLERY_CONTENT = [
        {src:test_gallery_1, alt:'CODE BCN img 1'},
        {src:cbfw_gallery_2, alt:'CODE BCN img 2'},
        {src:cbfw_gallery_3, alt:'CODE BCN img 3'},
        {src:cbfw_gallery_4, alt:'CODE BCN img 4'},
    ]

const Desktop = () =>{
    return(
        <div className={`flex-1 grid grid-cols-12 grid-rows-8 `}>
            <ProfessionalButton/>
            <LatestProjectsButton/>
            <AboutMeButton/>
            <ContactButton/>
            <OldestProjectButton name={'Proyectos Antiguos'}/>

            {/* <FolderWindow title={'Profesional'} content={PROFESSIONAL_DATA} category={'professional'}/> */}
            <FolderWindow title={'Proyectos'} content={PROJECTS_DATA} category={'project'}/>
            {/* <AboutMeWindow/> */}
            {/* <ContactMeWindow/> */}
            <GalleryWindow title={'Galería'} content={TMP_GALLERY_CONTENT}/>
        </div>
    )
}

export default Desktop
