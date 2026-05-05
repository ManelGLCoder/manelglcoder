
import { STUDIES_DATA } from "../../../dto/about_me_dto"
import DateIcon from "../../../assets/Icons/hover_date_icon.svg"
import CompanyIcon from "../../../assets/Icons/company_icon.svg"
import CertificateIcon from "../../../assets/Icons/certificate_icon.svg"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL, TEXT_CENTERED_WITH_ICON, ICON_SIZE } from "../../../utilities/classname_utilities"

const StudiesCard = () =>{
    return(
        <div className={`flex-1 flex flex-col gap-1 ${BG_CARD}`}>
            <span className={`text-center ${TITLE_CARD}`}>Estudios / Aprendizaje</span>
            <ul className={`flex flex-col mx-2 gap-2 ${TEXT_NORMAL}`}>
                {
                    STUDIES_DATA.map((study,i)=>{
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
                                    <div className="flex gap-2 items-center">
                                        <img className={ICON_SIZE} src={DateIcon} alt="Date Icon" />
                                        <span className={TEXT_CENTERED_WITH_ICON}>{study.period}</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <img className={ICON_SIZE} src={CompanyIcon} alt="Company Icon" />
                                        <span className={TEXT_CENTERED_WITH_ICON}>{study.where}</span>
                                    </div>
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