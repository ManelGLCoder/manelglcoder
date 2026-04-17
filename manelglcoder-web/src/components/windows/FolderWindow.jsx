
import { useState } from 'react';
import closeIcon from '../../assets/Icons/Close.svg'
import hoverCloseIcon from '../../assets/Icons/Close_over.svg'

import ProfessionalCard from '../sections/professional/ProfessionalCard';
import ProjectCard from '../sections/latest-projects/ProjectCard';

const FolderWindow = ({title,content, category}) =>{
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
                    {
                        content.map((element, i)=>{
                            switch (category){
                                case 'professional':
                                    return(<ProfessionalCard key={i} info={element}/>)
                                case 'project':
                                    return(<ProjectCard key={i} info={element}/>)
                            }
                            
                        })
                    }
                </div>
            </section>
    )
}

export default FolderWindow