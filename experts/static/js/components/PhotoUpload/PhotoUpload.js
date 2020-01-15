import React, { Component } from 'react';
import AvatarEditor from "react-avatar-editor";
import M from "materialize-css";
import ProfilePic from "../../../../../authentication/static/images/photo-camera.svg";
import "./PhotoUpload.scss";
import ProfileContext from "../../contexts/ProfileContext";

import HeadingText from "../HeadingText/HeadingText";
import Bar from '../Stepper/Bar';


export default class PhotoUpload extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.modalRef = React.createRef();
        this.inputRef = React.createRef();
        this.setEditorRef = this.setEditorRef.bind(this);
        this.handleBorderChange = this.handleBorderChange.bind(this);
        this.handleReset = this.handleReset.bind(this)
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            image: `/static/${ProfilePic}`,
            borderRadius: 0
        }
    }

    handleSave() {
        if(this.editor) {
            const canvas = this.editor.getImage()
            this.setState({
                image: canvas.toDataURL()
            })
            this.editorModal.close();
        }
    }

    handleChange(e) {
        const { handlePhotoChange } = this.context;
        let file = this.inputRef.current.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        handlePhotoChange(e.target.files)

        reader.onload = function() {
            this.setState({
                image: reader.result
            });
            this.editorModal = M.Modal.init(this.modalRef.current);
            this.editorModal.open();
        }.bind(this)

        reader.onerror = function() {
            alert("There was an error opening the file!");
        }
    }

    setEditorRef(editor) {
        this.editor = editor
    }

    handleReset() {
        this.setState({
            borderRadius: 0
        })
    }

    handleBorderChange(e) {
        this.setState({
            borderRadius: e.target.value
        })
    }

    render() {
        const { className,stepNumber, steps } = this.props;
        return (
            <div className={`PhotoUpload ${className}`}>
            <Bar division={steps - (stepNumber - 1)}/>
                <p className="text-muted pl-3 mt-2">Step { stepNumber }</p>
                <div className="container">
                <HeadingText>Upload your photo</HeadingText>
                <p className="text-muted">A photo builds trust with knowledge seekers.</p>
                <div className="ProfilePhoto my-5">
                    <input ref={this.inputRef} onChange={this.handleChange} id="profilePic" type="file" style={{display: "none"}}/>
                    <label style={{
                        borderRadius: this.state.borderRadius
                    }} htmlFor="profilePic">
                    <img style={{
                        borderRadius: this.state.borderRadius
                    }} src={this.state.image} alt="profile-pic"/>
                    </label>
                </div>
                </div>
                {/* Modal */}
                <div className="modal" ref={this.modalRef}>
                    <div className="modal-header">

                    </div>
                    <div className="modal-content grey-bg text-center">
                        <AvatarEditor
                            ref={this.setEditorRef}
                            image={this.state.image}
                            borderRadius={this.state.borderRadius}
                        />
                        <p className="range-field">
                            <input type="range" value={this.state.borderRadius} onChange={this.handleBorderChange} min={0} max={100}/>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.handleReset} className="btn btn-reset mr-2">Reset</button>
                        <button onClick={this.handleSave} className="btn btn-signUp">Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

PhotoUpload.contextType = ProfileContext