import { useState, useEffect } from "react"

import ClockIcon from '../../assets/Icons/clock_icon.svg'
import DateIcon from '../../assets/Icons/date_icon.svg'

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
            <span className="mx-2 font-logo">ManelGLCoder</span>
            <div className="flex gap-2 justify-center items-center font-pixel-number">
                <img className="size-7" src={DateIcon} alt="Date Icon" />
                <span>{currDate}</span>
                <img className="size-7" src={ClockIcon} alt="Clock Icon" />
                <span>{currTime}</span>
            </div>
        </section>
    )
}

export default TopBarDesktop
