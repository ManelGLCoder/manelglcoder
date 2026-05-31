import { useContext } from 'react';
import TopBarGallery from '../../components/TopBars/TopBarGallery'
import PrevIcon from '../../assets/Icons/prev_icon.svg'
import NextIcon from '../../assets/Icons/next_icon.svg'
import { BUTTON_STYLE, TEXT_TITLE } from '../../utilities/classname_utilities';
import { GalleryContext } from '../../contexts/GalleryContext';
import useWindowBehavior from '../../hooks/useWindowBehavior';

const GalleryWindow = ({title}) =>{
    const {content, index, setIndex} = useContext(GalleryContext)
    const { windowRef, position, handleDragStart } = useWindowBehavior({
        defaultX: 300, defaultY: 80
    })

    const nextImg = () =>{setIndex((index + 1)% content.length)}
    const prevImg = () =>{
        const prevIndex = index - 1
        setIndex(prevIndex < 0? content.length - 1 : prevIndex)
    }
    return(
        <section ref={windowRef}
        className={`absolute flex flex-col w-2/5 h-4/7 z-50
        border-2 border-red-dark-logo bg-window-bg`}
        style={{
            left: position.x,
            top: position.y,
        }}>
                <TopBarGallery title={title} onDragStart={handleDragStart}/>
                <img className='relative top-7 w-full h-8/11 object-scale-down' src={content[index].src} alt={content[index].alt}/>
                <div className={`relative -bottom-7.5 flex-1 flex justify-between items-center`}>
                    <button className={`flex-1 flex justify-center ${BUTTON_STYLE} max-w-full`} onClick={prevImg}>
                        <img className='size-10' src={PrevIcon} alt="Prev Icon" />
                    </button>
                    <span className={`mx-4 text-2xl ${TEXT_TITLE}`}>{` ${index + 1} - ${content.length}`}</span>
                    <button className={`flex-1 flex justify-center ${BUTTON_STYLE} max-w-full`} onClick={nextImg}>
                        <img className='size-10' src={NextIcon} alt="Next Icon" />
                    </button>
                </div>
            </section>
    )
}

export default GalleryWindow