import React, { Component } from 'react';
import { Story } from './Story';
import store from '../store';
import './Stories.css';

import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';

const COLUMNS = {
    title: {
        label: 'Title',
        width: '40%',
      },
      author: {
        label: 'Author',
        width: '30%',
      },
      comments: {
        label: 'Comments',
        width: '10%',
      },
      points: {
        label: 'Points',
        width: '10%',
      },
      archive: {
        width: '10%',
      }
};

class Stories extends React.Component {

  constructor(props) {
    super(props);
    this.archiveStory = this.archiveStory.bind(this);
  }

    archiveStory(objectID) {
      alert('Arhiving the Story ' + objectID + ' !!');
      this.props.onArchive(objectID);
      //store.dispatch(doArchiveStory(objectID));
  }
    render() {
        const {stories} = this.props;
        //console.log("Stories component...")
        //console.log(stories)
        return(
            <div className="stories">
              <div className="stories-header">
                {Object.keys(COLUMNS).map((key) => {
                    console.log("key: " + key);
                    return(
                        <span
                            key={key}
                            style={{width: COLUMNS[key].width}}
                        >
                            {COLUMNS[key].label}
                        </span>
                    );    
                })}
                </div>
                
                {stories.map((element, index) => {
                    return (<Story key={element.objectID} story={element} onArchive={this.archiveStory} columns={COLUMNS}/>)
                    })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  stories: getReadableStories(state)
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);