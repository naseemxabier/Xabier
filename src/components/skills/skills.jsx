import "./skills.css"
import javascript from "./javascript.png"
import html from "./hmtl5.png"
import css from "./css3.png"
import node from "./nodejs.png"
import mongo from "./mongodb.png"
import react from "./react.png"
import python from "./python.png"
import django from "./django.png"

function Skills() {
    return (
        <>
            <section id="skills">
                <h1 id="tech">TECH SKILLS</h1>
                <div className="container">
                    <div className="skill">
                        <img src={javascript} alt="JavaScript" />
                        <p>JavaScript (ES6)</p>
                    </div>
                    <div className="skill">
                        <img src={python} alt="Python" />
                        <p>Python</p>
                    </div>
                    <div className="skill">
                        <img src={html} alt="HTML5" />
                        <p>HTML5</p>
                    </div>
                    <div className="skill">
                        <img src={css} alt="CSS3" />
                        <p>CSS3</p>
                    </div>
                    <div className="skill">
                        <img src={react} alt="React" />
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <img src={node} alt="NodeJS" />
                        <p>NodeJS</p>
                    </div>
                    <div className="skill">
                        <img src={django} alt="Django" />
                        <p>Django</p>
                    </div>
                    <div className="skill">
                        <img src={mongo} alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Skills;
