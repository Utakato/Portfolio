import "./style.css"
const Hero = () => {
    
    setTimeout(() => {
        const left = document.querySelectorAll('h3')
        left.forEach(item => {
            item.classList.add('visible')
        })
    },500)

    return (
        <div className="hero">
            <h2>Hi, I'm Vasile.</h2>
            <h1>I'm a <span>web developer</span>.</h1>
            <h3 className="fade">*I'm passionate about building stuff</h3>
            <h3 className="fade rightH3">**I have a thirst for knowledge</h3>
        </div>
    )
}

export default Hero