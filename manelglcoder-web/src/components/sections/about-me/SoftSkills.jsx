import { SOFT_SKILLS_DATA } from "../../../dto/about_me_dto"

const SoftSkills = () =>{
    return(
            <div className="flex flex-col mx-4 min-w-fit">
                <span className="font-bold">Soft Skils</span>
                <ul className="list-disc">
                    {
                        SOFT_SKILLS_DATA.map((key,i)=>{
                            return(<li key={i}>{key}</li>)
                        })
                    }
                </ul>
            </div>
        )
}

export default SoftSkills