import xabier from "./xabier.JPG"
import "./about.css"
import { Link } from "react-router-dom";



function About() {
    return (
        <>
            
            <section id="about">
            <h1>ABOUT ME</h1>
                <div className="info">
                    <img className="xabier" src={xabier} alt="xabier"></img>
                    <div >
                        <h2 className="mb-3">Xabier Naseem Mohammad Naveira</h2>
                        <h4 className="mb-3">Full Stack Web Developer & Biologist</h4>
                        <p className="mb-4">
                        I am a biologist who recently completed a full-stack web development bootcamp at Ironhack. I am passionate about understanding the natural world and applying technology to solve complex problems. With my newfound skills in web development, I am excited to explore the intersection of biology and technology and contribute to the development of innovative solutions in these fields.
                        </p>
                        <p>Feel free to contact me clicking in the buttons below:</p>
                        <div className="button-container mb-5" style={{ display: "flex", justifyContent: "center" }}>
                            <button className="btn card_btn mt-2">
                                <Link to="https://github.com/naseemxabier?tab=repositories" target={"_blank" }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.29 6.533 5.47 7.59.4.074.546-.174.546-.387 0-.19-.007-.693-.01-1.36-2.225.483-2.695-1.072-2.695-1.072-.364-.924-.889-1.17-.889-1.17-.725-.495.056-.486.056-.486.803.056 1.225.825 1.225.825.714 1.226 1.872.87 2.33.665.072-.517.278-.87.506-1.07-1.78-.202-3.644-.89-3.644-3.965 0-.876.312-1.59.825-2.145-.083-.202-.36-1.015.078-2.117 0 0 .67-.215 2.2.82.638-.178 1.318-.266 2-.27.682.004 1.362.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.51.555.823 1.27.823 2.145 0 3.084-1.866 3.76-3.65 3.958.287.248.54.73.54 1.478 0 1.07-.01 1.937-.01 2.202 0 .215.145.465.55.386A10.154 10.154 0 0 0 16 8c0-4.418-3.582-8-8-8z" />
                                    </svg>
                                </Link>
                            </button>
                            <button className="btn card_btn mt-2">
                                <Link to="https://www.linkedin.com/in/xabier-naseem-mohammad/" target={"_blank" }>
                                    <svg className="logo" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                </Link>

                            </button>

                            {/* <button className="btn card_btn mt-2">
                                <Link to="https://www.youtube.com/watch?v=x-diuWzPqTU" target={"_blank" }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                                </svg>
                                </Link>
                            </button> */}
                            <button className="btn card_btn mt-2">
                                <Link to="https://api.whatsapp.com/send?phone=34605716158" target={"_blank" }>
                                    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="whats" width="20" height="20" fill="green">
                                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                                    </svg>
                                </Link>
                            </button>
                            <button className="btn card_btn mt-2">
                                <Link to="mailto:naseemxabier@gmail.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)", transform: " msFilter" }}>
                                        <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
                                    </svg>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
