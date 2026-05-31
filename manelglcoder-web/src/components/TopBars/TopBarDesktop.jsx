import { useState, useEffect, memo } from "react"

import ClockIcon from '../../assets/Icons/clock_icon.svg'
import DateIcon from '../../assets/Icons/date_icon.svg'
import { TEXT_NORMAL } from "../../utilities/classname_utilities"
import IconWithTextCentered from '../generic/IconWithTextCentered'
import TextCenteredWithIcon from "../generic/TextCenteredWidthIcon"
import { VERSION } from "../../dto/web_version_dto"

const TopBarDesktop = () =>{

    const [resetInterval,setResetInterval] = useState(false)
    const [today, setDate] = useState(new Date())
    const [currDate, setCurrDate] = useState('')
    const [currTime, setCurrTime] = useState('')
    const [locale, setLocale] = useState('es')

    const updateDate = () =>{
        setDate(new Date())
        setCurrDate(`${today.toLocaleDateString(locale, { day:'2-digit' ,month: 'numeric', year: '2-digit' })}`)
        setCurrTime(today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' }))
    }

    useEffect(() => {
        const delay = 10*1000 
        updateDate()
        const timer = setInterval(() => {
        setDate(new Date())
        updateDate()
        setResetInterval(!resetInterval)
    }, delay);
    return () => {
        clearInterval(timer)
    }
  }, [resetInterval]);

    const dateIcon = { src: DateIcon, alt:'Date Icon'}
    const dateText = { text: currDate}
    const clockIcon = { src: ClockIcon, alt:'Clock Icon'}
    const clockText = { text: currTime}
    const textSize = 'text-xl sm:text-2xl'
    return(
        <section className={`flex min-w-svw max-h-10 sm:px-5
        justify-center sm:justify-between items-center text-red-dark-logo text-2xl bg-topbar`}>
            <TextCenteredWithIcon text={`V.${VERSION}`} classData={`mx-1 sm:mx-2 ${TEXT_NORMAL} ${textSize}`}/>
            <TextCenteredWithIcon text={`ManelGLCoder`} classData={`mx-2 ${TEXT_NORMAL} ${textSize}`}/>
            <div className="flex gap-2 justify-center items-center font-basis">
                <IconWithTextCentered iconData={dateIcon} textData={dateText} classData={textSize}/>
                <IconWithTextCentered iconData={clockIcon} textData={clockText} classData={textSize}/>
            </div>
        </section>
    )
}

export default memo(TopBarDesktop)
