import CloseWindowButton from "../buttons/CloseWindowButton"
import { TEXT_WINDOW } from "../../utilities/classname_utilities"

const TopBarWindow = ({title, click}) =>{
    return(
        <section className={`flex max-h-10 
        justify-between items-center text-2xl bg-topbar`}>
            <span className={`mx-2 ${TEXT_WINDOW}`}>{title}</span>
            <CloseWindowButton click={click}/>
        </section>
    )
}

export default TopBarWindow