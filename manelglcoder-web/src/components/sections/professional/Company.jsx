import DateIcon from '../../../assets/Icons/hover_date_icon.svg'
import CompanyLogo from './CompanyLogo'
import IconWithTextCentered from '../../generic/IconWithTextCentered'
import { TEXT_NORMAL, TEXT_SUB_TITLE } from '../../../utilities/classname_utilities'

const Company = ({logo, period, companyDes}) =>{
    const dateIcon = {src:DateIcon, alt:'Date Icon'}
    const dateText = {text:period, classTextData:TEXT_SUB_TITLE}
    return(
        <div className='flex gap-2'>
            <CompanyLogo logo={logo}/>
            <div className='flex flex-col'>
                <IconWithTextCentered iconData={dateIcon} textData={dateText}/>
                <p className={TEXT_NORMAL}>{companyDes}</p>
            </div>
        </div>
    )
}

export default Company