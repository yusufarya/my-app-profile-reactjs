
const Footer = (props) => {
    console.log(props.deviceType)
    return (
        <>
            <div className="flex justify-center bg-gradient-to-b from-blue-50 to-white shadow-sm shadow-black rounded-lg mx-auto w-11/12 lg:w-2/3 h-20 py-5">
                <span className="font-mono">&copy; Yusuf Aryadilla</span>
            </div>
            {props.deviceType == 'Mobile' &&
                <>
                    <br /><br /><hr />
                </>
            }
        </>
    )
}

export default Footer