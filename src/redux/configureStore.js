import { useMemo } from 'react'

import {applyMiddleware, createStore , compose} from 'redux'
import {createWrapper} from 'next-redux-wrapper';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducers from "./../reducers";
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()

let store

const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload:true,
          })
        : compose;

function initStore(initialState) {
    const middlewares = [
        thunk,
        sagaMiddleware,
    ];
    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const store = createStore(
        rootReducers(),
        initialState,
        composeEnhancers(...enhancers)
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)
  
    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
      _store = initStore({
        ...store.getState(),
        ...preloadedState,
      })
      // Reset the current store
      store = undefined
    }
  
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store
  
    return _store
  }
  
export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

export const dispatchStore = 

export const makeStore = createWrapper(initStore)

export default store;

// export default wrapper;
