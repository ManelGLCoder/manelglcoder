import { useState } from "react"
import { TITLE_CARD, BG_CARD, TEXT_NORMAL} from "../../../utilities/classname_utilities"

const MessageInput = ({sendMessageData}) =>{
    const [data, setData] = useState('')
    return(
        <div className={`flex flex-col p-1 min-h-xl ${BG_CARD}`}>
            <span className={TITLE_CARD}>Mensaje:</span>
            <textarea
                className={`relative -top-2 flex-1 mx-2 ${TEXT_NORMAL}`} rows="10"
                placeholder="Contenido del mensaje.."
                value={data}
                onChange={(e)=>{
                    setData(e.target.value)
                    sendMessageData(e.target.value)
                }}>
            </textarea>
        </div>
    )
}

export default MessageInput