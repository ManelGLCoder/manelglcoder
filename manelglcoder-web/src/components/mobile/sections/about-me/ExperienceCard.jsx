import { memo } from 'react'
import { EXPERIENCE_DATA } from "../../../../dto"
import { TITLE_CARD, BG_CARD, BEFORE_VERTICAL_LINE, TEXT_NORMAL, MOBILE_CARD_CLASS } from "../../../../utilities/classname_utilities"

import OpenLinkButton from "../../../buttons/OpenLinkButton"
import CompanyIcon from "../../../../assets/Icons/company_icon.svg"
import DateIcon from "../../../../assets/Icons/hover_date_icon.svg"
import IconWithTextCentered from "../../../generic/IconWithTextCentered"

const ExperienceCard = () =>{
    const companyIcon = { src: CompanyIcon, alt: 'Company Icon'}
    const periodIcon = { src: DateIcon, alt: 'Date Icon'}
    return(
        <div className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={TITLE_CARD}>Experiencia</span>
            <ul className="relative -top-3 flex flex-col mx-4 my-2 gap-6">
                {
                    EXPERIENCE_DATA.map((experience,i)=>{
                        return(
                            <li className={`flex flex-col gap-1 ${TEXT_NORMAL}`} key={i}>
                                <div className="flex gap-2">
                                    <OpenLinkButton click={''}/>
                                    <IconWithTextCentered iconData={companyIcon} 
                                        textData={{text: experience.company, classTextData: 'text-color_bold'}}
                                    />
                                </div>
                                <IconWithTextCentered iconData={periodIcon} 
                                    textData={{text: experience.period}}
                                />
                                <span className={`relative pl-5 mx-2`}>
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

export default memo(ExperienceCard)