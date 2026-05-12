import { useState } from "react"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL, MOBILE_CARD_CLASS } from "../../../../utilities/classname_utilities"

const FromInput = ({sendFromData}) =>{
    const [data, setData] = useState('')
    return(
        <div className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={TITLE_CARD}>De:</span>
            <textarea
                className={`relative -top-2 flex-1 mx-2 ${TEXT_NORMAL}`} rows="1"
                placeholder="Escribe tu email.."
                value={data}
                onChange={(e)=>{
                    setData(e.target.value)
                    sendFromData(e.target.value)
                }}>
            </textarea>
        </div>
    )
}

export default FromInput