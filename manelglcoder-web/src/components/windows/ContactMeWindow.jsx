import { useState } from "react"
import TopBarWindow from "../TopBars/TopBarWindow"
import ToInput from "../sections/contact-me/ToInput"
import FromInput from "../sections/contact-me/FromInput"
import SubjectInput from "../sections/contact-me/SubjectInput"
import MessageInput from "../sections/contact-me/MessageInput"

import { BUTTON_STYLE } from "../../utilities/classname_utilities"


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
        <section className={`absolute left-100 top-15 flex flex-col
        h-4/5 w-xl
        border-2 border-red-dark-logo bg-window-bg`}>
                <TopBarWindow title='CONTACTA CONMIGO'/>
                <div className='flex flex-col mx-4 my-5 gap-4'>
                    <ToInput/>
                    <FromInput sendFromData={handleFromData}/>
                    <SubjectInput sendSubjectData={handleSubjectData}/>
                    <MessageInput sendMessageData={handleMessageData}/>
                    <button className={`${BUTTON_STYLE} max-w-full`}>
                        <span>Enviar</span>
                    </button>
                </div>
            </section>
    )
}

export default ContactMeWindow