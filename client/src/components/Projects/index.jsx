import "./style.css"
import * as projects from "./projects"
import Project from "../Project"
const Projects = () => {

    //TODO create new component with project - details and give it project.moonshot etc as props.
    //TODO Modal Component that will get called inside of project - details
    //TODO MODAL : Title , tech stack (FE, BE), About, What I learned??
    
    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="wrapper">
                {/* <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Sapiens.png`} alt="website-preview-image" />
                        <h3 className="project-name">Sapiens</h3>
                    <div className="buttons-wrapper">
                        <div className="button">Details</div>    
                        <div className="button">Code</div>
                        <div className="button">Live</div>
                    </div>
                </div> */}
                <Project project={projects.sapiens} />
                <Project project={projects.moonshots} />
                <Project project={projects.betterMeV2} />

            </div>
        </section>
    )
}

export default Projects
