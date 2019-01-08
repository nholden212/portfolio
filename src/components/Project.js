import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0
        }
    }

    slideToTheLeft = () => {
        if(this.state.i === 0){
            this.setState({ i: this.props.images.length - 1 });
        } else {
            this.setState({ i: this.state.i - 1 });
        }
    }

    slideToTheRight = () => {
        if(this.state.i === this.props.images.length - 1){
            this.setState({ i: 0 })
        } else {
            this.setState({ i: this.state.i + 1});
        }
    }
  
    render() {
        return (
            <div className="Project">
                <h3 className="ProjectTitle">{this.props.title}</h3>
                <p className="ProjectDescription">{this.props.description}</p>
                
                <div className="ProjectSlideshow">
                    <button onClick={this.slideToTheLeft}>Back</button>
                    <button onClick={this.slideToTheRight}>Forward</button>
                    <div className="imgContainer">
                        <img
                            src={this.props.images[this.state.i]}
                            alt={this.props.images[this.state.i].alt}>
                        </img>
                    </div>
                </div>
                
                <h5 className="ProjectURL">
                    Check out the deployed project <a href={this.props.deployedURL} target="_blank">here</a>
                </h5>
                
                <h5 className="ProjectURL">
                    Check out the code on Github <a href={this.props.gitHubURL} target="_blank">here</a>
                </h5>
            </div>
        );
    }
}

export default Project;
