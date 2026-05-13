import { SKILLS_DATA } from "../../../../dto/about_me_dto"
import { BG_CARD, TITLE_CARD, MOBILE_CARD_CLASS } from "../../../../utilities/classname_utilities"

const Skills = () =>{
    return(
        <section className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={`font-bold ${TITLE_CARD}`}>Skills</span>
            <div className={`relative -top-3 flex flex-wrap justify-between items-center gap-3 m-2`}>
                {
                    SKILLS_DATA.map((skill, i)=>{
                        return(<img key={i} className='size-10' src={skill.src} alt={skill.alt}/>)
                    })
                }
            </div>
        </section>
    )
}

export default Skills