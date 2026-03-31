import { useState, useEffect } from "react"
const TopBarDesktop = () =>{

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
        const delay = 60*1000 
        updateDate()
        const timer = setInterval(() => {
        setDate(new Date())
        updateDate()
    }, delay);
    return () => {
        clearInterval(timer)
    }
  }, []);

    return(
        <section className={`flex min-w-svw max-h-10 px-5
        justify-between items-center text-red-dark-logo text-2xl bg-topbar`}>
            <span className="mx-2 font-logo">ManelGLCoder</span>
            <div className="flex gap-5 font-pixel-number">
                <span >{currDate}</span>
                <span>{currTime}</span>
            </div>
        </section>
    )
}

export default TopBarDesktop
