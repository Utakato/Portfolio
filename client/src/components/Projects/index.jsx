import "./style.css"
const Projects = () => {
    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="wrapper">
                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Sapiens.png`} alt="website-preview-image" />
                    </div>
                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Moonshots.png`} alt="website-preview-image" />
                    </div>
                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Better-me-v2.png`} alt="website-preview-image" />
                    </div>
                {/* <div className="project">
                    <img src="" alt="website-preview-image" />
                    </div> */}
            </div>
        </section>
    )
}

export default Projects
