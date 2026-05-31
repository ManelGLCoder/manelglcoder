import { memo } from 'react'
import DateIcon from '../../../../assets/Icons/hover_date_icon.svg'
import CompanyLogo from './CompanyLogo'
import { IconWithTextCentered } from '../../../generic'
import { TEXT_NORMAL, TEXT_SUB_TITLE } from '../../../../utilities'

const Company = ({logo, period, companyDes}) =>{
    const dateIcon = {src:DateIcon, alt:'Date Icon'}
    const dateText = {text:period, classTextData:TEXT_SUB_TITLE}
    return(
        <div className='flex  flex-col gap-2'>
            <div className='flex flex-col'>
                <IconWithTextCentered iconData={dateIcon} textData={dateText}/>
                <p className={TEXT_NORMAL}>{companyDes}</p>
            </div>
            <CompanyLogo logo={logo}/>
            
        </div>
    )
}

export default memo(Company)