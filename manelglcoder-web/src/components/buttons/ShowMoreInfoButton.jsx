import MoreIcon from '../../assets/Icons/more_icon.svg'
import LessIcon from '../../assets/Icons/less_icon.svg'

import { BUTTON_STYLE } from '../../utilities/classname_utilities'

const ShowMoreInfoButton = ({click, showMoreInfo}) =>{

    return(
        <button 
        className={`relative -top-1 self-center ${BUTTON_STYLE}`}
        onClick={click}>
            <span>{showMoreInfo? 'Menos Info' : 'Más Info'}</span>
            <img className='size-7' src={showMoreInfo ? LessIcon : MoreIcon} alt="Expand Icon" />
        </button>
    )
}

export default ShowMoreInfoButton