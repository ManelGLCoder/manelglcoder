import { useState, useContext } from 'react';
import { TEXT_BUTTON } from '../../../utilities/classname_utilities';
import { WindowContext } from '../../../contexts/WindowsContext';

const MobileButton = ({name, icon, keyClick}) =>{
    const [over, setOver] = useState(false);
    const {setCurrWindow} = useContext(WindowContext)
    const handleShowWindow = () =>{
        setOver(true)
        setCurrWindow(keyClick)
    }
    return(
        <button className={`flex flex-1 flex-col justify-center items-center p-2
        rounded-2xl ${over? 'bg-red-light-logo/25' : ''}`}
        onClick={handleShowWindow}
        onMouseOut={() => setOver(false)}>
            <img className='size-10' 
            src={icon}
            alt="Button Icon" />
            <span className={TEXT_BUTTON}>{name}</span>
        </button>
    )
}

export default MobileButton