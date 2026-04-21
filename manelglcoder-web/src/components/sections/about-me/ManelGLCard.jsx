import TmpICon from '../../../assets/Icons/gallery_icon.svg'

import KeyPersonalityTraits from './KeyPersonalityTraits'
import SoftSkills from './SoftSkills'
import SkillsCard from './SkillsCard'

const ManelGLCard = () =>{
    return(
        <div className="flex flex-col mx-2 gap-1 bg-amber-500">
            <span className="text-center bg-topbar font-bold">MANEL GISBERT LÓPEZ</span>
            <section className="flex justify-center my-2 items-center">
                <img className='p-1 size-40' src={TmpICon} alt="Manel Photo"/>
                <div className="flex flex-1 flex-col gap-2 mx-2">
                    <span className=''>Un desarrollador de videojuegos y webs nacido y viviendo en Barcelona, España</span>
                    <div className='flex gap-1'>
                        <KeyPersonalityTraits/>
                        <SoftSkills/>
                        <SkillsCard/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ManelGLCard