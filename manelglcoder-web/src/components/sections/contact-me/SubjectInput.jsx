import { useState } from "react"
const SubjectInput = ({sendSubjectData}) =>{
    const [data, setData] = useState('')
    return(
        <div className="flex flex-col p-1 min-h-xl bg-blue-300">
            <span className="font-bold">Asunto:</span>
            <textarea
                className="flex-1" rows="1"
                placeholder="Que me quieres decir"
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