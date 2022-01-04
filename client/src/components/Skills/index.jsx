import "./style.css"
import { observer} from "../../tools"
import { useEffect } from "react"
const Skills = () => {
    
    // Adds transition to cards.
    useEffect(() => {
        const cards = document.querySelectorAll(".card")
        cards.forEach(card => {
            observer.observe(card)
        })
        
    })

    return (
        <section className="skills">
            <h1>Skills</h1>
            <div className="wrapper">
                <div className="card">
                    <h3>Client-side</h3>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>
                <div className="card right">
                    <h3>Server-side</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills
