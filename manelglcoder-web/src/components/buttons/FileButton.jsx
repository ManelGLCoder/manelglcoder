import { useState } from 'react';
import fileIcon from '../../assets/Icons/Documento.svg'
import fileHoverIcon from '../../assets/Icons/Documento_move_over.svg'

const FileButton = ({name, row, col}) =>{
    const [over, setOver] = useState(false);
    return(
        <button className={`row-start-${row} col-start-${col} flex flex-col justify-center items-center p-2
        rounded-2xl hover:bg-red-light-logo/25`}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}>
            <img className='size-15' 
            src={over ? fileHoverIcon : fileIcon}
            alt="File Icon" />
            <span className=' text-button-text'>{`${name}.txt`}</span>
        </button>
    )
}

export default FileButton