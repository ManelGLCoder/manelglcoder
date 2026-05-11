import ProfessionalButton from "../buttons/ProfesionalButton"
import LatestProjectsButton from "../buttons/LatestProjectsButton"
import AboutMeButton from "../buttons/AboutMeButton"
import ContactButton from "../buttons/ContactButton"
import OldestProjectButton from "../buttons/OldestProjectButton"

import FolderWindow from "../windows/FolderWindow"
// import GalleryWindow from "../../windows/GalleryWindow"

// import AboutMeWindow from "../../windows/AboutMeWindow"
// import ContactMeWindow from "../../windows/ContactMeWindow"
import PROFESSIONAL_DATA from "../../../dto/professional_dto"
import PROJECTS_DATA from "../../../dto/projects_dto"


// //TODO: Eliminar tras acabar de diseñar la galería
// import test_gallery_1 from '../../assets/code-bcn-first-warrior/gallery_1.avif'
// import cbfw_gallery_2 from '../../assets/code-bcn-first-warrior/gallery_2.avif'
// import cbfw_gallery_3 from '../../assets/code-bcn-first-warrior/gallery_3.avif'
// import cbfw_gallery_4 from '../../assets/code-bcn-first-warrior/gallery_4.avif'
// const TMP_GALLERY_CONTENT = [
//         {src:test_gallery_1, alt:'CODE BCN img 1'},
//         {src:cbfw_gallery_2, alt:'CODE BCN img 2'},
//         {src:cbfw_gallery_3, alt:'CODE BCN img 3'},
//         {src:cbfw_gallery_4, alt:'CODE BCN img 4'},
//     ]

const Portrait = () =>{
    return(
        <div className={`flex-1 grid grid-cols-3 grid-rows-5`}>
            <ProfessionalButton position={'row-start-1 col-start-1'}/>
            <LatestProjectsButton position={'row-start-1 col-start-2'}/>
            <AboutMeButton position={'row-start-1 col-start-3'}/>
            <ContactButton position={'row-start-5 col-start-1'}/>
            <OldestProjectButton position={'row-start-5 col-start-3'} name={'Proyectos Antiguos'}/>

            {/* <FolderWindow title={'PROFESIONAL'} content={PROFESSIONAL_DATA} category={'professional'}/> */}
            {/* <FolderWindow title={'PROYECTOS'} content={PROJECTS_DATA} category={'project'}/> */}
            {/* <AboutMeWindow/> */}
            {/* <ContactMeWindow/> */}
            {/* <GalleryWindow title={'GALERÍA'} content={TMP_GALLERY_CONTENT}/> */}
        </div>
    )
}

export default Portrait
