import React, { Component } from 'react';

import './css/Clock.css';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';

import {ClockFormat} from './ClockFormat';

export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            format: "normal", 
            time: this.getTime()
        };
        // NOTE:
        // We can start the timer here, but instead we are using a HOOK to
        // inject that functionality into the "cmponentDidMount" HOOK
        //this.setTimer();

        // IMPORTANT:
        // This is needed, iin orde to enable the use of "this" inside a callback function!!!
        this.updateFormat = this.updateFormat.bind(this);
    }

    componentDidMount() {
        this.timerID = this.setTimer();
        console.debug("Mounting clock...");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.debug("Unmounting clock...");
    }

    getTime() {
        const time = new Date();
        const result = {
            date: time,
            hours: time.getHours(), 
            minutes: time.getMinutes(), 
            seconds: time.getSeconds()
        };
        return result;
    }

    getTimeString(time) {

        // WE return different formats depending on the Format...
        let result = "";
        if (this.state.format == "extended") 
                result = time.date.toLocaleString();
        else if (this.state.format == "minimal") 
                result =    (time.hours == 0 ? 12 : (time.hours > 12) ? time.hours - 12 : time.hours) + ":" + 
                            (time.minutes > 9 ? time.minutes : `0${time.minutes}`);
        else if (this.state.format == "normal")    
                result =    (time.hours == 0 ? 12 : (time.hours > 12) ? time.hours - 12 : time.hours) + ":" + 
                            (time.minutes > 9 ? time.minutes : `0${time.minutes}`) + ":" + 
                            (time.seconds > 9 ? time.seconds : `0${time.seconds}`) + " " +
                            (time.hours >= 12 ? 'pm' : 'am');
        else result = "format not defined";
        return result;
    }

    updateFormat(newFormat) {
        this.setState({format: newFormat});
    }

    updateClock() {
        this.setState({time: this.getTime()});
    }

    setTimer() {
        setInterval(()=> this.updateClock(), 1000);
    }

    render() {
        const timeString = this.getTimeString(this.state.time);
        return(
            <div className="clock">
                <div className="header">
                    World clock
                    <i className="calendarLink fa fa-calendar"></i>
                    <ClockFormat onChange={this.updateFormat} />
                </div>
                <div className="content">
                    {timeString}
                </div>
            </div>
        );
    }
}