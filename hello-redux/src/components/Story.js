import React, { Component } from 'react';

import './Story.css';
import { ButtonInline } from './ButtonInline';

export class Story extends React.Component {
    render() {
        const {story} = this.props;
        const {onArchive} = this.props;
        const {columns} = this.props;
        return(
            <div className="story">
                <span style={{width: columns.title.width}}>
                    <a href={story.url}>{story.title}</a>
                </span>
                <span style={{width: columns.author.width}}>{story.author}</span>
                <span style={{width: columns.comments.width}}>{story.num_comments}</span>
                <span style={{width: columns.points.width}}>{story.points}</span>
                <ButtonInline objectID={story.objectID} clickFunction= {onArchive} >Archive</ButtonInline>
            </div>
        );
    }
}