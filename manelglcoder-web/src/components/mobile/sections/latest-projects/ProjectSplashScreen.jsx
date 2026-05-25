const ProjectSplashScreen = ({imgInfo}) =>{
const {src, alt} = imgInfo
    return(
        <img className='p-1 object-scale-down sm:object-contain sm:size-110' src={src} alt={alt}/>
    )
}

export default ProjectSplashScreen