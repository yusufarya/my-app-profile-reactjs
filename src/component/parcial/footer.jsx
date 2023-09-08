
const Footer = (props) => {
    return (
        <>
        <div className="flex justify-center">
            <hr className="w-12/12 lg:w-2/3 md:w-2/3 sm:w-2/3 h-19 py-3" />
        </div>
        <div className="flex justify-start rounded-lg mx-auto w-12/12 lg:w-2/3 md:w-2/3 sm:w-2/3 h-19 py-5">
            <div className="grid-rows-2 mx-5 px-1">
                <div className="flex lg:gap-8 md:gap-7 sm:gap-6 gap-4 my-5 Font-PublicSans-Regular text-gray-900 dark:text-slate-300 ">
                    <span>Base</span>
                    <span>Bookmark</span>
                    <span>Contact me</span>
                </div>
                <div>
                    <span className="font-sans font-semibold text-gray-900 dark:text-slate-200">&copy; 2022 - 2023 Yusuf Aryadilla</span>
                </div>
            </div>
        </div>
        <br />
        {props.deviceType == 'Mobile' && 
        <>
        <br />
        <br />
        </>
        }
        </>
    )
}

export default Footer