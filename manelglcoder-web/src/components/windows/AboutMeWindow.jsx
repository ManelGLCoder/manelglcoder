import ManelGLCard from "../sections/about-me/ManelGLCard"
import TopBarWindow from "../TopBars/TopBarWindow"

const AboutMeWindow = () =>{

    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-2/3 min-w-2xl max-w-2/4 max-h-2/3 bg-amber-300`}>
                <TopBarWindow title='Sobre Mi'/>
                <div className='overflow-y-auto flex flex-col my-1 gap-2'>
                    <ManelGLCard/>
                    {/* {
                        content.map((element, i)=>{
                            switch (category){
                                case 'professional':
                                    return(<ProfessionalCard key={i} info={element}/>)
                                case 'project':
                                    return(<ProjectCard key={i} info={element}/>)
                            }
                        })
                    } */}
                </div>
            </section>
    )
}

export default AboutMeWindow