import { EXPERIENCE_DATA } from "../../../dto/about_me_dto"
import { TITLE_CARD, BG_CARD, BEFORE_VERTICAL_LINE, TEXT_NORMAL } from "../../../utilities/classname_utilities"

import OpenLinkButton from "../../buttons/OpenLinkButton"
import CompanyIcon from "../../../assets/Icons/company_icon.svg"
import DateIcon from "../../../assets/Icons/hover_date_icon.svg"
import IconWithTextCentered from "../../generic/IconWithTextCentered"

const ExperienceCard = () =>{
    const companyIcon = { src: CompanyIcon, alt: 'Company Icon'}
    const periodIcon = { src: DateIcon, alt: 'Date Icon'}
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
                                    <IconWithTextCentered iconData={companyIcon} 
                                        textData={{text: experience.company, classTextData: 'text-color_bold'}}
                                    />
                                    <div className={`w-full flex-1 mx-2 py-0.5 border-b border-red-light-logo`}/>
                                    <IconWithTextCentered iconData={periodIcon} 
                                        textData={{text: experience.period}}
                                    />
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

export default ExperienceCard