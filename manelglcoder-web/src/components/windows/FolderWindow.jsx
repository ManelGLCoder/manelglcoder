
import { useState } from 'react';
import closeIcon from '../../assets/Icons/Close.svg'
import hoverCloseIcon from '../../assets/Icons/Close_over.svg'

import ProfessionalCard from '../sections/professional/ProfessionalCard';

const FolderWindow = ({title,content}) =>{
    const [over, setOver] = useState(false);
    return(
        <section className={`absolute right-10 top-15 flex flex-col min-h-2/3 min-w-2xl max-w-1/3 max-h-2/3 bg-amber-300`}>
                <section className={`flex max-h-10 
                justify-between items-center text-red-dark-logo text-2xl bg-topbar`}>
                    <span className="mx-2 font-logo">{title}</span>
                    <button className={`flex flex-col justify-center items-center`}
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}>
                        <img className='size-8' 
                        src={over ? hoverCloseIcon : closeIcon}
                        alt="Close Icon" />
                    </button>
                </section>
                <div className='overflow-y-auto flex flex-col my-1 gap-2'>
                    <ProfessionalCard info={info3C}/>
                    <ProfessionalCard info={infoWS}/>
                </div>
            </section>
    )
}

export default FolderWindow

const info3C = {
    title: 'Desarrollo Web Slots - TRIPLE CHERRY',
    period: 'Feb 2023 - Sep 2024',
    companyDes: 'Triple Cherry es una empresa desarrolladora de slots de navegador para casinos online fundada en Valencia, España.',
    rol: 'Front-End Developer',
    tasks:['- Desarrollo de cliente de las slots','- Búsqueda y solución de bugs','- etc...']
}

const infoWS = {
    title: 'Desarrollo Sofware Slots - Win Systems',
    period: 'Jun - Dic 2022',
    companyDes: 'Win Systems es una empresa desarrolladora de slots físicas para casinos con sede en San Cugat Del Valles, España.',
    rol: 'Game Developer',
    tasks:['- Desarrollo de cliente de las slots','- Búsqueda y solución de bugs','- etc...']
}