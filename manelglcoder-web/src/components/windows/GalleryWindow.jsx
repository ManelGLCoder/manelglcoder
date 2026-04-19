import { useState } from 'react';
import TopBarWindow from '../TopBars/TopBarWindow';

const GalleryWindow = ({title,content}) =>{
    //TODO: Añadir e implementar botones para cambiar de img y arreglar img que no muestra img
    const [currImg, setCurrImg] = useState(content[0])
    const nextImg = () =>{}
    const prevImg = () =>{}
    console.log('currImg: ',currImg)
    return(
        <section className={`absolute left-10 top-15 flex flex-col min-h-2/3 min-w-2xl max-w-1/3 max-h-2/3 bg-amber-300`}>
                <TopBarWindow title={title}/>
                <img className='p-1 object-cover' src={currImg.src} alt={currImg.alt}/>
            </section>
    )
}

export default GalleryWindow