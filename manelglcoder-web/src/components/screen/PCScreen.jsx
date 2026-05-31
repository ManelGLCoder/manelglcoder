import "../../App.css"
import TopBarDesktop from "../TopBars/TopBarDesktop"
import Desktop from "./Desktop"

const PCScreen = () =>{
    return(
        <>
            <section className={`flex flex-col min-h-[100svh] min-w-[100svw]
            bg-desktop bg-[url('/ManelGLCoder.svg')] bg-no-repeat bg-center bg-contain`}>
                <TopBarDesktop/>
                <Desktop/>
            </section>
        </>
    )
}

export default PCScreen