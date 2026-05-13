import { useState } from 'react';
import TopBarWindow from '../../TopBars/TopBarWindow';

import PrevIcon from '../../../assets/Icons/prev_icon.svg'
import NextIcon from '../../../assets/Icons/next_icon.svg'
import { BUTTON_STYLE, BG_CARD, TEXT_TITLE } from '../../../utilities/classname_utilities';

const GalleryWindow = ({title,content}) =>{
    const [index, setIndex] = useState(0)
    const nextImg = () =>{setIndex((index + 1)% content.length)}
    const prevImg = () =>{
        const prevIndex = index - 1
        setIndex(prevIndex < 0? content.length - 1 : prevIndex)
    }
    return(
        <section className={`absolute top-11 flex flex-col w-full
                            border-2 border-red-dark-logo bg-window-bg`}>
                <TopBarWindow title={title}/>
                <div className='flex-1 flex sm:max-h-4/6  sm:items-center sm:justify-center'>
                    <img className='p-1 object-cover sm:max-w-3/7' src={content[index].src} alt={content[index].alt}/>
                </div>
                <div className={`flex justify-between items-center`}>
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