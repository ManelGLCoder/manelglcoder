
import { STUDIES_DATA } from "../../../dto/about_me_dto"
import DateIcon from "../../../assets/Icons/hover_date_icon.svg"
import CompanyIcon from "../../../assets/Icons/company_icon.svg"
import CertificateIcon from "../../../assets/Icons/certificate_icon.svg"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL } from "../../../utilities/classname_utilities"
import IconWithTextCentered from "../../generic/IconWithTextCentered"

const StudiesCard = () =>{
    return(
        <div className={`flex-1 flex flex-col gap-1 ${BG_CARD}`}>
            <span className={`text-center ${TITLE_CARD}`}>Estudios / Aprendizaje</span>
            <ul className={`flex flex-col mx-2 gap-2 ${TEXT_NORMAL}`}>
                {
                    STUDIES_DATA.map((study,i)=>{
                        const periodIcon = { src: DateIcon, alt: 'Date Icon'}
                        const periodText = { text: study.period}
                        const comapnyIcon = { src: CompanyIcon, alt: 'Company Icon'}
                        const companyText = { text: study.where}
                        return(
                            <li className='relative -top-4 flex flex-col my-2' key={i}>
                                <div className="flex gap-1 items-start">
                                    {
                                        study.certificated ? <img className="size-8" src={CertificateIcon} alt="Certificate Icon" /> : null
                                    }
                                    <span className="flex gap-1">
                                        <span className="text-color_bold">{study.category}</span>
                                        {study.title}
                                    </span>
                                </div>
                                <div className="pl-3 flex justify-start gap-3">
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

export default StudiesCard