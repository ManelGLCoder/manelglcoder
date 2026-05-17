import { useContext } from 'react'
import { WindowContext } from '../../../contexts/WindowsContext'
import closeIcon from '../../assets/Icons/Close.svg'


const CloseWindowButton = () =>{
    const {setCurrWindow} = useContext(WindowContext)
    const closeWindow = () =>{
        setCurrWindow('none')
    }
    return(
        <button 
            className={`flex flex-col justify-center items-center`}
            onClick={closeWindow}
        >
            <img className='size-8' 
            src={closeIcon}
            alt="Close Icon" />
        </button>
    )
}

export default CloseWindowButton