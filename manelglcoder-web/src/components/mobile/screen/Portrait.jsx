import { useContext, useEffect, memo } from "react"
import { WindowContext } from "../../../contexts/WindowsContext"
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
import OLD_PROJECTS_DATA from "../../../dto/old_projects_dto"

import { PROFESSIONAL_KEY, LAST_PROJECTS_KEY, ABOUT_ME_KEY, CONCTACT_ME_KEY, OLD_PROJECTS_KEY, GALLERY_KEY } from "../../../dto/window_keys_dto"
import { GalleryContext } from "../../../contexts/GalleryContext"

const Portrait = () =>{
    const {isOpen, bringToFront} = useContext(WindowContext)
    const {visible} = useContext(GalleryContext)

    useEffect(() => {
        if (visible) bringToFront(GALLERY_KEY)
    }, [visible, bringToFront])

    return(
        <div className={`flex-1 grid grid-cols-3 grid-rows-5`}>
            <ProfessionalButton position={'row-start-1 col-start-1'}/>
            <LatestProjectsButton position={'row-start-1 col-start-2'}/>
            <AboutMeButton position={'row-start-1 col-start-3'}/>
            <ContactButton position={'row-start-5 col-start-1'}/>
            <OldestProjectButton position={'row-start-5 col-start-3'} name={'Proyectos Antiguos'}/>

            {isOpen(PROFESSIONAL_KEY) && (
                <FolderWindow title={'PROFESIONAL'} content={PROFESSIONAL_DATA} category={'professional'} windowKey={PROFESSIONAL_KEY}/>
            )}
            {isOpen(LAST_PROJECTS_KEY) && (
                <FolderWindow title={'PROYECTOS'} content={PROJECTS_DATA} category={'project'} windowKey={LAST_PROJECTS_KEY}/>
            )}
            {isOpen(ABOUT_ME_KEY) && (
                <AboutMeWindow windowKey={ABOUT_ME_KEY}/>
            )}
            {isOpen(CONCTACT_ME_KEY) && (
                <ContactMeWindow windowKey={CONCTACT_ME_KEY}/>
            )}
            {isOpen(OLD_PROJECTS_KEY) && (
                <FolderWindow title={'PROYECTOS ANTIGUOS'} content={OLD_PROJECTS_DATA} category={'project'} windowKey={OLD_PROJECTS_KEY}/>
            )}

            {visible ? <GalleryWindow title={'GALERÍA'} windowKey={GALLERY_KEY}/> : ''}
        </div>
    )
}

export default memo(Portrait)
