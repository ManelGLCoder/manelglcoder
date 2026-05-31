
const CompanyLogo = ({logo}) =>{
    return(
        <div className='w-72 m-2'>
            <img className='p-1 object-cover' src={logo} alt="Logo Empresa"/>
        </div>
    )
}

export default CompanyLogo