import logoHeader from './../assets/img/header/robot1.jpg'

function Home() {
    return (
        <>
            <div className="flex justify-center mx-5">
                <img src={logoHeader} alt="logo_header" className='overflow-y-scroll bg-cover bg-fixed bg-center' />
            </div>
        </>
    );
}

export default Home