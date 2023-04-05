import xabier from "./xabier.JPG"
import "./about.css"
import { Link } from "react-router-dom";



function About() {
    return (
        <>

            <div className="info">
                <img className="xabier" src={xabier} alt="xabier"></img>
                <div >
                    <h2 >Xabier Naseem Mohammad</h2> <br></br>
                    <p>Full Stack Web Developer & Biologist: Javascript (ES6) - Node.JS - Express - MongoDB - React - HTML5 & CSS3</p>
                    <div >
                    <button className="btn card_btn mt-2">
                        <Link to="https://github.com/naseemxabier?tab=repositories">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" classNameNameNameName="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                            </svg>
                        </Link>
                    </button>
                    <button className="btn card_btn mt-2">
                        <Link to="https://www.linkedin.com/in/xabier-naseem-mohammad/">
                            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                        </Link>
                    </button>
                    </div>
                    

                </div>
            </div>


        </>
    )
}

export default About;