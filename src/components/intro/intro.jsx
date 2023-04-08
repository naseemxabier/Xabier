import "./intro.css"
import video from "./playa.mp4"

function Intro() {
    return (
        <>

            <div id="intro" style={{ position: 'relative' }}>
                <video controlsList="nodownload" loop src={video} autoPlay={true} muted type="video/mp4" style={{ width: '100%' }}>
                    Video is not supported by your browser.
                </video>
                <div style={{ position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '1.5rem', borderRadius: '1rem' }}>
                    <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: "Montserrat" }}>IS A PLEASURE TO HAVE YOU HERE</h2> 
                </div>
                <div style={{ position: 'absolute', top: '49%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '1rem' }}>
                    <h2 style={{ color: '#fff', fontStyle: "italic", fontSize: '1.4rem', marginBottom: '1rem', fontFamily: "Montserrat" }}>Technology is better when it brings people together</h2>
                    <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0rem', fontFamily: "Montserrat" }}>Matt Mullenweg</p>
                </div>
                <div style={{ position: 'absolute', top: '68%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '1.5rem'}}>
                <button style={{color: '#fff', borderRadius: '40px', backgroundColor: 'black',}}>
                   <a href="./XabierNaseemEnglish.pdf" download style={{color: '#fff', textDecoration:'none'}}>Download CV</a>
                </button>
                </div>
                
            </div>



        </>
    )
}

export default Intro;