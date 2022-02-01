import "./style.css"
import * as tools from "../../tools"

const Header = () => {
    
    const handleClick = (selector) => () => {
        const target = document.querySelector(selector)
        tools.SmoothScroll(target)
    }
    return (
        <header>
            <div className="logo" onClick={handleClick(".hero")}><span>Schipor</span> Vasile</div>
            <nav>
                <div className="item" onClick={handleClick(".skills")}>Skills</div>
                <div className="item" onClick={handleClick(".projects")}>Projects</div>
                <div className="item" onClick={handleClick(".about")}>About</div>
                <div className="item" onClick={handleClick(".contact")}>Contact</div>
            </nav>
        </header>
    )
}

export default Header
