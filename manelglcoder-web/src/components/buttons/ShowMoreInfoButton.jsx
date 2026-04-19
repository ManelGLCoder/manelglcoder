import MoreIcon from '../../assets/Icons/more_icon.svg'
import LessIcon from '../../assets/Icons/less_icon.svg'

const ShowMoreInfoButton = ({click, showMoreInfo}) =>{

    return(
        <button 
        className='self-center flex max-w-fit my-1 p-1 justify-center items-center bg-blue-500 hover:bg-blue-300'
        onClick={click}>
            <span>{showMoreInfo? 'Menos Info' : 'Más Info'}</span>
            <img className='size-7' src={showMoreInfo ? LessIcon : MoreIcon} alt="Expand Icon" />
        </button>
    )
}

export default ShowMoreInfoButton