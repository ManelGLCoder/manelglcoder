import TopBarWindow from "../../TopBars/TopBarWindow"
import TextCenteredWithIcon from "../../generic/TextCenteredWidthIcon"
import IconSized from "../../generic/IconSized"
import { GITHUB_LINK,LINKEDIN_LINK, MY_GMAIL } from "../../../dto/contact_me_dto"

import GmailIcon from "../../../assets/Icons/gmail_icon.svg"
import GithubIcon from "../../../assets/Icons/github_icon.svg"
import LinkedinIcon from "../../../assets/Icons/linkedin_icon.svg"
import { BUTTON_STYLE, MOBILE_WINDOW_CLASS, TEXT_SUB_TITLE, TEXT_CENTERED_WITH_ICON, BG_CARD } from "../../../utilities/classname_utilities"


const ContactMeWindow = () =>{
    return(
        <section className={`${MOBILE_WINDOW_CLASS} h-fit sm:h-fit`}>
                <TopBarWindow title='CONTACTA CONMIGO'/>
                <div className={`mx-4 my-4 ${BG_CARD}`}>
                    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between mx-4 my-2 gap-0 sm:gap-4">
                        <div className="flex gap-1 items-center">
                            <IconSized src={GmailIcon} alt={'Gmail Icon'}/>
                            <span className={`${TEXT_SUB_TITLE} ${TEXT_CENTERED_WITH_ICON}`}>{MY_GMAIL}</span>
                        </div>
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
                    </div>
                </div>
            </section>
    )
}

export default ContactMeWindow