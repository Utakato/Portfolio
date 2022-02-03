import { Component } from "react"
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

export default Project