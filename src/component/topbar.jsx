
import componentData from './component.json'

function Topbar() {
    
    const dataNavbar = componentData['navbar']
    console.log(dataNavbar)
    return(
        <>
        <div className="flex justify-center ">
            <div className="flex justify-center ring-2 ring-blue-50 w-1/2 h-14 rounded-md my-4 bg-gradient-to-r from-cyan-50 to-blue-50">
            {
                dataNavbar.map((data) => {
                    return(
                        <>
                            <a href='#' id={data['id']} className="font-sans font-semibold bg-sky-50 rounded mx-5 my-2 px-5 py-2 text-gray-950">{data['label']}</a>
                        </>
                    )

                })            
            }
            </div>
        </div>
        </>
    )
}

export default Topbar;
