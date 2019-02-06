import React, { Component } from 'react';
import {ActivityData} from './ActivityData.js'

export class ContentData extends React.Component {
    render() {
        const {activities} = this.props; // ES6 destructuring
        return (
            <div className="content">
                <div className="line"></div>

                {/* Timeline item */}
                {activities.map((activity, index) => {
                    return (<ActivityData key={index} activity={activity} />)
                })}
                
            </div>
        )
    }
}