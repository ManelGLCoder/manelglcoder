import { useContext } from 'react'
import { WindowContext } from '../../contexts/WindowsContext'
import TopBarWindow from "../TopBars/TopBarWindow"

import TextCenteredWithIcon from "../generic/TextCenteredWidthIcon"
import IconSized from "../generic/IconSized"
import { GITHUB_LINK,LINKEDIN_LINK, MY_GMAIL } from "../../dto/contact_me_dto"

import GmailIcon from "../../assets/Icons/gmail_icon.svg"
import GithubIcon from "../../assets/Icons/github_icon.svg"
import LinkedinIcon from "../../assets/Icons/linkedin_icon.svg"
import { BUTTON_STYLE, TEXT_SUB_TITLE, TEXT_CENTERED_WITH_ICON, BG_CARD } from "../../utilities/classname_utilities"
import useWindowBehavior from "../../hooks/useWindowBehavior"

const ContactMeWindow = ({windowKey}) =>{
    const { bringToFront, getZIndex } = useContext(WindowContext)
    const { windowRef, position, handleDragStart } = useWindowBehavior({
        defaultX: 200, defaultY: 150
    })

    return(
        <section ref={windowRef}
        className={`absolute flex flex-col h-fit w-1/3
        border-2 border-red-dark-logo bg-window-bg`}
        style={{
            left: position.x,
            top: position.y,
            zIndex: getZIndex(windowKey),
        }}
        onMouseDown={() => bringToFront(windowKey)}>
                <TopBarWindow title='CONTACTA CONMIGO' onDragStart={handleDragStart} windowKey={windowKey}/>
                <div className={`mx-4 my-4 ${BG_CARD}`}>
                    <div className="flex justify-between mx-4 my-2 gap-4">
                        <button className={BUTTON_STYLE}
                        onClick={()=> window.open(GITHUB_LINK, "_blank")}>
                            <IconSized src={GithubIcon} alt={'Github Icon'}/>
                            <TextCenteredWithIcon text='GitHub'/>
                        </button>
                        <button className={BUTTON_STYLE}
                        onClick={()=> window.open(LINKEDIN_LINK, "_blank")}>
                            <IconSized src={LinkedinIcon} alt={'Linkedin Icon'}/>
                            <TextCenteredWithIcon text='LinkedIn'/>
                        </button>
                        <div className="flex gap-1 items-center">
                            <IconSized src={GmailIcon} alt={'Gmail Icon'}/>
                            <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON} select-text`}>{MY_GMAIL}</span>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactMeWindow