import TmpIcon from '../../../assets/Icons/Ordenador.svg'

const ProfessionalCard = ({info}) =>{
    const {title, period, companyDes, rol, tasks} = info
    return(
        <div className="flex flex-1 flex-col mx-2 bg-amber-500">
            <span className="text-center bg-topbar">{title}</span>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-2">
                    <span>{period}</span>
                    <p>{companyDes}</p>
                </div>
                {/*///TODO: que reciba la imagen correspondiente  */}
                <img className='size-40 m-2' src={TmpIcon} alt="Imagen sobre el trabajo"/>
            </section>
            <div className="relative mx-4 py-4">
                <div className="w-full border-b border-red-light-logo"></div>
            </div>
            <section className="flex">
                <div className="flex flex-1 flex-col mx-2">
                    <span>Rol: {rol}</span>
                    <span>Tareas:</span>
                    {
                        tasks.map((task, i)=>{
                            return(<span key={i}>{task}</span>)
                        })
                    }
                    <button className='bg-violet-600 hover:bg-violet-400'
                    onClick={()=> window.open("someLink", "_blank")}>
                        LINK TO X
                    </button>
                </div>
                {/*///TODO: que reciba los iconos de las herramientas  */}
                <div className='flex bg-blue-300'>
                    <img className='size-40 m-2 bg-blue-900' src={TmpIcon} alt="Imagen sobre el trabajo"/>
                </div>
            </section>
            
        </div>
    )
}

export default ProfessionalCard