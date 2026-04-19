import CloseWindowButton from "../buttons/CloseWindowButton"

const TopBarWindow = ({title, click}) =>{
    return(
        <section className={`flex max-h-10 
        justify-between items-center text-red-dark-logo text-2xl bg-topbar`}>
            <span className="mx-2 font-logo">{title}</span>
            <CloseWindowButton click={click}/>
        </section>
    )
}

export default TopBarWindow