import React from "react";
import M from "materialize-css";
import FloatingButton from "../FloatingButton/FloatingButton";
import FilterList from "../FilterList/FilterList";
import "./ExperienceInfoCard.scss";

let modalRef = React.createRef();

class ExperienceInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            experience: {
                sectors: []
            }
        }
    }

    handleEditChange = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleClick = () => {
        this.instance = M.Modal.init(modalRef.current);
        this.instance.open();
    }

    handleClose = () => {
        this.instance.close();
    }
    
    render() {
        const { edit } = this.state;
        const { experience, allowEdit, onDelete } = this.props;
        return (
            <div className="ExperienceInfoCard p-2">
                <div className="col m3">
                    <img src={experience.image} alt="image"/>
                </div>
                <div className="col m9">
                    <p className="text-muted mb-1 company">{edit ? <input style={{
                        width: "25rem"
                    }} className="search-input col s12" placeholder="Company"/> : experience.company} { allowEdit && 
                    <span className="controls">
                        <i onClick={this.handleEditChange} className="material-icons mr-5">create</i>
                        <i onClick={() => onDelete(experience.id)} className="material-icons">delete</i>
                    </span>
                    }</p>
                    <p className="title-text mb-2">{edit ? <input className="search-input" placeholder="Position held"/> : experience.position}</p>
                    <div>
                        <FilterList showClose={edit} filters={experience.filters}/>
                        {edit && <FloatingButton data-target="#addModal" onClick={this.handleClick} icon="add"/>}    
                    </div>
                    <p className="text-muted mt-2 experience-duration">{edit ? <input style={{
                        width: "10rem"
                    }} className="search-input" placeholder="Eg. 2011-2014"/> : experience.duration}</p>
                </div>
                <div style={{
                    opacity: 0.2,
                    background: "rgba(0, 0, 0, 0.4)"
                }} id="addModal" className="modal" ref={modalRef}>
                    <div className="modal-content">
                        <input className="search-input" placeholder="Add New Sector"/>
                        <div className="text-center p-2">
                            <FloatingButton iconColor="black" color="white" onClick={this.handleClose} className="mr-2 add-button" icon="add"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperienceInfoCard;