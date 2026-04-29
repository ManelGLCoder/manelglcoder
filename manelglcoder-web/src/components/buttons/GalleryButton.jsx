import GalleryIcon from '../../assets/Icons/gallery_icon.svg'
import { BUTTON_STYLE } from '../../utilities/classname_utilities'

const GalleryButton = ({galleryInfo}) =>{
    return(
        <button className={BUTTON_STYLE}>
            <img className='size-7' src={GalleryIcon} alt="Gallery Icon" />
            <span>GALERIA</span>
        </button>
    )
}

export default GalleryButton