# redux-async-saga

This is an example of how to make asynchornous calls in a _React+redux+saga_ application, and changing the state at the same time. 

> This app is inspired in the one here: [Understanding redux-saga: From action creator to sagas](https://blog.logrocket.com/understanding-redux-saga-from-action-creators-to-sagas-2587298b5e71)

In this scenario, unlike the _redux-async-simple_ project, the business logic is _NOT_ defined in methods inside the _Component_, but outside (but in the same file). 

The integration of _Saga_ seems to consists of the following points:

* We define _Saga_ as a middleware
* We implement the business logic as methods _outside_ the Components (I guess it's a good idea to leave the components only for the rendering part). The methods that are supposed to run asynchronously are implemented by generators. For each Async method we follow this pattern:
  * We assume that our function will be triggered by a redux action. 
  * We define a generator function that look for new incoming redux actions
  * every time we get an action, we launch a helper method, which is _another_ generator function that does the real work.


for example, here:

```
/ Sagas definition...

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

```