import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import "./homePage.css"
import goku from "./goku.jpg"
import ideals from "./ideals.png"
import trackMate from "./paquete.webp"

function HomePage() {
    return (
        <>
            <Navbar />
            <div className="card ms-5 mt-5">
                <div className="img" src={goku} alt="imagen"></div>
                <span>DragonBall Jump</span>
                <p className="info">Jump over the universe!</p>
                <div className="share">
                    <Link to="https://github.com/naseemxabier/dragonBall-Jump">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                        </svg>
                    </Link>
                </div>
                <Link  type="button" className="mx-auto btn btn-ligth" to="/projects/dragonBall">Get more details!</Link>
            </div>

        </>

    )
}

export default HomePage;