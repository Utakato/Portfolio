import "./style.css"
import { useEffect } from "react";

const Modal = ({showModal, project, handleClose}) => {
    
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    
    const handleClick = (link) => () => {window.open(link)}

    const handleBgClick = (e) => { 
        const modalContent = document.querySelector(".modal-content")
        const clickedOutsideModal = e.target.firstChild.className === modalContent.className 
        
        if (clickedOutsideModal){
            handleClose()
        }
    }

        
    useEffect(()=> {
        showModal ? document.body.classList.add("overflowHidden") : document.body.classList.remove("overflowHidden")
    }, [showModal]) // locks scrolling on background while modal is open

    return (
        <div className={showHideClassName} onClick={handleBgClick}>
            <div className="modal-content">
               <h1>{project.name}</h1>
                <div className="tech-stack">
                    <div className="front-stack">
                        <h3>Front-end:</h3>
                        <div className="stack">
                            {project.frontEndStack.map(item => {
                                return <div className="tech-item">{item}</div>
                            })}
                        </div>
                    </div>
                    <div className="back-stack">
                        <h3>Back-end:</h3>
                        <div className="stack">
                            {project.backEndStack.map(item => {
                                return <div className="tech-item">{item}</div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="details">
                    <h3>Details:</h3>
                    <pre className="details-text">
                        {project.details}
                    </pre>
                    
                </div>
                <div className="modal-links">
                    <div className="buttons-wrapper-modal">
                        <div className="button" id="live" onClick={handleClick(project.live)}>Live</div>
                        <div className="button" onClick={handleClick(project.github)}>Code</div>
                    </div>
                    <div className="button close" onClick={handleClose}>Close</div>
                </div>
            </div>
        </div>
    )
}

export default Modal