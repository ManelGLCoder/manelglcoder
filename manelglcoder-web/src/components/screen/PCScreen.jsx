import "../../App.css"
import TopBarDesktop from "../TopBarDesktop"

const PCScreen = () =>{
    return(
        <>
            <section className="flex min-h-svh min-w-svw bg-desktop">
                <TopBarDesktop/>
            </section>
        </>
    )
}

export default PCScreen