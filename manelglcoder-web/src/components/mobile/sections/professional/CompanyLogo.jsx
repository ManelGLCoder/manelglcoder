
const CompanyLogo = ({logo}) =>{
    return(
        <div className='flex-1 m-2 self-center'>
            <img className='p-1 object-cover' src={logo} alt="Logo Empresa"/>
        </div>
    )
}

export default CompanyLogo