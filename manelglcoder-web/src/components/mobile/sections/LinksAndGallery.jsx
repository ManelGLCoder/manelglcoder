import Links from "./Links"
import GalleryButton from "../../buttons/GalleryButton"

const LinksAndGallery = ({links, gallery}) =>{
    return(
        <div className='flex flex-wrap gap-2 justify-center items-center'>
            <Links links={links}/>
            <GalleryButton galleryInfo={gallery}/>
        </div>
    )
}

export default LinksAndGallery