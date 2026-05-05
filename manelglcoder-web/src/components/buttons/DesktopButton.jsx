import { useState } from 'react';
import { TEXT_BUTTON } from '../../utilities/classname_utilities';

const DesktopButton = ({name, icon, hoverIcon}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`flex flex-1 flex-col justify-center items-center p-2
        rounded-2xl hover:bg-red-light-logo/25`}
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