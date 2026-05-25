import { useState } from 'react'

import ProjectNameAndPeriod from './ProjectNameAndPeriod'
import ProjectDataSheet from './ProjectDataSheet'
import HorizontalLineSeparator from '../../../HorizontalLineSeparator'
import RolAndTasks from '../RolAndTasks'
import ProjectSplashScreen from './ProjectSplashScreen'
import Tools from '../Tools'
import LinksAndGallery from '../LinksAndGallery'
import ShowMoreInfoButton from '../../../buttons/ShowMoreInfoButton'
import MoreInfo from './MoreInfo'



import { TITLE_CARD, BG_CARD, TEXT_SUB_TITLE, TEXT_NORMAL} from '../../../../utilities/classname_utilities'

const ProjectCard = ({info}) =>{
    const {title, img, category, period, rol, tasks, links, tools, gallery, extra, gameData} = info
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const altShowMoreInfo = () => setShowMoreInfo(!showMoreInfo)

    
    return(
        <div className={`flex flex-col mx-4 my-5 gap-1 ${BG_CARD}`}>
            <span className={TITLE_CARD}>{category}</span>
            <section className="flex  flex-col mx-4 gap-2">
                    <ProjectNameAndPeriod title={title} period={period}/>
                    <div className='flex sm:justify-center sm:items-center'>
                        <ProjectSplashScreen imgInfo={img}/>
                    </div>
                    {
                        !gameData? 
                        <MoreInfo extraInfo={extra}/> :
                        <ProjectDataSheet info={gameData}/>
                    }
                    <HorizontalLineSeparator/>
                    <RolAndTasks rol={rol} tasks={tasks}/>
                    <Tools tools={tools}/>
            </section>
            
            <div className='flex gap-1 justify-start sm:justify-center items-center mx-4'>
                <LinksAndGallery links={links} gallery={gallery}/>
            </div>
            {
                !gameData ? '' : <ShowMoreInfoButton click={altShowMoreInfo} showMoreInfo={showMoreInfo}/>
            }
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