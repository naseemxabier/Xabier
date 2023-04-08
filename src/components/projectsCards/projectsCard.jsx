import { Link } from "react-router-dom";
import "./projectsCards.css"
import goku from "./goku.jpg"
import ideals from "./ideals.png"
import trackMate from "./paquete.jpg"
import gym from "./gym.jpg"


function projectsCard() {
    return (

        <>
            <section id="projects">
                <h1 className="proyectos mx-auto">PROJECTS</h1>
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                            <img className="card_image" src={goku} alt="goku"></img>
                            <div className="card_content" style={{ textAlign: 'center' }}>
                                <h2 className="card_title">DragonBall Jump</h2> <br></br>
                                <p className="card_text">Jump over the sky, as high as you can!</p>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button className="btn card_btn mt-2">
                                        <Link to="https://github.com/naseemxabier/dragonBall-Jump">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                                            </svg>
                                        </Link>
                                    </button>
                                    <button className="btn card_btn mt-2">
                                        <Link to="https://eogimenez.github.io/dragonBall-Jump/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}>
                                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <img className="card_image" src={ideals} alt="ideals"></img>
                            <div className="card_content" style={{ textAlign: 'center' }}>
                                <h2 className="card_title">Ideals</h2> <br></br>
                                <p className="card_text">Intelligent deals all over the world</p>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button className="btn card_btn mt-2">
                                        <Link to="https://github.com/naseemxabier/iDeals">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                                            </svg>
                                        </Link>
                                    </button>
                                    <button className="btn card_btn mt-2">
                                        <Link to="https://project-ideals.fly.dev/">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}>
                                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                                            </svg>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <img className="card_image" src={trackMate} alt="trackMate"></img>
                            <div className="card_content" style={{ textAlign: 'center' }}>
                                <h2 className="card_title">TrackMate</h2> <br></br>
                                <p className="card_text">Track your package at real time</p>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                <button className="btn card_btn mt-2">
                                    <Link to="https://github.com/naseemxabier/TrackMate-client">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                                        </svg>
                                    </Link>
                                </button>
                                <button className="btn card_btn mt-2">
                                    <Link to="https://trackmateclient.netlify.app/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}>
                                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                                        </svg>
                                    </Link>
                                </button>
                                </div> 
                            </div>
                        </div>
                    </li>
                    <li className="cards_item">
                        <div className="card">
                            <img className="card_image" src={gym} alt="gym"></img>
                            <div className="card_content" style={{ textAlign: 'center' }}>
                                <h2 className="card_title">Gymscanner</h2> <br></br>
                                <p className="card_text">Select the best gym!</p>
                                <p className="card_text">In progress...</p>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                <button className="btn card_btn mt-2">
                                    <Link to="https://github.com/naseemxabier/Gymscanner-client">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                                        </svg>
                                    </Link>
                                </button>
                                {/* <button className="btn card_btn mt-2">
                                    <Link to="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: "msFilter" }}>
                                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                                        </svg>
                                    </Link>
                                </button> */}
                                </div> 
                            </div>
                        </div>
                    </li>

                </ul>
            </section>

        </>
    )

}

export default projectsCard;