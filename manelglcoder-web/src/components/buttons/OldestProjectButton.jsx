import { useState } from 'react';
import trashIcon from '../../assets/Icons/Papelera.svg'
import trashHoverIcon from '../../assets/Icons/Papelera_mouse_over.svg'

const OldestProjectButton = ({name, row, col}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`row-start-${row} col-start-${col} flex flex-col justify-center items-center p-2
        rounded-2xl hover:bg-red-light-logo/25`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-15' 
            src={over ? trashHoverIcon : trashIcon}
            alt="Trash Can Icon" />
            <span className=' text-button-text'>{name}</span>
        </button>
    )
}

export default OldestProjectButton