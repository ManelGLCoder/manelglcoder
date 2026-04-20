import { useState } from 'react';
import TopBarWindow from '../TopBars/TopBarWindow';

import PrevIcon from '../../assets/Icons/prev_icon.svg'
import NextIcon from '../../assets/Icons/next_icon.svg'

const GalleryWindow = ({title,content}) =>{
    const [index, setIndex] = useState(0)
    const nextImg = () =>{setIndex((index + 1)% content.length)}
    const prevImg = () =>{
        const prevIndex = index - 1
        setIndex(prevIndex < 0? content.length - 1 : prevIndex)
    }
    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-2/4 min-w-2xl max-w-1/3 max-h-2/4 bg-amber-300`}>
                <TopBarWindow title={title}/>
                <img className='p-1 object-cover' src={content[index].src} alt={content[index].alt}/>
                <div className='flex justify-between items-center bg-amber-700'>
                    <button className='flex-1 flex justify-center bg-violet-800 hover:bg-violet-300' onClick={prevImg}>
                        <img className='size-10' src={PrevIcon} alt="Prev Icon" />
                    </button>
                    <span className='mx-4 text-2xl'>{` ${index + 1} - ${content.length}`}</span>
                    <button className='flex-1 flex justify-center bg-violet-800 hover:bg-violet-300' onClick={nextImg}>
                        <img className='size-10' src={NextIcon} alt="Next Icon" />
                    </button>
                </div>
            </section>
    )
}

export default GalleryWindow