
const MoreInfo  = ({extraInfo}) =>{
    return(
        <section className="flex flex-1 flex-col gap-1">
            {
                extraInfo.map((element, i)=>{
                    return(
                    <>
                        <span key={i} className='font-bold' >{element.title}</span>
                        {
                            element.texts.map((text,i)=>{
                                return(<span key={i}>{text}</span>)
                            })
                        }
                        <br />
                    </>
                    )
                })
            }
        </section>
    )
}

export default MoreInfo