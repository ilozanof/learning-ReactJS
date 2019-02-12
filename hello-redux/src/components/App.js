import React, { Component } from 'react';
import Stories from './Stories';


import './App.css';

export class App extends React.Component {
    render() {
        return(
            <div className="app">
                <Stories/>
            </div>
        );
    }
}

export default App;