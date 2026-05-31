import { useContext } from 'react'
import { WindowContext } from '../../../contexts/WindowsContext'
import ProfessionalCard from '../sections/professional/ProfessionalCard';
import ProjectCard from '../sections/latest-projects/ProjectCard';
import TopBarWindow from '../../TopBars/TopBarWindow';
import { MOBILE_WINDOW_CLASS } from '../../../utilities/classname_utilities';

const FolderWindow = ({title, content, category, windowKey}) =>{
    const { bringToFront, getZIndex } = useContext(WindowContext)
    return(
        <section className={MOBILE_WINDOW_CLASS}
        style={{ zIndex: getZIndex(windowKey) }}
        onMouseDown={() => bringToFront(windowKey)}>
                <TopBarWindow title={title} windowKey={windowKey}/>
                <div className='overflow-y-auto flex flex-col my-1 gap-2'>
                    {
                        content.map((element, i)=>{
                            switch (category){
                                case 'professional':
                                    return(<ProfessionalCard key={i} info={element}/>)
                                case 'project':
                                    return(<ProjectCard key={i} info={element}/>)
                            }
                        })
                    }
                </div>
            </section>
    )
}

export default FolderWindow