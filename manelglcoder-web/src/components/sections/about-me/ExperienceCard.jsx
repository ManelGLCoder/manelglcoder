import { EXPERIENCE_DATA } from "../../../dto/about_me_dto"
const ExperienceCard = () =>{
    return(
        <div className="flex-1 flex flex-col gap-1 bg-amber-500">
            <span className="text-center bg-topbar font-bold">Experiencia</span>
            <ul className="flex flex-col mx-2 gap-2">
                {
                    EXPERIENCE_DATA.map((experience,i)=>{
                        return(
                            <li className='flex flex-col' key={i}>
                                <span>{`[${experience.company}] (${experience.period})`}</span>
                                <span className="mx-2">{experience.rol}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ExperienceCard