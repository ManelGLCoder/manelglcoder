const RolAndTasks = ({info}) =>{
    const {rol, tasks} = info
    return(
        <section className="flex flex-col">
            <div className="flex flex-1 flex-col gap-1 bg-amber-800">
                <span className='font-bold'>ROL <span className='font-normal'>{rol}</span></span>
                <span className='font-bold'>TAREAS</span>
                {
                    tasks.map((task, i)=>{
                        return(<span key={i}>{task}</span>)
                    })
                }
            </div>
        </section>
    )
}

export default RolAndTasks