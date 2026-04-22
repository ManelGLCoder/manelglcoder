import { useState } from "react"
const FromInput = ({sendFromData}) =>{
    const [data, setData] = useState('')
    return(
        <div className="flex flex-col p-1 min-h-xl bg-green-300">
            <span className="font-bold">De:</span>
            <textarea
                className="flex-1" rows="1"
                placeholder="Tú email"
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