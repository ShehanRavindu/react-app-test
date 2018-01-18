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
            <input type='button' value='Button' style={buttonStyle} />
        );
    }
}


export default Button;