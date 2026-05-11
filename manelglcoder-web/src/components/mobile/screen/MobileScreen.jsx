import "../../../App.css"
import TopBarDesktop from "../../TopBars/TopBarDesktop"
import Portrait from "./Portrait"
import Landscape from "../../mobile/screen/Landscape"

const MobileScreen = ({orientation}) =>{
    return(
        <>
            <section className={`flex-1 flex flex-col
            bg-desktop bg-[url('/ManelGLCoder.svg')] bg-no-repeat bg-center bg-contain`}>
                <TopBarDesktop/>
                {
                    orientation == 'portrait' ? <Portrait/> : <Landscape/>
                }
                {/* <Desktop/> */}
            </section>
        </>
    )
}

export default MobileScreen