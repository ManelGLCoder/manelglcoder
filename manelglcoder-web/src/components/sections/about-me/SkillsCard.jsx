import { SKILLS_DATA } from "../../../dto/about_me_dto"
const SkillsCard = () =>{
    return(
        <div className='flex flex-wrap justify-center items-center gap-1 m-2'>
            {
                SKILLS_DATA.map((skill, i)=>{
                    return(<img key={i} className='size-10' src={skill.src} alt={skill.alt}/>)
                })
            }
        </div>
    )
}

export default SkillsCard