import { useState } from "react"
import { TITLE_CARD, BG_CARD, BUTTON_STYLE } from "../../../utilities/classname_utilities"

const FromInput = ({sendFromData}) =>{
    const [data, setData] = useState('')
    return(
        <div className={`flex flex-col p-1 min-h-xl ${BG_CARD}`}>
            <span className={TITLE_CARD}>De:</span>
            <textarea
                className="relative -top-2 flex-1 mx-2 text-color_semibold font-semibold" rows="1"
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