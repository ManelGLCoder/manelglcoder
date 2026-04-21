
import { STUDIES_DATA } from "../../../dto/about_me_dto"
import CertificateIcon from "../../../assets/Icons/certificate_icon.svg"
const StudiesCard = () =>{
    return(
        <div className="flex-1 flex flex-col gap-1 bg-amber-500">
            <span className="text-center bg-topbar font-bold">Estudios / Aprendizaje</span>
            <ul className="flex flex-col mx-2 gap-2">
                {
                    STUDIES_DATA.map((study,i)=>{
                        return(
                            <li className='flex flex-col' key={i}>
                                <div className="flex gap-2">
                                    <span>{`(${study.period}) [${study.where}] {${study.category}}`}</span>
                                    {
                                        study.certificated ? <img src={CertificateIcon} alt="Certificate Icon" /> : null
                                    }
                                </div>
                                <span>{study.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StudiesCard