import { useState } from "react"
import ContactMap from "../ContactMap"
import "./style.css"
const Contact = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 800px)").matches)

    function smallScreen(mediaQuery) {
        mediaQuery.matches ? setIsSmallScreen(true) : setIsSmallScreen(false)
    }
      
    let mediaQuery = window.matchMedia("(max-width: 800px)")
    mediaQuery.addEventListener("change",smallScreen)

    return (
        <section className="contact">
            <h1>Contact</h1>
            <div className="wrapper">
            {!isSmallScreen && 
                <div className="map">
                    <ContactMap />
                </div>}

                <div className="contact-info">
                    <div className="info">Phone: <span><a href="tel:+40748899339">+40 748 899 339</a></span></div>
                    <div className="info">Email: <span>contact@vasileschipor.com</span></div>
                    <div className="info">Location: <span>Romania, Cluj-napoca</span></div>
                </div>
            </div>
        </section>
    )
}

export default Contact