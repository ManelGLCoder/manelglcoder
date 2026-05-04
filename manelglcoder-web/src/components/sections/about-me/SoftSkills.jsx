import { SOFT_SKILLS_DATA } from "../../../dto/about_me_dto"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL } from "../../../utilities/classname_utilities"

const SoftSkills = () =>{
    return(
            <div className={`flex flex-col min-w-fit ${BG_CARD}`}>
                <span className={`font-bold ${TITLE_CARD}`}>Soft Skills</span>
                <ul className="pl-7 relative -top-3 list-disc">
                    {
                        SOFT_SKILLS_DATA.map((key,i)=>{
                            return(<li className={TEXT_NORMAL} key={i}>{key}</li>)
                        })
                    }
                </ul>
            </div>
        )
}

export default SoftSkills