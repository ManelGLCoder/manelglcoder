
import { memo } from 'react'
import { STUDIES_DATA } from "../../../../dto"
import DateIcon from "../../../../assets/Icons/hover_date_icon.svg"
import CompanyIcon from "../../../../assets/Icons/company_icon.svg"
import CertificateIcon from "../../../../assets/Icons/certificate_icon.svg"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL, MOBILE_CARD_CLASS } from "../../../../utilities/classname_utilities"
import IconWithTextCentered from "../../../generic/IconWithTextCentered"

const StudiesCard = () =>{
    return(
        <div className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={`text-center ${TITLE_CARD}`}>Estudios / Aprendizaje</span>
            <ul className={`flex flex-col mx-2 gap-7 ${TEXT_NORMAL}`}>
                {
                    STUDIES_DATA.map((study,i)=>{
                        const periodIcon = { src: DateIcon, alt: 'Date Icon'}
                        const periodText = { text: study.period}
                        const comapnyIcon = { src: CompanyIcon, alt: 'Company Icon'}
                        const companyText = { text: study.where}
                        return(
                            <li className='relative -top-4 flex flex-col my-2' key={i}>
                                <div className="flex gap-1">
                                    {
                                        study.certificated ? <img className="size-8" src={CertificateIcon} alt="Certificate Icon" /> : null
                                    }
                                    <span className="text-color_bold">{study.category}</span>
                                </div>
                                <span>{study.title}</span>
                                <div className="flex gap-2 items-start">
                                    <IconWithTextCentered iconData={periodIcon} textData={periodText}/>
                                    <IconWithTextCentered iconData={comapnyIcon} textData={companyText}/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default memo(StudiesCard)