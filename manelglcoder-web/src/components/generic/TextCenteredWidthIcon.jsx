import { TEXT_CENTERED_WITH_ICON } from "../../utilities/classname_utilities";

const TextCenteredWithIcon = ({text, classData=''}) =>{
    return(
        <span className={`${TEXT_CENTERED_WITH_ICON} ${classData}`}>{text}</span>
    )
}

export default TextCenteredWithIcon