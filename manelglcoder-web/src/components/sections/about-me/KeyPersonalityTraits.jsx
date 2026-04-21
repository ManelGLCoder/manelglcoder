import { KEY_PERSONALITY_TRAITS_DATA } from "../../../dto/about_me_dto"

const KeyPersonalityTraits = () =>{
    return(
        <ul className="flex flex-col mx-4 min-w-fit list-disc">
            {
                KEY_PERSONALITY_TRAITS_DATA.map((key,i)=>{
                    return(<li key={i}>{key}</li>)
                })
            }
        </ul>
    )
}

export default KeyPersonalityTraits