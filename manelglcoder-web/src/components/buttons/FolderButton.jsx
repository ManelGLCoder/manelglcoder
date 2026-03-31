import { useState } from 'react';
import folderIcon from '../../assets/Icons/Carpeta.svg'
import hoverFolderIcon from '../../assets/Icons/Carpeta_mouse_over.svg'

const FolderButton = ({name, row, col}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`row-start-${row} col-start-${col} flex flex-col justify-center items-center p-2
        rounded-2xl hover:bg-red-light-logo/25`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-15' 
            src={over ? hoverFolderIcon : folderIcon}
            alt="Folder Icon" />
            <span className=' text-button-text'>{name}</span>
        </button>
    )
}

export default FolderButton