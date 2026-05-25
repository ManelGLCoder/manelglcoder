import Company from './Company'
import HorizontalLineSeparator from '../../HorizontalLineSeparator'
import RolAndTasks from '../RolAndTasks'
import LinksAndGallery from '../LinksAndGallery'
import Tools from '../Tools'

import { TITLE_CARD, BG_CARD } from '../../../utilities/classname_utilities'

const ProfessionalCard = ({info}) =>{
    const {title, logo, period, companyDes, rol, tasks, links, tools, gallery} = info

    return(
        <div className={`flex flex-col mx-4 my-5 gap-1 ${BG_CARD}`}>
            <span className={TITLE_CARD}>{title}</span>
                <div className="flex flex-1 flex-col mx-2 gap-2">
                    <Company logo={logo} period={period} companyDes={companyDes}/>
                    <HorizontalLineSeparator/>
                    <div className='flex gap-5'>
                        <section className={`flex-1 flex flex-col gap-2 mx-2`}>
                            <RolAndTasks rol={rol} tasks={tasks}/>
                            <LinksAndGallery links={links} gallery={gallery}/>
                        </section>
                        <Tools tools={tools}/>
                    </div>
                </div>
        </div>
    )
}

export default ProfessionalCard