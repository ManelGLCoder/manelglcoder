import TopBarWindow from "../TopBars/TopBarWindow"
import ManelGLCard from "../sections/about-me/ManelGLCard"
import ExperienceCard from "../sections/about-me/ExperienceCard"
import StudiesCard from "../sections/about-me/StudiesCard"
import SoftSkills from "../sections/about-me/SoftSkills"
import Skills from "../sections/about-me/Skills"

const AboutMeWindow = () =>{

    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-2/3 min-w-2xl max-w-2/4 max-h-2/3 bg-window`}>
                <TopBarWindow title='Sobre Mi'/>
                <div className='overflow-y-auto flex flex-col my-1 gap-2'>
                    <ManelGLCard/>
                    <div className="flex justify-between gap-2 mx-2">
                        <ExperienceCard/>
                        <StudiesCard/>
                    </div>
                    <div className='flex gap-1'>
                        <SoftSkills/>
                        <Skills/>
                    </div>
                </div>
            </section>
    )
}

export default AboutMeWindow