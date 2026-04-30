import { useState } from "react"
import { TITLE_CARD, BG_CARD} from "../../../utilities/classname_utilities"

const SubjectInput = ({sendSubjectData}) =>{
    const [data, setData] = useState('')
    return(
        <div className={`flex flex-col p-1 min-h-xl ${BG_CARD}`}>
            <span className={TITLE_CARD}>Asunto:</span>
            <textarea
                className="relative -top-2 flex-1 mx-2 text-color_semibold font-semibold" rows="1"
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