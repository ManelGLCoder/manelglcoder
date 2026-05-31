import { useContext } from 'react';
import { WindowContext } from '../../../contexts/WindowsContext';
import TopBarGallery from '../../TopBars/TopBarGallery'

import PrevIcon from '../../../assets/Icons/prev_icon.svg'
import NextIcon from '../../../assets/Icons/next_icon.svg'
import { BUTTON_STYLE, BG_CARD, TEXT_TITLE } from '../../../utilities/classname_utilities';
import { GalleryContext } from '../../../contexts/GalleryContext';

const GalleryWindow = ({title, windowKey}) =>{
    const {content, index, setIndex} = useContext(GalleryContext)
    const { bringToFront, getZIndex } = useContext(WindowContext)
    const nextImg = () =>{setIndex((index + 1)% content.length)}
    const prevImg = () =>{
        const prevIndex = index - 1
        setIndex(prevIndex < 0? content.length - 1 : prevIndex)
    }
    return(
        <section className={`absolute top-11 sm:top-8 sm:left-20 flex flex-col w-full sm:w-4/5 h-13/15
                            border-2 border-red-dark-logo bg-window-bg`}
                            style={{ zIndex: getZIndex(windowKey) }}
                            onMouseDown={() => bringToFront(windowKey)}>
                <TopBarGallery title={title}/>
                <img className='p-1 w-full h-8/11 object-scale-down' src={content[index].src} alt={content[index].alt}/>
                <div className={`relative -bottom-9 sm:bottom-3 flex-1 flex justify-between items-center`}>
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