import "./intro.css"
import video from "./pexels-fl-studio-3094026-3840x2160-30fps.mp4"

function Intro() {
    return (
        <>
            <video controlsList="nodownload" loop src={video} autoPlay type="video/mp4">
                Tu navegador no soporta la etiqueta de video.
            </video>

        </>
    )
}

export default Intro;