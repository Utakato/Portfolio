import "./style.css"
import * as tools from "../../tools"
import Navbar from "../Navbar"


const Header = () => {
    
    const handleClick = (selector) => () => {
        const target = document.querySelector(selector)
        tools.SmoothScroll(target)
    }

    return (
        <header>
            <div className="logo" onClick={handleClick(".hero")}><span>Schipor</span> Vasile</div>
            <Navbar />
        </header>
    )
}

export default Header
