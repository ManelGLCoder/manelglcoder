import ProfessionalCard from '../sections/professional/ProfessionalCard';
import ProjectCard from '../sections/latest-projects/ProjectCard';
import TopBarWindow from '../../TopBars/TopBarWindow';
import { MOBILE_WINDOW_CLASS } from '../../../utilities/classname_utilities';

const FolderWindow = ({title,content, category}) =>{
    return(
        <section className={MOBILE_WINDOW_CLASS}>
                <TopBarWindow title={title}/>
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