import React, { Component } from 'react';

class Button extends React.Component {
    render(){
        let buttonStyle = {
            color : 'red',
            border : 'none',
            backgroundColor : '#bbbbbb',
            padding : '6px',
            fontSize : '20px',
        };

        return (
            <input type='button' value={this.props.name} style={buttonStyle} onClick={this.props.handler}/>
        );
    }
}


export default Button;