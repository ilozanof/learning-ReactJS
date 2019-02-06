import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
 NOTE: Look into the following tutorial for some reference about the changes made in this
 project:
 https://www.fullstackreact.com/30-days-of-react/day-4/
*/

import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/timeline.css';
import {Header} from './Header.js'
import {Content} from './Content.js'
import {ContentData} from './ContentData.js'

// We define a set of activities, in order to test our "contentData" component:

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate my wonderful lunch",
    user: {
      id: 1, name: "Nate",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{from: "Ari", text: "Me Too!"}]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, name: "Ari",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{from: "Nate", text: "I am so jealous"}]
  }
];

class App extends Component {
  render() {
    return (
      <div className="demo">
        <div className="notificationsFrame">
          <div className="panel">
            <Header title="This is the timeline"/>
            <Content />
            <ContentData activities={activities}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
