import { useState } from "react"
const MessageInput = ({sendMessageData}) =>{
    const [data, setData] = useState('')
    return(
        <div className="flex flex-col p-1 min-h-xl bg-red-300">
            <span className="font-bold">Mensaje:</span>
            <textarea
                className="flex-1" rows="10"
                placeholder="Contenido del mensaje"
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