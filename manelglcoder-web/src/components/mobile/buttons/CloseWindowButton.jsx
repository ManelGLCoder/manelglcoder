import closeIcon from '../../assets/Icons/Close.svg'

const CloseWindowButton = ({click}) =>{
    return(
        <button className={`flex flex-col justify-center items-center`}>
            <img className='size-8' 
            src={closeIcon}
            alt="Close Icon" />
        </button>
    )
}

export default CloseWindowButton