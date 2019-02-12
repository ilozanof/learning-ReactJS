# redux-async-simple

This is an example of how to make asynchornous calls in a _React+redux_ application, and changing the state at the same time.

> This app is inspired in the one here: [Understanding redux-saga: From action creator to sagas](https://blog.logrocket.com/understanding-redux-saga-from-action-creators-to-sagas-2587298b5e71)


The applicacion is very simple, the whole code fits in just one file, _index.js_. the Asyncronous thing hapens in the method _fetchDog()_, which is define inside the _DogViewer_ component. 

Basically, we are getting info from an external APi, through a HTTP GET call using the Javascript _fetch_ function. This function behavies in a Asynchronous way, so what we've done here is to make sure that the state is updated the right way, depending on the asynchronous call being already done or not. (the state is updated when we dispatch the actions).