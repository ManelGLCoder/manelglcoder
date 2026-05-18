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
import { GalleryContext } from "../../../contexts/GalleryContext"

const Portrait = () =>{
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
        <div className={`flex-1 grid grid-cols-3 grid-rows-5`}>
            <ProfessionalButton position={'row-start-1 col-start-1'}/>
            <LatestProjectsButton position={'row-start-1 col-start-2'}/>
            <AboutMeButton position={'row-start-1 col-start-3'}/>
            <ContactButton position={'row-start-5 col-start-1'}/>
            <OldestProjectButton position={'row-start-5 col-start-3'} name={'Proyectos Antiguos'}/>
            {
                showWindow(currWindow)
            }
            {
                visible ? <GalleryWindow title={'GALERÍA'}/> : ''
            }
        </div>
    )
}

export default Portrait
