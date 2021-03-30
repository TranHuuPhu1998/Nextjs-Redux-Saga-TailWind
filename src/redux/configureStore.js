import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducers from "./../reducers";
import rootSaga from '../sagas/rootSaga';

// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'connected-react-router';

const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload:false,
          })
        : compose;

const sagaMiddleware = createSagaMiddleware()

// export const history = createBrowserHistory();

const configureStore = () => {
    const middlewares = [
        thunk,
        sagaMiddleware,
        // routerMiddleware(history)
    ];
    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const store = createStore(
        rootReducers(),
        composeEnhancers(...enhancers)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};



export default configureStore;
