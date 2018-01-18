import React,{ Component } from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <span><b>{this.props.data.id}</b></span>
                <span>{this.props.data.name}</span>
            </li>
        );
    }
}

export default ListItem; 