const ProjectCategoryAndPeriod = ({info}) =>{
    const {category, period} = info
    return(
        <section className='flex gap-2 items-center'>
            <span className='p-1 max-w-fit border-2 font-bold'>{category}</span>
            <span className='font-bold'>{period}</span>
        </section>
    )
}

export default ProjectCategoryAndPeriod