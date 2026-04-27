import { useState } from 'react';

import linkIcon from '../../assets/Icons/link_icon.svg'
import hoverLinkIcon from '../../assets/Icons/hover_link_icon.svg'

const OpenLinkButton = ({click}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`flex flex-col justify-center items-center`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-6' 
            src={over ? hoverLinkIcon : linkIcon}
            alt="Open Link Icon" />
        </button>
    )
}

export default OpenLinkButton