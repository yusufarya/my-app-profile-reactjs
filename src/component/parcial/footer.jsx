
const Footer = (props) => {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-b from-white to-white-500 rounded-lg mx-auto w-11/12 lg:w-2/3 h-19 py-5">
                <span className="font-mono">&copy; Yusuf Aryadilla</span>
            </div>
            {props.deviceType == 'Mobile' && ''}
        </>
    )
}

export default Footer