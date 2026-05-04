import { EXPERIENCE_DATA } from "../../../dto/about_me_dto"
import { TITLE_CARD, BG_CARD, BEFORE_VERTICAL_LINE, TEXT_NORMAL } from "../../../utilities/classname_utilities"

import OpenLinkButton from "../../buttons/OpenLinkButton"
import CompanyIcon from "../../../assets/Icons/company_icon.svg"
import DateIcon from "../../../assets/Icons/hover_date_icon.svg"

const ExperienceCard = () =>{
    return(
        <div className={`flex-1 flex flex-col gap-1 ${BG_CARD}`}>
            <span className={TITLE_CARD}>Experiencia</span>
            <ul className="relative -top-3 flex flex-col mx-4 my-2 gap-3">
                {
                    EXPERIENCE_DATA.map((experience,i)=>{
                        return(
                            <li className={`flex flex-col gap-1 ${TEXT_NORMAL}`} key={i}>
                                <div className="flex justify-center items-center gap-0.5 ">
                                    <OpenLinkButton click={''}/>
                                    <img className="size-5" src={CompanyIcon} alt="Company Icon"/>
                                    <span className="font-bold text-color_bold">{experience.company}</span>
                                    <div className={`w-full flex-1 mx-2 border-b border-red-light-logo`}/>
                                    <img className="size-5" src={DateIcon} alt="Date Icon"/>
                                    <span>{experience.period}</span>
                                </div>
                                <span className={`relative pl-5 mx-2 ${BEFORE_VERTICAL_LINE}`}>
                                    {experience.rol}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
// relative pl-6 before:absolute before:left-0 before:content-['✔']
// list-image-[url(/icons/arrow.svg)]
export default ExperienceCard