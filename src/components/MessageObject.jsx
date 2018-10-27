import React, { Component } from 'react';
// import Nav from './nav.jsx';
// import { Router } from '@reach/router';

class MessageObject extends Component {
    state = {
        msg: ''
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="msg">Message: </label>
                    <input onChange={this.handleChange} type="text" id="msg" />
                    <br></br><br></br>
                    <button>Send Message</button>
                </form>
            </div>
        );
    };

    handleSubmit = (event) => {
        console.log('submitted');
        event.preventDefault();
        this.setState({
            msg: ''
        });
    };

    handleChange = (e) => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        });
    };
};

export default MessageObject;

