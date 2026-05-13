import GalleryIcon from '../../assets/Icons/gallery_icon.svg'
import { BUTTON_STYLE } from '../../utilities/classname_utilities'
import IconSized from '../generic/IconSized'
import TextCenteredWithIcon from '../generic/TextCenteredWidthIcon'

const GalleryButton = ({galleryInfo}) =>{
    return(
        <button className={BUTTON_STYLE}>
            <IconSized src={GalleryIcon} alt='Gallery Icon'/>
            <TextCenteredWithIcon text={'GALERÍA'}/>
        </button>
    )
}

export default GalleryButton