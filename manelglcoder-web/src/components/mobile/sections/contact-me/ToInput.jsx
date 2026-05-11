import { TITLE_CARD, BG_CARD, TEXT_NORMAL} from "../../../utilities/classname_utilities"

const ToInput = () =>{
    return(
        <div className={`flex flex-col p-1 min-h-xl ${BG_CARD}`}>
            <span className={`${TITLE_CARD}`}>Para:</span>
            <span className={`relative -top-2 mx-2 ${TEXT_NORMAL}`}> ManelGLCoder</span>
        </div>
    )
}

export default ToInput