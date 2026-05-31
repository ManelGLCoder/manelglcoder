import { memo } from 'react'
import { TEXT_CENTERED_WITH_ICON } from "../../utilities";

const TextCenteredWithIcon = ({text, classData=''}) =>{
    return(
        <span className={`${TEXT_CENTERED_WITH_ICON} ${classData}`}>{text}</span>
    )
}

export default memo(TextCenteredWithIcon)