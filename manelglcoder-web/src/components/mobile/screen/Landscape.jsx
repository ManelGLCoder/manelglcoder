import ProfessionalButton from "../buttons/ProfesionalButton"
import LatestProjectsButton from "../buttons/LatestProjectsButton"
import AboutMeButton from "../buttons/AboutMeButton"
import ContactButton from "../buttons/ContactButton"
import OldestProjectButton from "../buttons/OldestProjectButton"

import FolderWindow from "../windows/FolderWindow"
import GalleryWindow from "../windows/GalleryWindow"

import AboutMeWindow from "../windows/AboutMeWindow"
import ContactMeWindow from "../windows/ContactMeWindow"
import PROFESSIONAL_DATA from "../../../dto/professional_dto"
import PROJECTS_DATA from "../../../dto/projects_dto"

import { useContext } from "react"
import { WindowContext } from "../../../contexts/WindowsContext"
import { PROFESSIONAL_KEY, LAST_PROJECTS_KEY, ABOUT_ME_KEY, CONCTACT_ME_KEY, OLD_PROJECTS_KEY } from "../../../dto/window_keys_dto"

// //TODO: Eliminar tras acabar de diseñar la galería
// import test_gallery_1 from '../../../assets/code-bcn-first-warrior/gallery_1.avif'
// import cbfw_gallery_2 from '../../../assets/code-bcn-first-warrior/gallery_2.avif'
// import cbfw_gallery_3 from '../../../assets/code-bcn-first-warrior/gallery_3.avif'
// import cbfw_gallery_4 from '../../../assets/code-bcn-first-warrior/gallery_4.avif'
// const TMP_GALLERY_CONTENT = [
//         {src:test_gallery_1, alt:'CODE BCN img 1'},
//         {src:cbfw_gallery_2, alt:'CODE BCN img 2'},
//         {src:cbfw_gallery_3, alt:'CODE BCN img 3'},
//         {src:cbfw_gallery_4, alt:'CODE BCN img 4'},
//     ]
const Landscape = () =>{
    const {currWindow} = useContext(WindowContext)
    const showWindow = (windowKey) =>{
        switch (windowKey) {
            case PROFESSIONAL_KEY:
                return  <FolderWindow title={'PROFESIONAL'} content={PROFESSIONAL_DATA} category={'professional'}/>
            case LAST_PROJECTS_KEY:
                return <FolderWindow title={'PROYECTOS'} content={PROJECTS_DATA} category={'project'}/>
            case ABOUT_ME_KEY:
                return <AboutMeWindow/>
            case CONCTACT_ME_KEY:
                return <ContactMeWindow/>
            case OLD_PROJECTS_KEY:
                return <FolderWindow title={'PROYECTOS ANTIGUOS'} content={PROJECTS_DATA} category={'project'}/>
            default:
                return ''
        }
    }
    return(
        <div className={`flex-1 grid grid-cols-6 grid-rows-3`}>
            <ProfessionalButton position={'row-start-1 col-start-1'} isDesktop={false}/>
            <LatestProjectsButton position={'row-start-2 col-start-1'} isDesktop={false}/>
            <AboutMeButton position={'row-start-3 col-start-1'} isDesktop={false}/>
            <ContactButton position={'row-start-3 col-start-2'} isDesktop={false}/>
            <OldestProjectButton position={'row-start-3 col-start-6'} name={'Proyectos Antiguos'} isDesktop={false}/>
            {
                showWindow(currWindow)
            }
            {/* <GalleryWindow title={'GALERÍA'} content={TMP_GALLERY_CONTENT}/> */}
        </div>
    )
}

export default Landscape