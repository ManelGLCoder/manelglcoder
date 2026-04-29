import { useState } from 'react'

import ProjectDataSheet from './ProjectDataSheet'
import ProjectSplashScreen from './ProjectSplashScreen'
import ProjectTools from './ProjectTools'
import HorizontalLineSeparator from '../../HorizontalLineSeparator'
import RolAndTasks from './RolAndTasks'
import ProjectLinks from './ProjectLinks'
import GalleryButton from '../../buttons/GalleryButton'
import ShowMoreInfoButton from '../../buttons/ShowMoreInfoButton'
import MoreInfo from './MoreInfo'

import ProjectIcon from '../../../assets/Icons/project_icon.svg'
import DateIcon from '../../../assets/Icons/hover_date_icon.svg'
import { TITLE_CARD, BG_CARD, BUTTON_STYLE } from '../../../utilities/classname_utilities'

const ProjectCard = ({info}) =>{
    const {title, img, category, period, links, tools, gallery, extra} = info
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const altShowMoreInfo = () => setShowMoreInfo(!showMoreInfo)
    return(
        <div className={`flex flex-col mx-4 my-5 gap-1 ${BG_CARD}`}>
            <span className={TITLE_CARD}>{category}</span>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-4 gap-2">
                    <div className='flex gap-1 items-center text-color_bold font-bold'>
                        <img className='size-5' src={ProjectIcon} alt="Project Icon" />
                        <span>{title}</span>
                    </div>
                    <div className='flex gap-1 items-center text-color_semibold font-semibold'>
                        <img className='size-5' src={DateIcon} alt="Date Icon" />
                        <span>{period}</span>
                    </div>
                    <ProjectDataSheet info={info}/>
                    <HorizontalLineSeparator/>
                    <RolAndTasks info={info} />
                </div>
                <div className='flex flex-col items-center max-w-60 m-2 gap-2'>
                    <ProjectSplashScreen imgInfo={img}/>
                    <ProjectTools tools={tools}/>
                </div>
            </section>
            <div className='flex gap-1 justify-start items-center mx-4'>
                <ProjectLinks links={links} />
                <GalleryButton galleryInfo={gallery}/>
            </div>
            <ShowMoreInfoButton click={altShowMoreInfo} showMoreInfo={showMoreInfo}/>
            {
                showMoreInfo ? 
                <section className="relative mx-2">
                    <HorizontalLineSeparator/>
                    <MoreInfo extraInfo={extra}/>
                </section>
                : null
            }
        </div>
    )
}

export default ProjectCard