import { Component, useState } from "react"
import Modal from "../Modal"
import "./style.css"

class Project extends Component {
    constructor(){
        super();
        
        this.state={
            show : false
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);

    }
    closeModal(){
        this.setState({show : false});
    }
    openModal(){
        this.setState({show : true});
    }

    handleClick = (link) =>  () => window.open(link, "_blank")

    render() {
        return (
                    <div className="project">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/${this.props.project.imageName}`} alt="website-preview-image" />
                        <h3 className="project-name">{this.props.project.name}</h3>
                        <div className="buttons-wrapper">
                            <div className="button" onClick={this.openModal}>Details</div>    
                            <div className="button" onClick={this.handleClick(this.props.project.github)}>Code</div>
                            <div className="button" onClick={this.handleClick(this.props.project.live)}>Live</div>
                        </div>
                        <Modal showModal={this.state.show} project={this.props.project} handleClose={this.closeModal}/>
                    </div>    
                )
    }

}

// const Project = ({project}) => {
//     const [show, setShow] = useState(false)
    
//     const openModal = () => {
//         setShow(true)
//     }

//     const closeModal = () => {
//         this.setShow(false)
//     }



//     const handleClick = (link) =>  () => window.open(link, "_blank")
//     const handleDetails = () => () => {}

//     return (
//         <div className="project">
//             <img src={`${process.env.PUBLIC_URL}/assets/images/${project.imageName}`} alt="website-preview-image" />
//             <h3 className="project-name">{project.name}</h3>
//             <div className="buttons-wrapper">
//                 <div className="button" onClick={openModal}>Details</div>    
//                 <div className="button" onClick={handleClick(project.github)}>Code</div>
//                 <div className="button" onClick={handleClick(project.live)}>Live</div>
//             </div>
//             <Modal showModal={show} project={project} handleClose={closeModal}/>
//         </div>    
//     )

// }

export default Project
