import GalleryIcon from '../../assets/Icons/gallery_icon.svg'

const GalleryButton = ({galleryInfo}) =>{
    return(
        <button className='flex justify-center items-center max-w-fit p-1 gap-1 bg-red-500 hover:bg-red-300'>
            <img className='size-7' src={GalleryIcon} alt="Gallery Icon" />
            <span>GALERIA</span>
        </button>
    )
}

export default GalleryButton