import TopBarWindow from "../../TopBars/TopBarWindow"
import ManelGLCard from "../sections/about-me/ManelGLCard"
import ExperienceCard from "../sections/about-me/ExperienceCard"
import StudiesCard from "../sections/about-me/StudiesCard"
import SoftSkills from "../sections/about-me/SoftSkills"
import Skills from "../sections/about-me/Skills"
import { MOBILE_WINDOW_CLASS } from "../../../utilities/classname_utilities"

const AboutMeWindow = () =>{
    return(
        <section className={MOBILE_WINDOW_CLASS}>
            <TopBarWindow title='SOBRE MI'/>
            <div className='overflow-y-auto flex flex-col mx-4 my-1 gap-4'>
                <ManelGLCard/>
                <ExperienceCard/>
                <SoftSkills/>
                <StudiesCard/>
                <Skills/>
            </div>
        </section>
    )
}

export default AboutMeWindow