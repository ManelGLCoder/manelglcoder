import { useContext } from 'react';
import { WindowContext } from '../../contexts/WindowsContext';
import TopBarGallery from '../../components/TopBars/TopBarGallery'
import PrevIcon from '../../assets/Icons/prev_icon.svg'
import NextIcon from '../../assets/Icons/next_icon.svg'
import { BUTTON_STYLE, TEXT_TITLE } from '../../utilities/classname_utilities';
import { GalleryContext } from '../../contexts/GalleryContext';
import useWindowBehavior from '../../hooks/useWindowBehavior';

const GalleryWindow = ({title, windowKey}) =>{
    const {content, index, setIndex} = useContext(GalleryContext)
    const { bringToFront, getZIndex } = useContext(WindowContext)
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
        className={`absolute flex flex-col w-2/5 h-4/7
        border-2 border-red-dark-logo bg-window-bg`}
        style={{
            left: position.x,
            top: position.y,
            zIndex: getZIndex(windowKey),
        }}
        onMouseDown={() => bringToFront(windowKey)}>
                <TopBarGallery title={title} onDragStart={handleDragStart}/>
                <div className="flex-1 flex items-center justify-center min-h-0 p-2">
                    <img className='max-w-full max-h-full object-contain' src={content[index].src} alt={content[index].alt}/>
                </div>
                <div className={`shrink-0 flex justify-between items-center px-4`}>
                    <button className={`flex-1 flex justify-center ${BUTTON_STYLE} max-w-full my-1`} onClick={prevImg}>
                        <img className='size-10' src={PrevIcon} alt="Prev Icon" />
                    </button>
                    <span className={`mx-4 text-2xl ${TEXT_TITLE}`}>{` ${index + 1} - ${content.length}`}</span>
                    <button className={`flex-1 flex justify-center ${BUTTON_STYLE} max-w-full my-1`} onClick={nextImg}>
                        <img className='size-10' src={NextIcon} alt="Next Icon" />
                    </button>
                </div>
            </section>
    )
}

export default GalleryWindow