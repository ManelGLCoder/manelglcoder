import HighlightIcon from '../../../assets/Icons/highlight_icon.svg'
import SynopsisIcon from '../../../assets/Icons/synopsis_icon.svg'
import { ICON_SIZE ,TEXT_NORMAL, TEXT_SUB_TITLE, TEXT_CENTERED_WITH_ICON } from '../../../utilities/classname_utilities'


const MoreInfo  = ({extraInfo}) =>{
    const isHighlight = (text) =>{
        return text =='Destacable'
    }
    return(
        <section className={`flex flex-1 flex-col gap-1 mx-4 ${TEXT_NORMAL}`}>
            {
                extraInfo.map((element, i)=>{
                    return(
                    <>
                        <div className={`flex gap-1 items-center ${TEXT_SUB_TITLE}`}>
                            <img className={ICON_SIZE} src={isHighlight(element.title) ? HighlightIcon: SynopsisIcon} alt="Text Icon" />
                            <span className={TEXT_CENTERED_WITH_ICON} key={i}>{element.title}</span>
                        </div>
                        {
                            element.texts.map((text,i)=>{
                                return(<span className={`${isHighlight(element.title) ? 'pl-6': ''}`} key={i}>{text}</span>)
                            })
                        }
                        <br />
                    </>
                    )
                })
            }
        </section>
    )
}

export default MoreInfo