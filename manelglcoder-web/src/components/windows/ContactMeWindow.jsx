import { useState } from "react"
import TopBarWindow from "../TopBars/TopBarWindow"
import FromInput from "../sections/contact-me/FromInput"
import SubjectInput from "../sections/contact-me/SubjectInput"
import MessageInput from "../sections/contact-me/MessageInput"


const ContactMeWindow = () =>{
    const [fromData, setFromData] = useState('')
    const handleFromData = (data) =>{
        setFromData(data)
    }
    const [subjectData, setSubjectData] = useState('')
    const handleSubjectData = (data) =>{
        setSubjectData(data)
    }
    const [messageData, setMessageData] = useState('')
    const handleMessageData = (data) =>{
        setMessageData(data)
    }
    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-fit min-w-xl max-h-2/3 max-w-xl  bg-amber-100`}>
                <TopBarWindow title='Conctacta Conmigo'/>
                <div className='overflow-y-auto flex flex-col mx-3 my-2 gap-2'>
                    <div className="flex flex-col p-1 min-h-xl bg-amber-600">
                        <span className="font-bold">Para:</span>
                        <span> ManelGLCoder</span>
                    </div>
                    <FromInput sendFromData={handleFromData}/>
                    <SubjectInput sendSubjectData={handleSubjectData}/>
                    <MessageInput sendMessageData={handleMessageData}/>
                    <button className="bg-violet-600 hover:bg-violet-40">
                        <span>Enviar</span>
                    </button>
                </div>
            </section>
    )
}

export default ContactMeWindow