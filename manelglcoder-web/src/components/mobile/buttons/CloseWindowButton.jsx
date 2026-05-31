import { useContext } from 'react'
import { WindowContext } from '../../../contexts/WindowsContext'
import closeIcon from '../../../assets/Icons/Close.svg'


const CloseWindowButton = ({windowKey}) =>{
    const {closeWindow} = useContext(WindowContext)
    const handleClose = () =>{
        closeWindow(windowKey)
    }
    return(
        <button 
            className={`flex flex-col justify-center items-center`}
            onClick={handleClose}
        >
            <img className='size-8' 
            src={closeIcon}
            alt="Close Icon" />
        </button>
    )
}

export default CloseWindowButton