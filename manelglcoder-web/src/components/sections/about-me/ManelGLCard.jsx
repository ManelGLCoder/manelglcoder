import { memo } from 'react'
import MyPhoto from '../../../assets/Manel2026.jpg'
import SoftSkills from './SoftSkills'
import Skills from './Skills'
import { TITLE_CARD, BG_CARD, TEXT_SUB_TITLE, TEXT_NORMAL } from '../../../utilities'

const ManelGLCard = () =>{
    return(
        <div className={`flex flex-col mx-4 my-4 gap-1 ${BG_CARD}`}>
            <span className={TITLE_CARD}>MANEL GISBERT LÓPEZ</span>
            <section className="relative -top-4 flex justify-center items-center">
                <img className='p-7 object-cover w-1/5' src={MyPhoto} alt="Manel Photo"/>
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