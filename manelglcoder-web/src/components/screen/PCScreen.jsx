import "../../App.css"
import TopBarDesktop from "../TopBarDesktop"
import Desktop from "./Desktop"

const PCScreen = () =>{
    return(
        <>
            <section className={`flex flex-col min-h-svh min-w-svw 
            bg-desktop bg-[url('/public/ManelGLCoder.svg')] bg-no-repeat bg-center bg-contain`}>
                <TopBarDesktop/>
                <Desktop/>
            </section>
        </>
    )
}

export default PCScreen