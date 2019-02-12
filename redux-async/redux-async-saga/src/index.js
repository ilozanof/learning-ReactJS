/**
 * Example of an Asyncronous API call with React+Redux+Saga.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';


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

// Sagas definition...

// This function is executed by the Saga middleware, and it's running in the background
// Every time it intercepts a Redux Action of type 'FETCHED_DOG', it delegates the
// execution to a helper method, who does the job ("fetchDogAsync" in this case)
function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

// This is a business logic function, that runs asynchronously.
// Its implemented as a Generator Function.
// The Saga framework is responsible for accessing the values of this
// generator, as they are available.
function* fetchDogAsync() {
    try {
        yield put(requestDogAction());
        const data = yield call(() => {
            return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        });
        yield put(requestDogSuccessAction(data));
    } catch (error) {
        yield put(requestDogErrorAction());
    }
}

// Redux Store and Saga Definition...
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
    applyMiddleware(sagaMiddleware)
    );
sagaMiddleware.run(watchFetchDog);

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

function fetchDog(dispatch) {
    dispatch({ type:'FETCHED_DOG'});
}

// This is the definition of the DogViewer Component.
class DogViewer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <button onClick={()=>fetchDog(this.props.dispatch)}>Show Dog</button>
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
