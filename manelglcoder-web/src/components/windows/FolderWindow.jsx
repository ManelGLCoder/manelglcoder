import { useContext } from 'react'
import { WindowContext } from '../../contexts/WindowsContext'
import ProfessionalCard from '../sections/professional/ProfessionalCard';
import ProjectCard from '../sections/latest-projects/ProjectCard';
import TopBarWindow from '../TopBars/TopBarWindow';
import useWindowBehavior from '../../hooks/useWindowBehavior';

const FolderWindow = ({title, content, category, windowKey}) =>{
    const { bringToFront, getZIndex } = useContext(WindowContext)
    const { windowRef, position, handleDragStart } = useWindowBehavior({
        defaultX: 150, defaultY: 120
    })

    return(
        <section ref={windowRef}
        className={`absolute flex flex-col w-2/5 h-2/3
        border-2 border-red-dark-logo bg-window-bg`}
        style={{
            left: position.x,
            top: position.y,
            zIndex: getZIndex(windowKey),
        }}
        onMouseDown={() => bringToFront(windowKey)}>
                <TopBarWindow title={title} onDragStart={handleDragStart} windowKey={windowKey}/>
                <div className='overflow-y-auto flex flex-col flex-1 my-1 gap-2'>
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