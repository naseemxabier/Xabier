import Navbar from "../../components/navbar";
import Projects from "../../components/projectsCards/projectsCard"
import About from "../../components/about/about"

function HomePage() {
    return (
        <>
            <Navbar />
            <About/>
           <Projects/>

        </>

    )
}

export default HomePage;