import { useState } from 'react';

import closeIcon from '../../assets/Icons/Close.svg'
import hoverCloseIcon from '../../assets/Icons/Close_over.svg'

const CloseWindowButton = ({click}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`flex flex-col justify-center items-center`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-8' 
            src={over ? hoverCloseIcon : closeIcon}
            alt="Close Icon" />
        </button>
    )
}

export default CloseWindowButton