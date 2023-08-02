import logoHeader from './../assets/img/header/robot1.jpg'

function Home() {
    return (
        <>
            <div className="flex justify-center mx-5">
                <img src={logoHeader} alt="logo_header" className='flex bg-cover bg-fixed bg-center' />
                <br/>
                <p className='flex justify-center'> See More ...</p>
            </div>
        </>
    );
}

export default Home