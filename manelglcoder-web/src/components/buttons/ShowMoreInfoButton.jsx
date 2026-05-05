import MoreIcon from '../../assets/Icons/more_icon.svg'
import LessIcon from '../../assets/Icons/less_icon.svg'

import { BUTTON_STYLE, ICON_SIZE, TEXT_CENTERED_WITH_ICON } from '../../utilities/classname_utilities'

const ShowMoreInfoButton = ({click, showMoreInfo}) =>{

    return(
        <button 
        className={`relative -top-1 self-center ${BUTTON_STYLE}`}
        onClick={click}>
            <img className={ICON_SIZE} src={showMoreInfo ? LessIcon : MoreIcon} alt="Expand Icon" />
            <span className={TEXT_CENTERED_WITH_ICON}>{showMoreInfo? 'Menos Info' : 'Más Info'}</span>
        </button>
    )
}

export default ShowMoreInfoButton