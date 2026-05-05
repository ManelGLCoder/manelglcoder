import RoleIcon from '../../../assets/Icons/role_icon.svg'
import TasksIcon from '../../../assets/Icons/tasks_icon.svg'
import { TEXT_SUB_TITLE, TEXT_NORMAL, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from '../../../utilities/classname_utilities'

const RolAndTasks = ({info}) =>{
    const {rol, tasks} = info
    return(
        <section className="flex flex-col">
            <div className="flex-1 flex flex-col gap-2 mx-2">
                <div className='relative -top-2 flex gap-1 items-center'>
                    <img className={ICON_SIZE} src={RoleIcon} alt="Role Icon" />
                    <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>{rol}</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <img className={ICON_SIZE} src={TasksIcon} alt="Tasks Icon" />
                    <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>TAREAS</span>
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