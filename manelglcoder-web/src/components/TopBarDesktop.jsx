import { useState, useEffect } from "react"
const TopBarDesktop = () =>{

    const [today, setDate] = useState(new Date())
    const [currDate, setCurrDate] = useState('')
    const [currTime, setCurrTime] = useState('')
    const [locale, setLocale] = useState('es')

    const updateDate = () =>{
        setDate(new Date())
        const day = today.toLocaleDateString(locale, { weekday: 'long' });
        setCurrDate(`${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}`)
        setCurrTime(today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' }))
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
        justify-between items-center bg-topbar`}>
            <span className="mx-2 text-red-dark-logo font-logo">ManelGLCoder</span>
            <div className="flex gap-2">
                <span>{currDate}</span>
                <span>{currTime}</span>
            </div>
        </section>
    )
}

export default TopBarDesktop
