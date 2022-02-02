import { useState } from "react"
import ContactMap from "../ContactMap"
import "./style.css"
const Contact = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 800px)"))

    function smallScreen(mediaQuery) {
        if (mediaQuery.matches) { 
            setIsSmallScreen(true)
            console.log("Works")
        } else {
            setIsSmallScreen(false)    
        }
      }
      
  var mediaQuery = window.matchMedia("(max-width: 800px)")
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
                <div className="info">Email: <span>vasileschipor98@gmail.com</span></div>
                <div className="info">Phone number: <span>07488888899</span></div>
                <div className="info">Location: <span>Romania, Cluj-napoca</span></div>
            </div>
            </div>
        </section>
    )
}

export default Contact
