import { useState, useContext } from 'react';
import { WindowContext } from '../../contexts/WindowsContext';
import { TEXT_BUTTON } from '../../utilities/classname_utilities';

const DesktopButton = ({name, icon, hoverIcon, keyClick}) =>{
    const [over, setOver] = useState(false);
    const {setCurrWindow} = useContext(WindowContext)
    const handleShowWindow = () =>{
        setCurrWindow(keyClick)
    }
    return(
        <button className={`flex flex-1 flex-col justify-center items-center p-2
        rounded-2xl hover:bg-red-light-logo/25`}
        onDoubleClick={handleShowWindow}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-15'
            src={over ? hoverIcon : icon}
            alt="Button Icon" />
            <span className={TEXT_BUTTON}>{name}</span>
        </button>
    )
}

export default DesktopButton
