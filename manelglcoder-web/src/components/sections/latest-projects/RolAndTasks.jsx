import RoleIcon from '../../../assets/Icons/role_icon.svg'
import TasksIcon from '../../../assets/Icons/tasks_icon.svg'

const RolAndTasks = ({info}) =>{
    const {rol, tasks} = info
    return(
        <section className="flex flex-col">
            <div className="flex-1 flex flex-col gap-2 mx-2 font-bold text-color_bold">
                <div className='relative -top-2 flex gap-1 items-center'>
                    <img className='size-7' src={RoleIcon} alt="Role Icon" />
                    <span>{rol}</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <img className='size-7' src={TasksIcon} alt="Tasks Icon" />
                    <span>TAREAS</span>
                </div>
                {
                    tasks.map((task, i)=>{
                        return(<span className='pl-6 text-color_semibold font-semibold' key={i}>{task}</span>)
                    })
                }
            </div>
        </section>
    )
}

export default RolAndTasks