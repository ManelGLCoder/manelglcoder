import { TITLE_CARD, BG_CARD, TEXT_NORMAL, MOBILE_CARD_CLASS} from "../../../../utilities/classname_utilities"

const ToInput = () =>{
    return(
        <div className={`${MOBILE_CARD_CLASS} ${BG_CARD}`}>
            <span className={`${TITLE_CARD}`}>Para:</span>
            <span className={`relative -top-2 mx-2 ${TEXT_NORMAL}`}> ManelGLCoder</span>
        </div>
    )
}

export default ToInput