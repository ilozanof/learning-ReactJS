/**
 * Example of an Asyncronous API call with React+Redux.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

// Reducers:

const initialState = {
    url: '',
    loading: false,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_DOG':
            return {
                url: '',
                loading: true,
                error: false
            };
        case 'REQUESTED_DOG_SUCCEEDED':
            return {
                url: action.url,
                loading: false,
                error: false
            };
        case 'REQUESTED_DOG_FAILED':
            return {
                url: '',
                loading: false,
                error: true
            };
        default: return state;
    }
}

// Store Definition...
const store = createStore(reducer);

// Action Creators...
const requestDogAction = () => {
    return { type: 'REQUESTED_DOG' }
};

const requestDogSuccessAction = (data) => {
    return { type: 'REQUESTED_DOG_SUCCEEDED', url: data.message }
};

const requestDogErrorAction = () => {
    return { type: 'REQUESTED_DOG_FAILED' }
};

// This is the definition of the DogViewer Component.
class DogViewer extends React.Component {

    constructor(props) {
        super(props);
        this.fetchDog = this.fetchDog.bind(this);
    }

    fetchDog() {
        // First, we update the State...
        const dispatch = this.props.dispatch;
        dispatch(requestDogAction());
        // Then, we make a, Asynchronous call to get the Dog Data...
        // Once we get the result, we also update the state (it could have gone right, or
        // wrong, in each case we update the state using a different Action)
        return fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(
                data => dispatch(requestDogSuccessAction(data)),
                err => dispatch(requestDogErrorAction())
            );
    }

    render() {
        return(
            <div>
                <button onClick={this.fetchDog}>Show Dog</button>
                {
                    this.props.loading 
                        ? <p>loading...</p> 
                        : this.props.error 
                            ? <p>Error try again</p>
                            : <p><img src={this.props.url}></img></p>
                }
            </div>
        );
    }
}

const DogViewerConnected = connect((state) => {
    console.log(state);
    return state;
})(DogViewer);

// Now we render the component...
ReactDOM.render(
        <Provider store={store}>
            <DogViewerConnected />
        </Provider>
        , document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
