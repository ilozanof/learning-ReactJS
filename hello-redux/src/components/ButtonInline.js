import React, { Component } from 'react';

import './ButtonInline.css';

export class ButtonInline extends React.Component {
    render() {
        const {objectID} = this.props;
        const {clickFunction} = this.props;
        console.log("ButtonINline component...");
        console.log(clickFunction);
        return(
            <button
                type="button"
                className="button-inline"
                onClick={() => {clickFunction(objectID)}}
            >
            {this.props.children}
            </button>
        );
    }
}