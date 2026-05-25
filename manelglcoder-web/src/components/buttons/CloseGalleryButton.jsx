import { useState, useContext } from 'react';
import closeIcon from '../../assets/Icons/Close.svg'
import hoverCloseIcon from '../../assets/Icons/Close_over.svg'
import { GalleryContext } from '../../contexts/GalleryContext';

const CloseGalleryButton = () =>{
    const [over, setOver] = useState(false);
    const {setVisible} = useContext(GalleryContext)
    const closeWindow = () =>{
        setVisible(false)
    }
    return(
        <button className={`flex flex-col justify-center items-center`}
        onClick={closeWindow}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-8' 
            src={over ? hoverCloseIcon : closeIcon}
            alt="Close Icon" />
        </button>
    )
}

export default CloseGalleryButton