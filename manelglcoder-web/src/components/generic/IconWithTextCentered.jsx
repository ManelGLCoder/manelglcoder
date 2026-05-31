import { memo } from 'react'
import IconSized from "./IconSized"
import TextCenteredWithIcon from "./TextCenteredWidthIcon"

const IconWithTextCentered = ({iconData, textData, classData=''}) =>{
    const {src, alt, classIconData} = iconData
    const {text, classTextData} = textData
    return(
        <div className={`flex gap-1 items-center ${classData}`}>
            <IconSized src={src} alt={alt} classData={classIconData}/>
            <TextCenteredWithIcon text={text} classData={classTextData}/>
        </div>
    )
}

export default memo(IconWithTextCentered)