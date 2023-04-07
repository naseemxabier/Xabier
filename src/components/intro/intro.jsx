import "./intro.css"
import video from "./pexels-fl-studio-3094026-3840x2160-30fps.mp4"

function Intro() {
    return (
        <>
        
                <div style={{ position: 'relative' }}>
                    <video controlsList="nodownload" loop src={video} autoPlay={true} muted type="video/mp4" style={{ width: '100%' }}>
                        Tu navegador no soporta el video.
                    </video>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.6)', padding: '2rem', borderRadius: '1rem' }}>
{/*                         <h2 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: "Montserrat" }}>Welcome to my world</h2> */}
                        <p style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '3rem', fontFamily: "Montserrat" }}>"Technology is better when it brings people together"{/* -MattMullenweg */}</p>
                    </div>
                </div>
            


        </>
    )
}

export default Intro;