const ProjectSplashScreen = ({imgInfo}) =>{
const {src, alt} = imgInfo
    return(
        <img className='p-1 object-cover' src={src} alt={alt}/>
    )
}

export default ProjectSplashScreen