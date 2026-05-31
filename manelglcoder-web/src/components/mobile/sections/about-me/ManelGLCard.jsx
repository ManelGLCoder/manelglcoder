import { memo } from 'react'
import MyPhoto from '../../../../assets/Manel2026.jpg'

import SoftSkills from './SoftSkills'
import Skills from './Skills'
import { TITLE_CARD, BG_CARD, TEXT_SUB_TITLE, TEXT_NORMAL, MOBILE_CARD_CLASS } from '../../../../utilities/classname_utilities'

const ManelGLCard = () =>{
    return(
        <div className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={TITLE_CARD}>MANEL GISBERT LÓPEZ</span>
            <section className="relative -top-4 flex flex-col justify-center items-center">
                <img className='m-2 sm:m-0 p-1 sm:p-15 object-cover w-3/5' src={MyPhoto} alt="Manel Photo"/>
                <div className="flex flex-1 flex-col gap-2 mx-2">
                    <p className={`px-2 ${TEXT_NORMAL}`}>Me considero una persona <span className='text-color_bold'> extrovertida</span>
                        ,
                        <span className='text-color_bold'> positiva </span>
                        y
                        <span className='text-color_bold'> muy trabajadora</span>
                        . Me gusta planificar mis actividades, tanto profesioanles como de ocio. Soy muy
                        <span className='text-color_bold'> metódico</span>
                        , me gustan las cosas bien hechas por insignificante que sean. Me adapto a las diferentes
                        situaciones que se me presentan. El trabajo en equipo me atrae pero funciono de igual o mejor
                        manera en los trabajos individuales.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default memo(ManelGLCard)