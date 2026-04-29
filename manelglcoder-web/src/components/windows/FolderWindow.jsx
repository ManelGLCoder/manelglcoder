import ProfessionalCard from '../sections/professional/ProfessionalCard';
import ProjectCard from '../sections/latest-projects/ProjectCard';
import TopBarWindow from '../TopBars/TopBarWindow';

const FolderWindow = ({title,content, category}) =>{
    return(
        <section className={`absolute right-10 top-15 flex flex-col 
        min-h-2/3 min-w-2xl max-w-1/3 max-h-2/3 border-2
        border-red-dark-logo bg-desktop`}>
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