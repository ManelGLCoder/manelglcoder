import { ICON_SIZE } from "../../utilities/classname_utilities"

const IconSized = ({src, alt, classData= ''}) =>{
    return(
        <img className={`${ICON_SIZE} ${classData}`} src={src} alt={alt} />
    )
}

export default IconSized