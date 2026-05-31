import { useState, useContext } from 'react';
import { WindowContext } from '../../contexts/WindowsContext';
import closeIcon from '../../assets/Icons/Close.svg'
import hoverCloseIcon from '../../assets/Icons/Close_over.svg'

const CloseWindowButton = ({windowKey}) =>{
    const [over, setOver] = useState(false);
    const {closeWindow} = useContext(WindowContext)
    const handleClose = () =>{
        closeWindow(windowKey)
    }
    return(
        <button className={`flex flex-col justify-center items-center`}
        onClick={handleClose}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-8'
            src={over ? hoverCloseIcon : closeIcon}
            alt="Close Icon" />
        </button>
    )
}

export default CloseWindowButton
