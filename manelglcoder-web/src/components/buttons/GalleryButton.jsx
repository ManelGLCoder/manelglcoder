import { useContext } from 'react'
import GalleryIcon from '../../assets/Icons/gallery_icon.svg'
import { BUTTON_STYLE } from '../../utilities/classname_utilities'
import IconSized from '../generic/IconSized'
import TextCenteredWithIcon from '../generic/TextCenteredWidthIcon'
import GalleryWindow from '../windows/GalleryWindow'
import { GalleryContext } from '../../contexts/GalleryContext'

const GalleryButton = ({galleryInfo}) =>{
    const {setVisible, setContent} = useContext(GalleryContext)
    const handleGallery = () =>{
        setVisible(true)
        setContent(galleryInfo)
    }
    return(
        <button 
        className={BUTTON_STYLE}
        onClick={handleGallery}
        >
            <IconSized src={GalleryIcon} alt='Gallery Icon'/>
            <TextCenteredWithIcon text={'GALERÍA'}/>
        </button>
    )
}

export default GalleryButton