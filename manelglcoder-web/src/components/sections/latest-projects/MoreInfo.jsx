import HighlightIcon from '../../../assets/Icons/highlight_icon.svg'
import SynopsisIcon from '../../../assets/Icons/synopsis_icon.svg'


const MoreInfo  = ({extraInfo}) =>{
    const isHighlight = (text) =>{
        return text =='Destacable'
    }
    return(
        <section className="flex flex-1 flex-col gap-1 mx-4 text-color_bold font-bold">
            {
                extraInfo.map((element, i)=>{
                    return(
                    <>
                        <div className='flex gap-1 items-center text-color_bold font-bold'>
                            <img className='size-5' src={isHighlight(element.title) ? HighlightIcon: SynopsisIcon} alt="Text Icon" />
                            <span key={i}>{element.title}</span>
                        </div>
                        {
                            element.texts.map((text,i)=>{
                                return(<span className={`text-color_semibold font-semibold ${isHighlight(element.title) ? 'pl-6': ''}`} key={i}>{text}</span>)
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