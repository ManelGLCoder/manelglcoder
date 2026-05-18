import { WindowContext } from "../../contexts/WindowsContext"
import ProfessionalButton from "../buttons/ProfesionalButton"
import LatestProjectsButton from "../buttons/LatestProjectsButton"
import AboutMeButton from "../buttons/AboutMeButton"
import ContactButton from "../buttons/ContactButton"
import OldestProjectButton from "../buttons/OldestProjectButton"

import GalleryWindow from "../windows/GalleryWindow"
import FolderWindow from "../windows/FolderWindow"
import AboutMeWindow from "../windows/AboutMeWindow"
import ContactMeWindow from "../windows/ContactMeWindow"
import PROFESSIONAL_DATA from "../../dto/professional_dto"
import PROJECTS_DATA from "../../dto/projects_dto"
import { PROFESSIONAL_KEY, LAST_PROJECTS_KEY, ABOUT_ME_KEY, CONCTACT_ME_KEY, OLD_PROJECTS_KEY } from "../../dto/window_keys_dto"
import { useContext } from "react"
import { GalleryContext } from "../../contexts/GalleryContext"

const Desktop = () =>{
    const {currWindow} = useContext(WindowContext)
    const {visible} = useContext(GalleryContext)
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
        <div className={`flex-1 grid grid-cols-12 grid-rows-8 `}>
            <ProfessionalButton position={'row-start-1 col-start-1'}/>
            <LatestProjectsButton position={'row-start-2 col-start-1'}/>
            <AboutMeButton position={'row-start-3 col-start-1'}/>
            <ContactButton position={'row-start-4 col-start-1'}/>
            <OldestProjectButton name={'Proyectos Antiguos'} position={'row-start-8 col-start-1'}/>
            {
                showWindow(currWindow)
            }
            {
                visible ? <GalleryWindow title={'GALERÍA'}/> : ''
            }
        </div>
    )
}

export default Desktop
