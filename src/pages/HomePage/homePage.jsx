import Navbar from "../../components/navbar/navbar";
import Projects from "../../components/projectsCards/projectsCard"
import About from "../../components/about/about"
import Skills from "../../components/skills/skills"
import Footer from "../../components/footer/footer"

function HomePage() {
    return (
        <>
        <section id="home">
                <Navbar />
                <About />
                <Skills/>
                <Projects />
                <Footer />
        </section>
     

        </>

    )
}

export default HomePage;