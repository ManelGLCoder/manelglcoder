
const HorizontalLineSeparator = ({color='border-red-light-logo'}) =>{
    return(
        <div className="relative mx-2 py-4">
            <div className={`w-full border-b ${color}`}></div>
        </div>
    )
}

export default HorizontalLineSeparator