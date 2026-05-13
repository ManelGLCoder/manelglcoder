import IconWithTextCentered from "../../../generic/IconWithTextCentered"
import { TEXT_SUB_TITLE, TEXT_NORMAL} from '../../../../utilities/classname_utilities'

import ProjectIcon from '../../../../assets/Icons/project_icon.svg'
import DateIcon from '../../../../assets/Icons/hover_date_icon.svg'

const ProjectNameAndPeriod = ({title, period}) =>{
    const projectIcon = {src:ProjectIcon, alt:'Project Icon'}
    const projectText = {text:title, classTextData:TEXT_SUB_TITLE}
    const periodIcon = {src:DateIcon, alt:'Date Icon'}
    const periodText = {text:period, classTextData:TEXT_NORMAL}
    const classData = 'items-start'
    return(
        <>
            <IconWithTextCentered iconData={projectIcon} textData={projectText} classData={classData}/>
            <IconWithTextCentered iconData={periodIcon} textData={periodText}/>
        </>
    )
}

export default ProjectNameAndPeriod