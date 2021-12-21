import "./style.css"

const About = () => {
    return (
        <section className="about">
            <h1>About me</h1>
            <h2>*actually explaining why I'm into programming</h2>
            <div className="wrapper">
                <div className="card">I've had this thirst for knowledge for quite some time now. When I was younger I learning new things( 3d modelling, 2d animations, Unity game engine ) and reading books on a broad spectrum of domains. Nowadays <span>learning new technologies</span> satisfies this thirst.</div>
                <div className="card" id="right">I was always passionate about building stuff. Ever since I was a small boy I loved building robots and machines with Lego's. This passion for building pushes me to be a <span>full-stack developer</span> so I can easily prototype any ideas I might have. </div>
                <div className="card">When I discovered that programming is about building things, and not just mindlessly writing lines of code, it was a <span>game changer</span> for me. Ever since I've been intrested in all areas of programming, from software arhitecture to building and deploying it.</div>
            </div>
        </section>
    )
}

export default About
