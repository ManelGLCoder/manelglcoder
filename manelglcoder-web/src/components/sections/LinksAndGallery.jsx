import Links from "./Links"
import GalleryButton from "../buttons/GalleryButton"

const LinksAndGallery = ({links, gallery}) =>{
    return(
        <div className='flex gap-2 justify-start items-center'>
            <Links links={links}/>
            <GalleryButton galleryInfo={gallery}/>
        </div>
    )
}

export default LinksAndGallery