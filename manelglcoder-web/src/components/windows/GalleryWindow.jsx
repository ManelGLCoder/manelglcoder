import { useState } from 'react';
import TopBarWindow from '../TopBars/TopBarWindow';

import PrevIcon from '../../assets/Icons/prev_icon.svg'
import NextIcon from '../../assets/Icons/next_icon.svg'
import { BUTTON_STYLE, BG_CARD, TEXT_TITLE } from '../../utilities/classname_utilities';

const GalleryWindow = ({title,content}) =>{
    const [index, setIndex] = useState(0)
    const nextImg = () =>{setIndex((index + 1)% content.length)}
    const prevImg = () =>{
        const prevIndex = index - 1
        setIndex(prevIndex < 0? content.length - 1 : prevIndex)
    }
    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-2/4 min-w-2xl max-w-1/3 max-h-2/4
        border-2 border-red-dark-logo bg-desktop`}>
                <TopBarWindow title={title}/>
                <img className='p-1 object-cover' src={content[index].src} alt={content[index].alt}/>
                <div className={`relative -top-5 flex justify-between items-center`}>
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