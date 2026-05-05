import GalleryIcon from '../../assets/Icons/gallery_icon.svg'
import { BUTTON_STYLE, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from '../../utilities/classname_utilities'

const GalleryButton = ({galleryInfo}) =>{
    return(
        <button className={BUTTON_STYLE}>
            <img className={ICON_SIZE} src={GalleryIcon} alt="Gallery Icon" />
            <span className={TEXT_CENTERED_WITH_ICON}>GALERÍA</span>
        </button>
    )
}

export default GalleryButton