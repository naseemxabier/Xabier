import "./navbar.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
        
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <a href ="#home" className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About me</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="nav-link">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-link">Projects</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;