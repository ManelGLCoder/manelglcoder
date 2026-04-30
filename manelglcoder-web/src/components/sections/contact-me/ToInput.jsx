import { TITLE_CARD, BG_CARD} from "../../../utilities/classname_utilities"

const ToInput = () =>{
    return(
        <div className={`flex flex-col p-1 min-h-xl ${BG_CARD}`}>
            <span className={`${TITLE_CARD}`}>Para:</span>
            <span className="relative -top-2 mx-2 text-color_semibold font-semibold"> ManelGLCoder</span>
        </div>
    )
}

export default ToInput