import { useState } from 'react';
import { TEXT_BUTTON } from '../../../utilities/classname_utilities';

const MobileButton = ({name, icon}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`flex flex-1 flex-col justify-center items-center p-2
        rounded-2xl ${over? 'bg-red-light-logo/25' : ''}`}
        onClick={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-10' 
            src={icon}
            alt="Button Icon" />
            <span className={TEXT_BUTTON}>{name}</span>
        </button>
    )
}

export default MobileButton