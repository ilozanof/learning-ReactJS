import React, { Component } from 'react';

export class ClockFormat extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.change = this.change.bind(this);
    }

    change() {
        let format = document.querySelector('#clockFormat').value;
        console.debug("Selecting the format " + format);
        console.log(this.props);
        this.props.onChange(format);
    }

    render() {
        return(
           <form className="formatSelect">
            <select id="clockFormat" onChange={this.change}>
                <option value="normal">normal</option>
                <option value="extended">extended</option>
                <option value="minimal">minimal</option>
            </select>    
           </form> 
        );
    }
}