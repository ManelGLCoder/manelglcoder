import { useState, useEffect } from "react"

import ClockIcon from '../../assets/Icons/clock_icon.svg'
import DateIcon from '../../assets/Icons/date_icon.svg'
import { TEXT_NORMAL, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from "../../utilities/classname_utilities"

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

    return(
        <section className={`flex min-w-svw max-h-10 px-5
        justify-between items-center text-red-dark-logo text-2xl bg-topbar`}>
            <span className={`mx-2 ${TEXT_NORMAL} ${TEXT_CENTERED_WITH_ICON}`}>ManelGLCoder</span>
            <div className="flex gap-2 justify-center items-center font-basis">
                <img className={ICON_SIZE} src={DateIcon} alt="Date Icon" />
                <span className={TEXT_CENTERED_WITH_ICON}>{currDate}</span>
                <img className={ICON_SIZE} src={ClockIcon} alt="Clock Icon" />
                <span className={TEXT_CENTERED_WITH_ICON}>{currTime}</span>
            </div>
        </section>
    )
}

export default TopBarDesktop
