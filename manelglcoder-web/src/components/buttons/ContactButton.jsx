import { useState } from 'react';
import contactIcon from '../../assets/Icons/Ordenador.svg'
import contactHoverIcon from '../../assets/Icons/Ordenador_mouse_over.svg'

const ContactButton = ({name, row, col}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`row-start-${row} col-start-${col} flex flex-col justify-center items-center p-2
        rounded-2xl hover:bg-red-light-logo/25`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-15' 
            src={over ? contactHoverIcon : contactIcon}
            alt="Contact Icon" />
            <span className=' text-button-text'>{name}</span>
        </button>
    )
}

export default ContactButton