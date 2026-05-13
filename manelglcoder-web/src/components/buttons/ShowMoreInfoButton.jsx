import MoreIcon from '../../assets/Icons/more_icon.svg'
import LessIcon from '../../assets/Icons/less_icon.svg'

import { BUTTON_STYLE } from '../../utilities/classname_utilities'
import IconWithTextCentered from '../generic/IconWithTextCentered'

const ShowMoreInfoButton = ({click, showMoreInfo}) =>{
    let iconSrc = showMoreInfo ? LessIcon : MoreIcon
    let text = showMoreInfo? 'Menos Info' : 'Más Info'
    const moreInfoIcon = { src:iconSrc, alt:'Expand Icon'}
    const moreInfoText = {text:text}
    return(
        <button
        className={`relative -top-1 self-center ${BUTTON_STYLE}`}
        onClick={click}>
            <IconWithTextCentered iconData={moreInfoIcon} textData={moreInfoText}/>
        </button>
    )
}

export default ShowMoreInfoButton