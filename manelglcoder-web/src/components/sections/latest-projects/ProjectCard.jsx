import { useState } from 'react'

import ProjectCategoryAndPeriod from './ProjectCategoryAndPeriod'
import ProjectDataSheet from './ProjectDataSheet'
import ProjectSplashScreen from './ProjectSplashScreen'
import ProjectTools from './ProjectTools'
import HorizontalLineSeparator from '../../HorizontalLineSeparator'
import RolAndTasks from './RolAndTasks'
import ProjectLinks from './ProjectLinks'
import GalleryButton from '../../buttons/GalleryButton'
import ShowMoreInfoButton from '../../buttons/ShowMoreInfoButton'
import MoreInfo from './MoreInfo'

const ProjectCard = ({info}) =>{
    const {title, img, links, tools, gallery, extra} = info
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const altShowMoreInfo = () => setShowMoreInfo(!showMoreInfo)
    return(
        <div className="flex flex-col mx-2 gap-1 bg-amber-500">
            <span className="text-center bg-topbar font-bold">{title}</span>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-2">
                    <ProjectCategoryAndPeriod info={info}/>
                    <ProjectDataSheet info={info}/>
                    <HorizontalLineSeparator/>
                    <RolAndTasks info={info} />
                </div>
                <div className='flex flex-col items-center max-w-60 m-2 '>
                    <ProjectSplashScreen imgInfo={img}/>
                    <ProjectTools tools={tools}/>
                </div>
            </section>
            <div className='flex gap-1 items-center mx-2'>
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