import RoleIcon from '../../assets/Icons/role_icon.svg'
import TasksIcon from '../../assets/Icons/tasks_icon.svg'
import { TEXT_SUB_TITLE, TEXT_NORMAL } from '../../utilities/classname_utilities'
import IconWithTextCentered from '../generic/IconWithTextCentered'

const RolAndTasks = ({rol, tasks}) =>{
    const rolIcon = {src:RoleIcon, alt:'Role Icon'}
    const rolText = {text:rol, classTextData:TEXT_SUB_TITLE}
    const rolClass = 'relative -top-2'
    const tasksIcon ={src:TasksIcon, alt:'Tasks Icon'}
    const tasksText ={text:'Tareas', classTextData:TEXT_SUB_TITLE}
    return(
        <section className="flex flex-col">
            <div className="flex-1 flex flex-col gap-2 mx-2">
                <IconWithTextCentered iconData={rolIcon} textData={rolText} classData={rolClass}/>
                <IconWithTextCentered iconData={tasksIcon} textData={tasksText}/>
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