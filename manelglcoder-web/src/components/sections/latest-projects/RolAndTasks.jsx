import RoleIcon from '../../../assets/Icons/role_icon.svg'
import TasksIcon from '../../../assets/Icons/tasks_icon.svg'
import { TEXT_SUB_TITLE, TEXT_NORMAL } from '../../../utilities/classname_utilities'

const RolAndTasks = ({info}) =>{
    const {rol, tasks} = info
    return(
        <section className="flex flex-col">
            <div className="flex-1 flex flex-col gap-2 mx-2">
                <div className='relative -top-2 flex gap-1 items-center'>
                    <img className='size-7' src={RoleIcon} alt="Role Icon" />
                    <span className={TEXT_SUB_TITLE}>{rol}</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <img className='size-7' src={TasksIcon} alt="Tasks Icon" />
                    <span className={TEXT_SUB_TITLE}>TAREAS</span>
                </div>
                {
                    tasks.map((task, i)=>{
                        return(<span className={`pl-6 ${TEXT_NORMAL}`} key={i}>{task}</span>)
                    })
                }
            </div>
        </section>
    )
}

export default RolAndTasks