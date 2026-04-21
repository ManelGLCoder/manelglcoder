import TopBarWindow from "../TopBars/TopBarWindow"
import ManelGLCard from "../sections/about-me/ManelGLCard"
import ExperienceCard from "../sections/about-me/ExperienceCard"
import StudiesCard from "../sections/about-me/StudiesCard"

const AboutMeWindow = () =>{

    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-2/3 min-w-2xl max-w-2/4 max-h-2/3 bg-amber-300`}>
                <TopBarWindow title='Sobre Mi'/>
                <div className='overflow-y-auto flex flex-col my-1 gap-2'>
                    <ManelGLCard/>
                    <div className="flex justify-between gap-2 mx-2">
                        <ExperienceCard/>
                        <StudiesCard/>
                    </div>
                </div>
            </section>
    )
}

export default AboutMeWindow