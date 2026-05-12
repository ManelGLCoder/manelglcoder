import { useState } from "react"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL, MOBILE_CARD_CLASS} from "../../../../utilities/classname_utilities"

const SubjectInput = ({sendSubjectData}) =>{
    const [data, setData] = useState('')
    return(
        <div className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={TITLE_CARD}>Asunto:</span>
            <textarea
                className={`relative -top-2 flex-1 mx-2 ${TEXT_NORMAL}`} rows="1"
                placeholder="Que me quieres decir.."
                value={data}
                onChange={(e)=>{
                    setData(e.target.value)
                    sendSubjectData(e.target.value)
                }}>
            </textarea>
        </div>
    )
}

export default SubjectInput