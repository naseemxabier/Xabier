import "./intro.css"
import video from "./playa.mp4"

function Intro() {
    return (
        <>

            <div id="intro">
                <video controlsList="nodownload" loop src={video} autoPlay={true} muted type="video/mp4"></video>
                <div className="intro-text">
                    <h2>Technology is better when it brings people together</h2>
                    <p>Matt Mullenweg</p>
                </div>
                <div className="intro-btn">
                    <button>
                        <a href="./XabierNaseemEnglish.pdf" download>Download CV</a>
                    </button>
                </div>
            </div>




        </>
    )
}

export default Intro;