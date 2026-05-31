import TopBarWindow from "../TopBars/TopBarWindow"
import ManelGLCard from "../sections/about-me/ManelGLCard"
import ExperienceCard from "../sections/about-me/ExperienceCard"
import StudiesCard from "../sections/about-me/StudiesCard"
import SoftSkills from "../sections/about-me/SoftSkills"
import Skills from "../sections/about-me/Skills"
import useWindowBehavior from "../../hooks/useWindowBehavior"

const AboutMeWindow = () =>{
    const { windowRef, position, handleDragStart } = useWindowBehavior({
        defaultX: 120, defaultY: 100
    })

    return(
        <section ref={windowRef}
        className={`absolute flex flex-col w-6/10 h-2/3
        border-2 border-red-dark-logo bg-window-bg`}
        style={{
            left: position.x,
            top: position.y,
        }}>
            <TopBarWindow title='SOBRE MI' onDragStart={handleDragStart}/>
            <div className='overflow-y-auto flex flex-col flex-1 my-1 gap-4'>
                <ManelGLCard/>
                <div className="flex justify-between gap-4 mx-4">
                    <div className="flex flex-col gap-6 w-3/5">
                        <ExperienceCard/>
                        <SoftSkills/>
                    </div>
                    <StudiesCard/>
                </div>
                <Skills/>
            </div>
        </section>
    )
}

export default AboutMeWindow