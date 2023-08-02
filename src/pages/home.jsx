import logoHeader from './../assets/img/header/robot1.jpg'

var sectionStyle = {
    width: "100%",
    height: "450px",
    display: "block",
    backgroundSize : 'cover',
    backgroundPosition : 'center',
    borderRadius: '8px',
    // backgroundAttachment: 'fixed',
    backgroundImage: `url(${ logoHeader })`
  };

function Home() {
    return (
        <>
            <div className="justify-center mx-5">
                {/* <img src={logoHeader} alt="logo_header" className='flex bg-cover bg-fixed bg-center' /> */}
                <div style={sectionStyle}>

                </div>
                <br/>
                <p className='flex justify-center'> See More ...</p>
                <p className='flex justify-center'> See More ...</p>
                <p className='flex justify-center'> See More ...</p>
                <p>lorem ipsum emet sadsa dsa safsdfdsg sdgsd gds sdg</p>
            </div>
        </>
    );
}

export default Home